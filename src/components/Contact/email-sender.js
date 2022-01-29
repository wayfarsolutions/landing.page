
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';

const SERVICE_ID = "service_lr05ugb";
const TEMPLATE_ID = "template_9lsfm6d";
const USER_ID = "user_pjxuoVYB5TF08MdP8hsWj";

init(USER_ID);

export default async function SendEmail(data) {
    return emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID, 
        data,
        USER_ID);
}