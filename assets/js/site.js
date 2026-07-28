(function () {
  const cfg = window.GRID_CONFIG || {};
  document.querySelectorAll('[data-company]').forEach(el => el.textContent = cfg.companyName || 'Grid Estimations');
  document.querySelectorAll('[data-email]').forEach(el => { el.textContent = cfg.email || ''; el.href = `mailto:${cfg.email || ''}`; });
  document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = cfg.phone || ''; el.href = `tel:${(cfg.phone || '').replace(/[^+\d]/g,'')}`; });
  document.querySelectorAll('[data-location]').forEach(el => el.textContent = cfg.location || '');

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuButton && nav) menuButton.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('[data-quote-form]').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`Estimate Request - ${data.get('projectType') || 'New Project'}`);
      const body = encodeURIComponent([
        `Name: ${data.get('name') || ''}`,
        `Company: ${data.get('company') || ''}`,
        `Phone: ${data.get('phone') || ''}`,
        `Project Type: ${data.get('projectType') || ''}`,
        `Trade/Service: ${data.get('service') || ''}`,
        `Location: ${data.get('location') || ''}`,
        `Bid Date: ${data.get('bidDate') || ''}`,
        '',
        `Project Details:`,
        data.get('message') || ''
      ].join('\n'));
      window.location.href = `mailto:${cfg.email || 'your-email@example.com'}?subject=${subject}&body=${body}`;
    });
  });
})();
