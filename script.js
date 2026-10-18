// ======================
// 1. Modal de bienvenida (solo primera visita)
// ======================
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.querySelector('.close-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const hasVisited = localStorage.getItem('visitedCreativeFest');

  if (modal && !hasVisited) {
    modal.style.display = 'flex';
    localStorage.setItem('visitedCreativeFest', 'true');
  }
  if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
  if (closeModalBtn) closeModalBtn.onclick = () => modal.style.display = 'none';
  window.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
});

// ======================
// 2. Validación de email (formato básico)
// ======================
function isValidEmail(email) {
  const regex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  return regex.test(email);
}

// ======================
// 3. Formulario de contacto
// ======================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('contactEmail').value.trim();
    if (!isValidEmail(email)) {
      alert('Correo electrónico no válido. Debe contener @ y un dominio válido (ej: usuario@dominio.com)');
      return;
    }
    alert('¡Gracias! Tu mensaje se ha enviado correctamente (simulación).');
    contactForm.reset();
  });
}

// ======================
// 4. Formulario de registro
// ======================
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('regNombre').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value;
    const confirm = document.getElementById('regPassConfirm').value;

    if (!nombre || !email || !pass || !confirm) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Correo electrónico no válido.');
      return;
    }
    if (pass !== confirm) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    if (pass.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    alert('Registro simulado con éxito. ¡Bienvenido/a a Crea\'t Fest 2026!');
    registerForm.reset();
  });
}