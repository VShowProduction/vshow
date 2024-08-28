import emailjs from '@emailjs/browser';



export async function sendEmail(name, email, subject, text) {
    // Configura tu servicio EmailJS

    const serviceId = 'service_r4o8hkb';
    const templateId = 'template_ytrgfc3';
    const userID = 'h3jC_c5mVHznvIZYS';

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