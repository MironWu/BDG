
  function validateForm() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-text').value;

    if (name === '' || email === '' || message === '') {
      alert('Wszystkie pola muszą być wypełnione');
      return false;
    }

    // Prosta walidacja adresu email (sprawdzamy, czy zawiera '@')
    if (!email.includes('@')) {
      alert('Proszę podać prawidłowy adres email');
      return false;
    }

    return true;
  }

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault();  // Zapobiegamy wysłaniu formularza w przypadku nieprawidłowych danych
    }
  });

