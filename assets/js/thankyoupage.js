document.addEventListener('DOMContentLoaded', () => {
  // Generate a friendly reference code, e.g. COS-4F82K1
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  const refCodeEl = document.getElementById('refCode');
  if (refCodeEl) refCodeEl.textContent = `COS-${code}`;

  const refTimeEl = document.getElementById('refTime');
  if (refTimeEl) {
    const now = new Date();
    refTimeEl.textContent = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
});
