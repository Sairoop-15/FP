async function fetchPhdStatus() {
    try {
      const res = await fetch('https://localhost:3000');
      const data = await res.json();
  
      const container = document.getElementById('phdStatusContainer');
      container.innerHTML = '';
  
      data.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
          <strong>Title:</strong> ${item.title || 'N/A'}<br>
          <strong>Status:</strong> ${item.status || 'N/A'}<br>
          <strong>Guide:</strong> ${item.guide || 'N/A'}
        `;
        container.appendChild(div);
      });
    } catch (err) {
      console.error('Error fetching PhD Status:', err);
    }
  }
  