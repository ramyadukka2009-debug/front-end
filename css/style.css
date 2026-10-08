/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    color: #172033;
    background: #ffffff;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input {
    font-family: inherit;
}

button {
    cursor: pointer;
}

img {
    max-width: 100%;
    display: block;
}


/* =========================================================
   GLOBAL
========================================================= */

:root {
    --primary: #635bff;
    --primary-dark: #5048d9;
    --secondary: #eef0ff;

    --dark: #172033;
    --text: #596275;
    --muted: #8b93a7;

    --white: #ffffff;
    --background: #f8f9ff;
    --border: #e5e7ef;

    --success: #16a34a;
    --danger: #dc2626;

    --shadow:
        0 20px 50px rgba(32, 37, 70, 0.08);

    --radius: 16px;
}

.container {
    width: min(1120px, 92%);
    margin: 0 auto;
}

.section {
    padding: 100px 0;
}


/* =========================================================
   BUTTONS
========================================================= */

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    padding: 12px 22px;

    font-size: 15px;
    font-weight: 600;

    border: 1px solid transparent;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        border 0.2s ease,
        box-shadow 0.2s ease;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-primary {
    color: var(--white);
    background: var(--primary);
    box-shadow: 0 8px 20px rgba(99, 91, 255, 0.22);
}

.btn-primary:hover {
    background: var(--primary-dark);
}

.btn-outline {
    color: var(--primary);
    background: transparent;
    border-color: var(--primary);
}

.btn-outline:hover {
    color: var(--white);
    background: var(--primary);
}

.btn-secondary {
    color: var(--dark);
    background: var(--white);
    border-color: var(--border);
}

.btn-secondary:hover {
    border-color: var(--primary);
    color: var(--primary);
}

.btn-white {
    color: var(--primary);
    background: var(--white);
}

.btn-large {
    padding: 15px 28px;
}

.btn-full {
    width: 100%;
    padding: 14px;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.94);

    border-bottom: 1px solid rgba(229, 231, 239, 0.7);

    backdrop-filter: blur(15px);
}

.nav-container {
    min-height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
    color: var(--dark);
}

.logo span {
    color: var(--primary);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 32px;
}

.nav-menu > a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text);

    transition: color 0.2s ease;
}

.nav-menu > a:hover {
    color: var(--primary);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.mobile-auth {
    display: none;
}

.menu-toggle {
    display: none;

    border: none;
    background: transparent;

    font-size: 26px;
    color: var(--dark);
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: 720px;

    display: flex;
    align-items: center;

    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(99, 91, 255, 0.09),
            transparent 30%
        ),
        radial-gradient(
            circle at 90% 80%,
            rgba(123, 97, 255, 0.08),
            transparent 30%
        ),
        #ffffff;
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;
}

.hero-badge {
    display: inline-flex;

    padding: 7px 14px;

    margin-bottom: 22px;

    border-radius: 50px;

    color: var(--primary);
    background: var(--secondary);

    font-size: 13px;
    font-weight: 700;
}

.hero-content h1 {
    max-width: 650px;

    font-size: clamp(44px, 5vw, 68px);

    line-height: 1.05;

    letter-spacing: -2.5px;

    color: var(--dark);
}

.hero-content h1 span {
    display: block;
    color: var(--primary);
}

.hero-content > p {
    max-width: 560px;

    margin: 25px 0;

    font-size: 18px;

    color: var(--text);
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.hero-stats {
    display: flex;

    gap: 40px;

    margin-top: 45px;
}

.stat {
    display: flex;
    flex-direction: column;
}

.stat strong {
    font-size: 25px;
    color: var(--dark);
}

.stat span {
    font-size: 13px;
    color: var(--muted);
}


/* =========================================================
   HERO DASHBOARD
========================================================= */

.hero-visual {
    position: relative;

    min-height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.dashboard-card {
    width: 390px;

    padding: 25px;

    border-radius: 22px;

    background: var(--white);

    box-shadow:
        0 30px 80px rgba(43, 45, 86, 0.15);

    border: 1px solid var(--border);

    position: relative;
    z-index: 2;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.small-text {
    display: block;

    margin-bottom: 3px;

    font-size: 11px;
    color: var(--muted);
}

.dashboard-header h3 {
    font-size: 18px;
}

.avatar {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: white;
    background: var(--primary);

    font-weight: 700;
}

.chart {
    margin-top: 25px;

    padding: 18px;

    border-radius: 15px;

    background: #f8f8ff;
}

.chart-info {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
}

.chart-info strong {
    color: var(--success);
}

.bars {
    height: 130px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-top: 20px;
}

.bar {
    width: 28px;

    border-radius: 6px 6px 2px 2px;

    background: linear-gradient(
        to top,
        var(--primary),
        #aaa5ff
    );
}

.bar-1 {
    height: 45%;
}

.bar-2 {
    height: 62%;
}

.bar-3 {
    height: 50%;
}

.bar-4 {
    height: 78%;
}

.bar-5 {
    height: 68%;
}

.bar-6 {
    height: 90%;
}

.bar-7 {
    height: 100%;
}

.dashboard-items {
    display: grid;

    gap: 12px;

    margin-top: 18px;
}

.dashboard-item {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 12px;

    border: 1px solid var(--border);

    border-radius: 12px;
}

.item-icon {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: var(--secondary);
}

.dashboard-item strong,
.dashboard-item span {
    display: block;
}

.dashboard-item strong {
    font-size: 13px;
}

.dashboard-item span {
    font-size: 11px;
    color: var(--muted);
}

.floating-card {
    position: absolute;

    display: flex;
    align-items: center;

    gap: 10px;

    padding: 12px 15px;

    border-radius: 12px;

    background: var(--white);

    box-shadow: var(--shadow);

    z-index: 3;
}

.floating-card > span {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background: var(--secondary);
}

.floating-card strong,
.floating-card small {
    display: block;
}

.floating-card strong {
    font-size: 12px;
}

.floating-card small {
    font-size: 10px;
    color: var(--muted);
}

.floating-card-one {
    top: 70px;
    left: 0;
}

.floating-card-two {
    right: 0;
    bottom: 70px;
}


/* =========================================================
   SECTION HEADING
========================================================= */

.section-heading {
    max-width: 650px;

    margin: 0 auto 55px;

    text-align: center;
}

.section-label {
    display: inline-block;

    margin-bottom: 12px;

    color: var(--primary);

    font-size: 12px;
    font-weight: 800;

    letter-spacing: 1.5px;
}

.section-heading h2,
.about-content h2 {
    font-size: clamp(32px, 4vw, 45px);

    line-height: 1.15;

    letter-spacing: -1.5px;
}

.section-heading p {
    margin-top: 15px;

    color: var(--text);
}


/* =========================================================
   FEATURES
========================================================= */

.features {
    background: var(--background);
}

.feature-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.feature-card {
    padding: 28px;

    background: var(--white);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.feature-card:hover {
    transform: translateY(-6px);

    box-shadow: var(--shadow);
}

.feature-icon {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius: 14px;

    background: var(--secondary);

    font-size: 23px;
}

.feature-card h3 {
    margin-bottom: 10px;

    font-size: 18px;
}

.feature-card p {
    margin-bottom: 20px;

    color: var(--text);

    font-size: 14px;
}

.feature-card a {
    color: var(--primary);

    font-size: 13px;
    font-weight: 700;
}


/* =========================================================
   ABOUT
========================================================= */

.about-container {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;
}

.about-image {
    min-height: 450px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 25px;

    background:
        linear-gradient(
            135deg,
            #f0efff,
            #fafaff
        );

    border: 1px solid var(--border);
}

.about-box {
    width: 70%;

    padding: 40px;

    text-align: center;

    background: var(--white);

    border-radius: 20px;

    box-shadow: var(--shadow);
}

.about-circle {
    width: 75px;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto 20px;

    border-radius: 50%;

    background: var(--secondary);

    font-size: 30px;
}

.about-box h3 {
    margin-bottom: 10px;

    font-size: 22px;
}

.about-box p {
    color: var(--text);
}

.about-content > p {
    margin: 20px 0 30px;

    color: var(--text);
}

.about-list {
    display: grid;
    gap: 18px;

    margin-bottom: 30px;
}

.about-list-item {
    display: flex;

    gap: 12px;
}

.about-list-item > span {
    width: 25px;
    height: 25px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: var(--success);

    background: #eaf8ee;

    font-size: 12px;
    font-weight: 700;
}

.about-list-item strong {
    font-size: 14px;
}

.about-list-item p {
    margin-top: 2px;

    color: var(--text);

    font-size: 13px;
}


/* =========================================================
   CTA
========================================================= */

.cta {
    padding-top: 20px;
}

.cta-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 40px;

    padding: 55px;

    border-radius: 25px;

    color: white;

    background:
        linear-gradient(
            135deg,
            #635bff,
            #5148d9
        );
}

.cta-box .section-label {
    color: #dcd9ff;
}

.cta-box h2 {
    max-width: 600px;

    font-size: 35px;

    line-height: 1.2;
}

.cta-box p {
    max-width: 600px;

    margin-top: 10px;

    color: #dedcff;
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
    margin-top: 100px;

    padding-top: 70px;

    background: #101524;

    color: white;
}

.footer-container {
    display: flex;
    justify-content: space-between;

    gap: 50px;

    padding-bottom: 60px;
}

.footer-brand {
    max-width: 300px;
}

.footer-brand .logo {
    color: white;
}

.footer-brand p {
    margin-top: 15px;

    color: #9299aa;

    font-size: 14px;
}

.footer-links {
    display: flex;

    gap: 80px;
}

.footer-links div {
    display: flex;
    flex-direction: column;

    gap: 10px;
}

.footer-links h4 {
    margin-bottom: 5px;
}

.footer-links a {
    color: #9299aa;

    font-size: 13px;

    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: white;
}

.footer-bottom {
    padding: 20px 0;

    border-top: 1px solid #252b3b;
}

.footer-bottom p {
    color: #747c90;

    font-size: 12px;
}


/* =========================================================
   AUTH PAGE
========================================================= */

.auth-page {
    min-height: 100vh;

    background: var(--background);
}

.auth-container {
    min-height: 100vh;

    display: grid;

    grid-template-columns: 45% 55%;
}

.auth-left {
    position: relative;

    display: flex;
    flex-direction: column;

    padding: 45px;

    color: white;

    background:
        radial-gradient(
            circle at 20% 20%,
            rgba(255, 255, 255, 0.15),
            transparent 30%
        ),
        linear-gradient(
            135deg,
            #635bff,
            #443bb9
        );
}

.auth-left .logo {
    color: white;
}

.auth-left .logo span {
    color: #dcd9ff;
}

.auth-left-content {
    max-width: 480px;

    margin: auto;
}

.auth-left .hero-badge {
    color: white;

    background: rgba(255, 255, 255, 0.14);
}

.auth-left-content h1 {
    font-size: clamp(40px, 5vw, 60px);

    line-height: 1.05;

    letter-spacing: -2px;
}

.auth-left-content h1 span {
    display: block;

    color: #ddd9ff;
}

.auth-left-content > p {
    margin-top: 22px;

    color: #dedcff;

    font-size: 16px;
}

.auth-benefits {
    display: grid;

    gap: 15px;

    margin-top: 35px;
}

.auth-benefits div {
    display: flex;
    align-items: center;

    gap: 12px;
}

.auth-benefits span {
    width: 27px;
    height: 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.15);

    font-size: 12px;
}

.auth-benefits p {
    font-size: 14px;
}

.auth-right {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 50px 30px;
}

.auth-card {
    width: min(460px, 100%);

    padding: 40px;

    background: var(--white);

    border: 1px solid var(--border);

    border-radius: 20px;

    box-shadow: var(--shadow);
}

.auth-header {
    margin-bottom: 25px;
}

.auth-header h2 {
    font-size: 30px;

    letter-spacing: -1px;
}

.auth-header p {
    margin-top: 7px;

    color: var(--text);

    font-size: 14px;
}


/* =========================================================
   FORMS
========================================================= */

.form-group {
    margin-bottom: 19px;
}

.form-group label,
.label-row label {
    display: block;

    margin-bottom: 7px;

    color: var(--dark);

    font-size: 13px;

    font-weight: 600;
}

.label-row {
    display: flex;
    justify-content: space-between;
}

.label-row label {
    margin-bottom: 7px;
}

.forgot-link {
    color: var(--primary);

    font-size: 12px;

    font-weight: 600;
}

.form-group input {
    width: 100%;

    padding: 13px 14px;

    outline: none;

    border: 1px solid var(--border);

    border-radius: 9px;

    color: var(--dark);

    background: white;

    font-size: 14px;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.form-group input:focus {
    border-color: var(--primary);

    box-shadow:
        0 0 0 3px rgba(99, 91, 255, 0.1);
}

.form-group input.input-error {
    border-color: var(--danger);
}

.password-wrapper {
    position: relative;
}

.password-wrapper input {
    padding-right: 60px;
}

.password-toggle {
    position: absolute;

    top: 50%;
    right: 12px;

    transform: translateY(-50%);

    border: none;

    background: transparent;

    color: var(--primary);

    font-size: 12px;
    font-weight: 700;
}

.password-hint {
    display: block;

    margin-top: 5px;

    color: var(--muted);

    font-size: 11px;
}

.error-message {
    display: block;

    min-height: 17px;

    margin-top: 4px;

    color: var(--danger);

    font-size: 11px;
}

.remember-row {
    margin-bottom: 20px;
}

.checkbox-label {
    display: flex;
    align-items: flex-start;

    gap: 8px;

    color: var(--text);

    font-size: 12px;

    cursor: pointer;
}

.checkbox-label input {
    margin-top: 3px;
    accent-color: var(--primary);
}

.terms-row {
    margin-bottom: 20px;
}

.terms-row a {
    color: var(--primary);
    font-weight: 600;
}


/* =========================================================
   FORM MESSAGE
========================================================= */

.form-message {
    display: none;

    margin-bottom: 18px;

    padding: 11px 13px;

    border-radius: 8px;

    font-size: 13px;
}

.form-message.success {
    display: block;

    color: #166534;

    background: #dcfce7;

    border: 1px solid #bbf7d0;
}

.form-message.error {
    display: block;

    color: #991b1b;

    background: #fee2e2;

    border: 1px solid #fecaca;
}


/* =========================================================
   AUTH EXTRA
========================================================= */

.auth-divider {
    display: flex;
    align-items: center;

    gap: 12px;

    margin: 25px 0;

    color: var(--muted);

    font-size: 10px;
}

.auth-divider::before,
.auth-divider::after {
    content: "";

    flex: 1;

    height: 1px;

    background: var(--border);
}

.auth-switch {
    text-align: center;

    color: var(--text);

    font-size: 13px;
}

.auth-switch a {
    color: var(--primary);

    font-weight: 700;
}

.back-home {
    display: block;

    margin-top: 25px;

    text-align: center;

    color: var(--muted);

    font-size: 12px;
}

.back-home:hover {
    color: var(--primary);
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1000px) {

    .hero-container {
        gap: 40px;
    }

    .feature-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .about-container {
        gap: 40px;
    }

    .auth-container {
        grid-template-columns: 1fr;
    }

    .auth-left {
        display: none;
    }

    .auth-right {
        min-height: 100vh;
    }
}


@media (max-width: 800px) {

    .nav-menu {
        position: absolute;

        top: 76px;
        left: 0;
        right: 0;

        display: none;
        flex-direction: column;
        align-items: stretch;

        gap: 0;

        padding: 15px 5%;

        background: white;

        border-bottom: 1px solid var(--border);

        box-shadow: var(--shadow);
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-menu > a {
        padding: 13px 0;
    }

    .mobile-auth {
        display: flex;

        gap: 10px;

        padding: 10px 0;
    }

    .nav-actions {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .hero {
        padding: 80px 0;
    }

    .hero-container {
        grid-template-columns: 1fr;
    }

    .hero-content {
        text-align: center;
    }

    .hero-content > p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-stats {
        justify-content: center;
    }

    .hero-visual {
        min-height: 430px;
    }

    .about-container {
        grid-template-columns: 1fr;
    }

    .cta-box {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-container {
        flex-direction: column;
    }
}


@media (max-width: 600px) {

    .section {
        padding: 70px 0;
    }

    .hero-content h1 {
        font-size: 42px;
    }

    .hero-stats {
        gap: 25px;
    }

    .dashboard-card {
        width: 90%;
    }

    .floating-card {
        display: none;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .about-image {
        min-height: 350px;
    }

    .about-box {
        width: 85%;
        padding: 25px;
    }

    .cta-box {
        padding: 35px 25px;
    }

    .cta-box h2 {
        font-size: 28px;
    }

    .footer-links {
        display: grid;

        grid-template-columns:
            repeat(2, 1fr);

        gap: 30px;
    }

    .auth-right {
        padding: 25px 15px;
    }

    .auth-card {
        padding: 28px 22px;
    }

    .auth-header h2 {
        font-size: 26px;
    }
}


@media (max-width: 400px) {

    .hero-buttons {
        flex-direction: column;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    .hero-stats {
        gap: 15px;
    }

    .stat strong {
        font-size: 21px;
    }
}