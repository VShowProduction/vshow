import emailjs from '@emailjs/browser';



export async function sendEmail(name, email, subject, text) {
    // Configura tu servicio EmailJS

    const serviceId = 'service_c6pchnn';
    const templateId = 'template_qw3m4va';
    const userID = 'Z9WIrCKaWU093d0Ko';

    try {
        
        await emailjs.send(serviceId, templateId, {
            from_name: name,
            subject: subject,
            email: email,
            message: text
        }, userID);

        return true;

    } catch (error) {
        return false;
    }
}