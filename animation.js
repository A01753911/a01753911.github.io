function handleSubmit() {
    // Obtener los valores del formulario
    var name = document.querySelector('[name="name"]').value.trim();
    var phone = document.querySelector('[name="phone"]').value.trim();
    var email = document.querySelector('[name="email"]').value.trim();
    var subject = document.querySelector('[name="subject"]').value.trim();
    var message = document.querySelector('[name="message"]').value.trim();

    // Verificar si algún campo está vacío
    if (!name || !phone || !email || !subject || !message) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Completa el formulario',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        return false; // Detiene el envío del formulario
    }

    // Si todos los campos están llenos, pregunta si desea enviar el correo
    Swal.fire({
        title: '¿Estás seguro/a de enviar el correo?',
        showDenyButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            // Lógica para enviar el formulario
            Swal.fire('¡Correo enviado exitosamente!', '', 'success');
            document.getElementById('contactForm').reset(); // Limpia el formulario
        } else if (result.isDenied) {
            Swal.fire('Envío cancelado', '', 'info');
        }
    });

    return false; // Previene el envío normal del formulario
}