
// iframe toggler for sections
const buttons = document.querySelectorAll('.sidebar button');
const iframes = document.querySelectorAll('iframe');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const page = button.getAttribute('data-page');

    // Hide all iframes
    iframes.forEach(iframe => iframe.style.display = 'none');

    // Show the matching iframe
    for (const iframe of iframes) {
      if (iframe.src.includes(page)) {
        iframe.style.display = 'block';
        break;
      }
    }
  });
});
