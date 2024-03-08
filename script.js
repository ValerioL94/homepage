const themeToggle = document.getElementById('themeSwitch');
const bodyEl = document.body;

function setTheme(theme) {
  bodyEl.classList.toggle('dark', theme === 'dark');
  themeToggle.classList.toggle('dark', theme === 'dark');
  bodyEl.classList.toggle('light', theme !== 'dark');
  themeToggle.classList.toggle('light', theme !== 'dark');
  localStorage.setItem('theme', theme);
}
function toggleTheme() {
  setTheme(bodyEl.classList.contains('dark') ? 'light' : 'dark');
}
themeToggle.addEventListener('click', toggleTheme);
themeToggle.addEventListener('click', () => {
  themeToggle.classList.toggle('spin');
});

const storedTheme = localStorage.getItem('theme');

function detectPreferredTheme() {
  if (storedTheme) {
    setTheme(storedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    setTheme('dark');
  }
}
detectPreferredTheme();
