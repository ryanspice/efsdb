(function () {
    let accessToken = null;
    let refreshPromise = null;

    function requestUrl(input) {
        if (typeof input === 'string') {
            return input;
        }
        if (input instanceof Request) {
            return input.url;
        }
        return '';
    }

    window.setAccessToken = function (token) {
        accessToken = token;
    };

    window.getAccessToken = function () {
        return accessToken;
    };

    const originalFetch = window.fetch.bind(window);

    async function tryRefresh() {
        if (refreshPromise) {
            return refreshPromise;
        }

        refreshPromise = (async function () {
            const refreshRes = await originalFetch('/api/auth/refresh', {
                method: 'POST',
                credentials: 'same-origin'
            });

            if (!refreshRes.ok) {
                accessToken = null;
                return false;
            }

            const data = await refreshRes.json();
            accessToken = data.accessToken || null;
            return !!accessToken;
        })();

        try {
            return await refreshPromise;
        } finally {
            refreshPromise = null;
        }
    }

    window.refreshAccessToken = tryRefresh;

    window.fetch = async function (input, init = {}) {
        const url = requestUrl(input);
        const requestInit = { credentials: 'same-origin', ...init };

        if (accessToken) {
            requestInit.headers = requestInit.headers || {};
            if (requestInit.headers instanceof Headers) {
                requestInit.headers.set('Authorization', `Bearer ${accessToken}`);
            } else {
                requestInit.headers['Authorization'] = `Bearer ${accessToken}`;
            }
        }

        const response = await originalFetch(input, requestInit);
        if (response.status !== 401 || url.includes('/api/auth/refresh')) {
            return response;
        }

        const success = await tryRefresh().catch(() => false);
        if (!success) {
            return response;
        }

        const retryInit = { credentials: 'same-origin', ...init };
        retryInit.headers = retryInit.headers || {};
        if (retryInit.headers instanceof Headers) {
            retryInit.headers.set('Authorization', `Bearer ${accessToken}`);
        } else {
            retryInit.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return originalFetch(input, retryInit);
    };
})();
