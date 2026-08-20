(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const submit = form.querySelector('[type="submit"]');
  const submitLabel = submit.querySelector('[data-submit-label]');
  const language = form.elements.language?.value === 'en' ? 'en' : 'tr';
  const copy = language === 'en' ? {
    sending: 'Sending…',
    success: 'Thank you. Your message has been received and will be reviewed by the relevant team.',
    error: 'Your message could not be sent. Please try again or email info@alenerji.com.tr.',
    validation: 'Please check the required fields and try again.'
  } : {
    sending: 'Gönderiliyor…',
    success: 'Teşekkürler. Mesajınız alındı ve ilgili ekibimiz tarafından değerlendirilecek.',
    error: 'Mesajınız gönderilemedi. Lütfen tekrar deneyin veya info@alenerji.com.tr adresine yazın.',
    validation: 'Lütfen zorunlu alanları kontrol edip tekrar deneyin.'
  };

  const setStatus = (message, type) => {
    status.textContent = message;
    status.className = `form-status show ${type || ''}`.trim();
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const refreshToken = async () => {
    const response = await fetch(form.action, {
      method: 'GET',
      credentials: 'same-origin',
      headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
    });
    if (!response.ok) throw new Error('token');
    const data = await response.json();
    form.elements.csrf_token.value = data.csrf_token || '';
    form.elements.form_started_at.value = data.form_started_at || '';
  };

  refreshToken().catch(() => {});

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.className = 'form-status';

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus(copy.validation, 'error');
      return;
    }

    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    submitLabel.textContent = copy.sending;

    try {
      if (!form.elements.csrf_token.value) await refreshToken();
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        credentials: 'same-origin',
        headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.message || copy.error);

      form.reset();
      setStatus(data.message || copy.success, 'success');
      refreshToken().catch(() => {});
    } catch (error) {
      setStatus(error.message && error.message !== 'token' ? error.message : copy.error, 'error');
    } finally {
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      submitLabel.textContent = submitLabel.dataset.default;
    }
  });
})();
