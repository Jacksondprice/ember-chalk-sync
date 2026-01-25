async function load() {
  const response = await fetch('/api/attendance');
  const items = await response.json();
  document.getElementById('items').innerHTML = items.map((i) => `<li>${i.name}</li>`).join('');
}
load().catch((error) => console.error(error));
