<?php
$footerText = isset($footerText) && is_string($footerText) && $footerText !== ''
    ? $footerText
    : 'EFSDB Control Plane · Canonical encrypted manifest runtime';
?>
    </main>
    <footer class="page-shell pb-8 pt-3 sm:pb-10 sm:pt-5">
        <div class="footer-bar pt-4 text-[0.72rem] uppercase tracking-[0.22em]">
            <?php echo htmlspecialchars($footerText, ENT_QUOTES, 'UTF-8'); ?>
        </div>
    </footer>
</body>
</html>
