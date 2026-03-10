/* nav.js — inject shared nav + footer */
const NAV_HTML = (root='') => `
<nav class="nav">
  <a class="nav-logo" href="${root}index.html">
    <div class="nav-logo-mark">⚡</div>
    <span class="nav-logo-name">Fit<em>Metrics</em></span>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="${root}index.html">Home</a></li>
    <li><a href="${root}tools/bmi.html">BMI</a></li>
    <li><a href="${root}tools/calories.html">Calories</a></li>
    <li><a href="${root}tools/bodyfat.html">Body Fat</a></li>
    <li><a href="${root}tools/macros.html">Macros</a></li>
    <li><a href="${root}tools/idealweight.html">Ideal Weight</a></li>
    <li><a href="${root}tools/water.html">Water</a></li>
    <li><a href="${root}blog.html">Blog</a></li>
    <li><a href="${root}about.html">About</a></li>
  </ul>
  <div class="nav-end">
    <a class="nav-cta" href="${root}tools/bmi.html">Try Free →</a>
    <button class="nav-burger" id="burger">☰</button>
  </div>
</nav>`;

const FOOTER_HTML = (root='') => `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="nav-logo" href="${root}index.html" style="text-decoration:none">
          <div class="nav-logo-mark">⚡</div>
          <span class="nav-logo-name">Fit<em>Metrics</em></span>
        </a>
        <p>Free, science-backed health calculators trusted by thousands. No account, no nonsense — just accurate results.</p>
        <div class="footer-social">
          <a class="social-btn" href="#" title="Twitter">𝕏</a>
          <a class="social-btn" href="#" title="Instagram">📸</a>
          <a class="social-btn" href="#" title="Facebook">f</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Calculators</h4>
        <a href="${root}tools/bmi.html">BMI Calculator</a>
        <a href="${root}tools/calories.html">Calorie Calculator</a>
        <a href="${root}tools/bodyfat.html">Body Fat %</a>
        <a href="${root}tools/macros.html">Macro Tracker</a>
        <a href="${root}tools/idealweight.html">Ideal Weight</a>
        <a href="${root}tools/water.html">Water Intake</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="${root}blog.html">Blog</a>
        <a href="${root}about.html">About Us</a>
        <a href="${root}contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="${root}privacy.html">Privacy Policy</a>
        <a href="${root}terms.html">Terms of Service</a>
        <a href="${root}disclaimer.html">Medical Disclaimer</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 FitMetrics.io — All rights reserved</span>
      <span>Made with ❤️ for healthier lives</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root-path')?.dataset.root || '';
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML(root);
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML(root);
});
