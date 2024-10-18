document.addEventListener('DOMContentLoaded', function() {
  // Получаем контейнер для виджета
  const container = document.getElementById('app');

  // Запрашиваем данные о текущей сделке
  AMOCRM.widgets.load({
    domain: 'yourdomain.amocrm.ru', // замените на ваш домен Kommo CRM
    path: '/leads/detail/your_lead_id', // замените на ID вашей сделки
  }).then(response => {
    const lead = response.response.leads[0];
    const files = lead.files || [];

    if (files.length === 0) {
      container.innerHTML = '<p>No files attached to this deal.</p>';
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.className = 'preview-container';

    files.forEach(file => {
      if (file.url) {
        iframe.src = `https://docs.google.com/viewer?url=${file.url}&embedded=true`;
        container.appendChild(iframe);
      }
    });
  }).catch(error => {
    console.error('Error loading lead data:', error);
    container.innerHTML = '<p>Error loading lead data.</p>';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Получаем контейнер для виджета
  const container = document.getElementById('app');

  // Запрашиваем данные о текущей сделке
  AMOCRM.widgets.load({
    domain: 'yourdomain.amocrm.ru', // замените на ваш домен Kommo CRM
    path: '/leads/detail/your_lead_id', // замените на ID вашей сделки
  }).then(response => {
    const lead = response.response.leads[0];
    const files = lead.files || [];

    if (files.length === 0) {
      container.innerHTML = '<p>No files attached to this deal.</p>';
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.className = 'preview-container';

    files.forEach(file => {
      if (file.url) {
        iframe.src = `https://docs.google.com/viewer?url=${file.url}&embedded=true`;
        container.appendChild(iframe);
      }
    });
  }).catch(error => {
    console.error('Error loading lead data:', error);
    container.innerHTML = '<p>Error loading lead data.</p>';
  });
});
