// ปุ่ม Run greet.sh: พิมพ์ข้อความทีละตัวอักษรแบบ Terminal และสุ่มข้อความแต่ละครั้ง
const output = document.getElementById('output');
const runBtn = document.getElementById('runBtn');
const lines = [
  'Hello from GitHub Pages!',
  'Deployed automatically by GitHub Actions ✔',
  'สวัสดีครับ ยินดีต้อนรับสู่เว็บของกฤต',
  'Build passed. Website is live.'
];
let last = -1;
let timer = null;

runBtn.addEventListener('click', () => {
  let idx;
  do { idx = Math.floor(Math.random() * lines.length); } while (idx === last && lines.length > 1);
  last = idx;

  clearInterval(timer);
  const text = '> ' + lines[idx];
  let pos = 0;
  output.textContent = '';
  timer = setInterval(() => {
    output.textContent = text.slice(0, ++pos);
    if (pos >= text.length) clearInterval(timer);
  }, 35);
});

// ปุ่มสลับโหมด: Terminal (มืด) ↔ Paper (สว่าง) และจำค่าที่เลือกไว้
const modeBtn = document.getElementById('modeBtn');

function setMode(mode) {
  document.body.classList.toggle('paper', mode === 'paper');
  modeBtn.textContent = mode === 'paper' ? '[ terminal mode ]' : '[ paper mode ]';
}

let mode = 'terminal';
try { mode = localStorage.getItem('krit-mode') || 'terminal'; } catch (e) {}
setMode(mode);

modeBtn.addEventListener('click', () => {
  const next = document.body.classList.contains('paper') ? 'terminal' : 'paper';
  setMode(next);
  try { localStorage.setItem('krit-mode', next); } catch (e) {}
});
