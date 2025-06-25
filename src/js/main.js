const buttons = document.querySelectorAll('.sidebar button');
const home = document.getElementById('home');
const otherPage = document.getElementById('other-page'); 

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const page = button.getAttribute('data-page');

    // Toggle visibility
    if (page.includes('home.html')) {
      otherPage.style.display = 'none';
      home.style.display = 'block';
    } else {
      home.style.display = 'none';
      otherPage.style.display = 'block';

      fetch(page)
        .then(response => {
          if (!response.ok) throw new Error("Page not found.");
          return response.text();
        })
        .then(html => {
          otherPage.innerHTML = html;
        })
        .catch(error => {
          otherPage.innerHTML = `<p>Error loading page: ${error.message}</p>`;
        });
    }
  });
});

