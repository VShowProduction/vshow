import emailjs from '@emailjs/browser';



export async function sendEmail(name, email, subject, text) {
    // Configura tu servicio EmailJS

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;;
    const userID = import.meta.env.VITE_USER_ID;

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