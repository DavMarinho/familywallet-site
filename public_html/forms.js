/**
 * forms.js — Captura de leads da waitlist.
 * Substitui o bloco <script> inline do index.html.
 */

const API_URL = 'https://astonishing-expression-production-7fed.up.railway.app';

async function submitWaitlist(email, language) {
  const res = await fetch(`${API_URL}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, language }),
  });
  if (!res.ok) throw new Error('failed');
  return res.json();
}

function handleForm(form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const language = window.I18N?.getLang() || 'pt';
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;

    btn.textContent = '...';
    btn.disabled = true;

    try {
      await submitWaitlist(email, language);
      btn.textContent = '✓';
      btn.style.background = '#10B981';
      form.reset();

      // Mensagem de sucesso
      const msg = document.createElement('p');
      msg.textContent = window.I18N?.t('form.success') || 'Obrigado! Você está na lista.';
      msg.style.cssText = 'color:#4ADE80;font-size:12px;margin-top:8px;text-align:center';
      form.parentNode.insertBefore(msg, form.nextSibling);
      setTimeout(() => msg.remove(), 5000);

    } catch {
      alert(window.I18N?.t('form.error') || 'Erro ao cadastrar. Tente novamente.');
      btn.textContent = orig;
      btn.disabled = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#wf1, #wf2').forEach(handleForm);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Lang switcher
  const lt = document.getElementById('lt');
  const lm = document.getElementById('lm');
  lt?.addEventListener('click', e => { e.stopPropagation(); lm.classList.toggle('hidden'); });
  document.addEventListener('click', () => lm?.classList.add('hidden'));
  document.querySelectorAll('.lo').forEach(o => {
    o.addEventListener('click', () => {
      window.I18N?.setLang(o.dataset.lang);
      lm.classList.add('hidden');
    });
  });

  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});