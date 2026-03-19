<?php
$roles = $app->getIdentity()->listRoles(false);
$settings = $app->getIdentity()->getTenantSettings();
?>
<section class="space-y-6">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
            <div class="section-label">Tenant Admin</div>
            <h1 class="mt-4 page-title max-w-[14ch]">Users, roles, and display modes</h1>
        </div>
        <p class="shell-copy max-w-3xl text-sm leading-7">
            Tenant admins can provision new identities, define custom roles, and switch their effective display mode
            while preserving the underlying actor for audit.
        </p>
    </div>

    <section class="grid gap-6 xl:grid-cols-2">
        <article class="form-card">
            <div class="section-label">Create User</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Provision a new login key</h2>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="field-stack">
                    <label for="admin-user-username">Username</label>
                    <input id="admin-user-username" type="text" placeholder="member-jane">
                </div>
                <div class="field-stack">
                    <label for="admin-user-name">Display name</label>
                    <input id="admin-user-name" type="text" placeholder="Jane Doe">
                </div>
            </div>
            <div class="mt-4 grid gap-4 sm:grid-cols-2">
                <div class="field-stack">
                    <label for="admin-user-role">Role</label>
                    <select id="admin-user-role">
                        <?php foreach ($roles as $role): ?>
                            <?php if (!empty($role['operatorOnly'])) continue; ?>
                            <option value="<?php echo htmlspecialchars((string)$role['id']); ?>"><?php echo htmlspecialchars((string)$role['name']); ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="field-stack">
                    <label for="admin-user-key">Custom login key (optional)</label>
                    <input id="admin-user-key" type="text" placeholder="leave blank to generate">
                </div>
            </div>
            <div class="mt-5 flex flex-wrap items-center gap-3">
                <button class="pill-button" type="button" id="admin-create-user">Create user</button>
                <span class="tag">Actual role: <?php echo htmlspecialchars($user->actualRole); ?></span>
            </div>
            <div id="admin-user-result" class="notice mt-5 hidden"></div>
        </article>

        <article class="form-card">
            <div class="section-label">Create Role</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Add a custom tenant role</h2>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="field-stack">
                    <label for="admin-role-id">Role id</label>
                    <input id="admin-role-id" type="text" placeholder="member_auditor">
                </div>
                <div class="field-stack">
                    <label for="admin-role-name">Role name</label>
                    <input id="admin-role-name" type="text" placeholder="Member Auditor">
                </div>
            </div>
            <div class="mt-4 field-stack">
                <label for="admin-role-description">Description</label>
                <input id="admin-role-description" type="text" placeholder="Can inspect decoded content and reports">
            </div>
            <div class="mt-4 field-stack">
                <label for="admin-role-entitlements">Entitlements (comma-separated)</label>
                <input id="admin-role-entitlements" type="text" value="NATURAL_VIEW">
            </div>
            <div class="mt-5 flex flex-wrap gap-3">
                <button class="pill-button" type="button" id="admin-create-role">Create role</button>
                <button class="ghost-button" type="button" id="admin-refresh-data">Refresh tables</button>
            </div>
            <div id="admin-role-result" class="notice mt-5 hidden"></div>
        </article>
    </section>

    <section class="grid gap-6 xl:grid-cols-2">
        <article class="table-card">
            <div class="section-label">Display Mode</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Impersonation-safe role switch</h2>
            <div class="mt-5 flex flex-wrap gap-3">
                <?php foreach ($user->availableDisplayModes as $mode): ?>
                    <button class="<?php echo $mode === $user->role ? 'pill-button' : 'ghost-button'; ?> admin-display-mode" type="button" data-role="<?php echo htmlspecialchars($mode); ?>">
                        <?php echo htmlspecialchars($mode); ?>
                    </button>
                <?php endforeach; ?>
            </div>
            <div class="mt-5 shell-copy">
                Actual role remains <strong><?php echo htmlspecialchars($user->actualRole); ?></strong>. Effective mode
                is <strong><?php echo htmlspecialchars($user->role); ?></strong>.
            </div>
        </article>

        <article class="table-card">
            <div class="section-label">Tenant Settings</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">UI and explorer policy</h2>
            <div class="mt-5">
                <pre><?php echo htmlspecialchars(json_encode($settings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)); ?></pre>
            </div>
        </article>
    </section>

    <section class="grid gap-6 xl:grid-cols-2">
        <article class="table-card">
            <div class="section-label">Users</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Provisioned identities</h2>
            <div id="admin-users-table" class="mt-5"></div>
        </article>

        <article class="table-card">
            <div class="section-label">Roles</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Seeded and custom roles</h2>
            <div id="admin-roles-table" class="mt-5"></div>
        </article>
    </section>
</section>

<script>
const adminState = {
    users: [],
    roles: []
};

function adminShow(el, message, isError = false) {
    el.style.display = 'block';
    el.className = isError ? 'flash-error mt-5' : 'notice mt-5';
    el.textContent = message;
}

function adminRenderUsers() {
    const mount = document.getElementById('admin-users-table');
    if (!mount) return;
    if (!adminState.users.length) {
        mount.innerHTML = '<p class="shell-copy">No users provisioned yet.</p>';
        return;
    }
    const rows = adminState.users.map((user) => `
        <tr>
            <td><strong>${user.username}</strong><br><span class="shell-copy">${user.name ?? ''}</span></td>
            <td>${user.roleId ?? user.role ?? ''}</td>
            <td>${user.status ?? 'active'}</td>
        </tr>
    `).join('');
    mount.innerHTML = `<table><thead><tr><th>User</th><th>Role</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function adminRenderRoles() {
    const mount = document.getElementById('admin-roles-table');
    if (!mount) return;
    if (!adminState.roles.length) {
        mount.innerHTML = '<p class="shell-copy">No roles found.</p>';
        return;
    }
    const rows = adminState.roles.map((role) => `
        <tr>
            <td><strong>${role.name}</strong><br><span class="shell-copy">${role.id}</span></td>
            <td>${(role.entitlements || []).join(', ')}</td>
        </tr>
    `).join('');
    mount.innerHTML = `<table><thead><tr><th>Role</th><th>Entitlements</th></tr></thead><tbody>${rows}</tbody></table>`;
}

async function adminLoad() {
    const [users, roles] = await Promise.all([
        fetch('/api/admin/users').then((res) => res.json()),
        fetch('/api/admin/roles').then((res) => res.json())
    ]);
    adminState.users = users.results || [];
    adminState.roles = roles.results || [];
    adminRenderUsers();
    adminRenderRoles();
}

document.getElementById('admin-create-user')?.addEventListener('click', async () => {
    const body = {
        username: document.getElementById('admin-user-username').value,
        name: document.getElementById('admin-user-name').value,
        roleId: document.getElementById('admin-user-role').value
    };
    const customKey = document.getElementById('admin-user-key').value.trim();
    if (customKey) body.loginKey = customKey;
    const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const json = await res.json();
    const panel = document.getElementById('admin-user-result');
    if (!res.ok) {
        adminShow(panel, json.error?.message || 'Unable to create user', true);
        return;
    }
    adminShow(panel, `Created ${json.user.username}. Login key: ${json.loginKey}`);
    adminLoad();
});

document.getElementById('admin-create-role')?.addEventListener('click', async () => {
    const body = {
        id: document.getElementById('admin-role-id').value,
        name: document.getElementById('admin-role-name').value,
        description: document.getElementById('admin-role-description').value,
        entitlements: document.getElementById('admin-role-entitlements').value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
    };
    const res = await fetch('/api/admin/roles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const json = await res.json();
    const panel = document.getElementById('admin-role-result');
    if (!res.ok) {
        adminShow(panel, json.error?.message || 'Unable to create role', true);
        return;
    }
    adminShow(panel, `Created role ${json.result.id}`);
    adminLoad();
});

document.getElementById('admin-refresh-data')?.addEventListener('click', adminLoad);

document.querySelectorAll('.admin-display-mode').forEach((button) => {
    button.addEventListener('click', async () => {
        const res = await fetch('/api/auth/display-mode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roleId: button.dataset.role })
        });
        if (res.ok) {
            window.location.reload();
            return;
        }
        const json = await res.json();
        alert(json.error?.message || 'Unable to switch display mode');
    });
});

adminLoad();
</script>
