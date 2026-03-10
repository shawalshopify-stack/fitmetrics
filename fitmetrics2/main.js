/* FitMetrics.io — Shared JS */

// Particles
function initParticles() {
  const colors = ['#8b5cf6','#ec4899','#06b6d4','#10b981','#818cf8','#f97316'];
  const c = document.getElementById('pts');
  if (!c) return;
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    const s = Math.random() * 4 + 1.5;
    const o = Math.random() * 0.2 + 0.04;
    p.style.cssText = `width:${s}px;height:${s}px;background:${colors[i%colors.length]};left:${Math.random()*100}%;--o:${o};animation-duration:${Math.random()*20+10}s;animation-delay:${Math.random()*20}s;`;
    c.appendChild(p);
  }
}

// Ripple
function ripple(btn, e) {
  const r = btn.getBoundingClientRect();
  const d = document.createElement('span');
  d.className = 'ripple';
  const sz = r.width;
  const x = e ? e.clientX - r.left : r.width / 2;
  const y = e ? e.clientY - r.top  : r.height / 2;
  d.style.cssText = `width:${sz}px;height:${sz}px;left:${x-sz/2}px;top:${y-sz/2}px`;
  btn.appendChild(d);
  setTimeout(() => d.remove(), 600);
}

// Shake
function shake(id = 'mainCard') {
  const c = document.getElementById(id);
  if (!c) return;
  const seq = [10,-9,7,-5,3,-1,0];
  let p = Promise.resolve();
  seq.forEach(v => p = p.then(() => new Promise(r => setTimeout(() => { c.style.transform = `translateX(${v}px)`; r(); }, 42))));
  p.then(() => c.style.transform = '');
}

// Animated number
function animNum(el, from, to, dur = 750, dec = 1) {
  const s = performance.now();
  (function step(now) {
    const t = Math.min((now - s) / dur, 1);
    const e = 1 - Math.pow(1 - t, 4);
    el.textContent = (from + (to - from) * e).toFixed(dec);
    if (t < 1) requestAnimationFrame(step);
  })(performance.now());
}

// Slider fill
function sldFill(fillId, val, mn, mx) {
  const pct = Math.max(0, Math.min(100, ((parseFloat(val) - mn) / (mx - mn)) * 100));
  const el = document.getElementById(fillId);
  if (el) el.style.width = pct + '%';
}

// Sync slider <-> input
function bindSlider(inputId, sliderId, fillId, mn, mx) {
  const inp = document.getElementById(inputId);
  const sld = document.getElementById(sliderId);
  if (!inp || !sld) return;
  sld.min = mn; sld.max = mx;
  sldFill(fillId, inp.value, mn, mx);
  inp.addEventListener('input', () => { sld.value = inp.value; sldFill(fillId, inp.value, mn, mx); });
  sld.addEventListener('input', () => { inp.value = sld.value; sldFill(fillId, sld.value, mn, mx); });
}

// Nav active
function navActive() {
  const p = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const h = a.getAttribute('href') || '';
    a.classList.toggle('active', h === p || h.endsWith(p));
  });
}

// Hamburger
function initBurger() {
  const btn = document.getElementById('burger');
  const ul  = document.querySelector('.nav-links');
  if (!btn || !ul) return;
  btn.addEventListener('click', () => ul.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !ul.contains(e.target)) ul.classList.remove('open');
  });
}

// Tool tile stagger
function staggerTiles() {
  document.querySelectorAll('.tool-tile, .blog-card').forEach((t, i) => {
    t.style.animationDelay = (i * 0.06 + 0.2) + 's';
  });
}

// Enter -> click btn
function enterCalc() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const btn = document.querySelector('.btn-calc');
      if (btn) btn.click();
    }
  });
}

// FAQ
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '✅ Message Sent!';
    btn.style.background = 'linear-gradient(135deg,#065f46,#10b981)';
    setTimeout(() => { btn.textContent = '✦ Send Message'; btn.style.background = ''; form.reset(); }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  navActive();
  initBurger();
  staggerTiles();
  enterCalc();
  initFAQ();
  initContactForm();
});
