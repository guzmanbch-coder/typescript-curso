console.log('Hola mundo');

const formulario = document.getElementById('loginForm') as HTMLFormElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const botonLogin = document.getElementById('botonLogin') as HTMLButtonElement;
const mensaje = document.getElementById('mensaje') as HTMLParagraphElement;

formulario?.addEventListener('submit', (evento: Event) => {
    evento.preventDefault();

    const correo = email.value.trim();
    const pwd = password.value.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (correo === '' && pwd === '') {
        mensaje.textContent = 'Por favor, complete todos los campos';
        return;
    }

    if (correo === '') {
        mensaje.textContent = 'Por favor, complete el correo';
        return;
    }

    if (pwd === '') {
        mensaje.textContent = 'Por favor, complete la contraseña';
        return;
    }

    if (!regexEmail.test(correo)) {
        mensaje.textContent = 'El formato del correo no es válido';
        return;
    }

    if (pwd.length < 6) {
        mensaje.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return;
    }


    mensaje.textContent = '';
    console.log('Email: ' + correo);
    console.log('Password: ' + pwd);
}
);

email?.addEventListener('focus', () => {
    mensaje.textContent = '';
});

password?.addEventListener('focus', () => {
    mensaje.textContent = '';
});
