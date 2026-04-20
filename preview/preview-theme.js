// Floating theme toggle. Each preview page remembers its own state
// (keyed by filename) so components can be reviewed independently —
// flipping Buttons to dark won't affect Radios, etc.
(function () {
  // Derive a per-page key from the URL, e.g. "buttons-primary.html" → "ads_theme::buttons-primary"
  var slug = (location.pathname.split('/').pop() || 'preview').replace(/\.html?$/, '');
  var STORAGE_KEY = 'ads_theme::' + slug;
  function getTheme() {
    try { return localStorage.getItem(STORAGE_KEY) || 'align-dark'; }
    catch (e) { return 'align-dark'; }
  }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch (e) {}
    var btn = document.querySelector('.pv-theme-toggle');
    if (btn) {
      btn.setAttribute('data-mode', t);
      btn.setAttribute('aria-label', t === 'align-dark' ? 'Switch to light mode' : 'Switch to dark mode');
      var label = btn.querySelector('.pv-lbl');
      if (label) label.textContent = t === 'align-dark' ? 'Light' : 'Dark';
    }
  }

  // Apply theme before first paint so the page doesn't flash.
  setTheme(getTheme());

  function mount() {
    if (document.querySelector('.pv-theme-toggle')) return;
    var btn = document.createElement('button');
    btn.className = 'pv-theme-toggle';
    btn.type = 'button';
    btn.setAttribute('data-mode', getTheme());
    btn.setAttribute('aria-label',
      getTheme() === 'align-dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.innerHTML =
      // Sun (shown in dark mode → "click to go light")
      '<svg class="pv-sun" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3.5"/>' +
      '<line x1="10" y1="2" x2="10" y2="4"/><line x1="10" y1="16" x2="10" y2="18"/>' +
      '<line x1="2" y1="10" x2="4" y2="10"/><line x1="16" y1="10" x2="18" y2="10"/>' +
      '<line x1="4.3" y1="4.3" x2="5.7" y2="5.7"/><line x1="14.3" y1="14.3" x2="15.7" y2="15.7"/>' +
      '<line x1="4.3" y1="15.7" x2="5.7" y2="14.3"/><line x1="14.3" y1="5.7" x2="15.7" y2="4.3"/></svg>' +
      // Moon (shown in light mode)
      '<svg class="pv-moon" viewBox="0 0 20 20"><path d="M 16 12.5 A 6.5 6.5 0 1 1 7.5 4 A 5.2 5.2 0 0 0 16 12.5 Z"/></svg>' +
      '<span class="pv-lbl">' + (getTheme() === 'align-dark' ? 'Light' : 'Dark') + '</span>';
    btn.addEventListener('click', function () {
      setTheme(getTheme() === 'align-dark' ? 'align-light' : 'align-dark');
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
