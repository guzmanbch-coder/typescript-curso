"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formulario = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const mensaje = document.getElementById('mensaje');
formulario?.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const pwd = passwordInput.value.trim();
    const confirmPwd = confirmPasswordInput.value.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name || !email || !pwd || !confirmPwd) {
        mensaje.textContent = 'Por favor, complete todos los campos';
        return;
    }
    if (!regexEmail.test(email)) {
        mensaje.textContent = 'El formato del correo no es válido';
        return;
    }
    if (pwd.length < 6) {
        mensaje.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return;
    }
    if (pwd !== confirmPwd) {
        mensaje.textContent = 'Las contraseñas no coinciden';
        return;
    }
    mensaje.textContent = '';
    mensaje.style.color = '#10b981'; // Green color for success
    mensaje.textContent = '¡Registro exitoso! Redirigiendo...';
    console.log('Registro exitoso:', { name, email });
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});
// Lógica para los toggles de contraseña
const toggles = document.querySelectorAll('.toggle-password');
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        const icon = toggle.querySelector('svg');
        if (icon) {
            if (isPassword) {
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />`;
            }
            else {
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.79 0 8.601 3.049 9.964 6.678.04.108.04.22 0 .328C20.601 15.951 16.79 19 12 19c-4.79 0-8.601-3.049-9.964-6.678z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`;
            }
        }
    });
});
//# sourceMappingURL=register.js.map
