// Validação e envio de email na mesma classe

/*
class EmailSender {
    validateContact(email: string): boolean {
        if (!email) {
            console.log("Email is invalid: cannot be null or empty.");
            return false;
        }
        const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            console.log("O formato do e-mail é inválido.");
            return false;
        }
        return true;
    }

    sendEmail(email: string, message: string): void {
        if (!this.validateContact(email)) {
            console.log("Falha ao enviar e-mail: contato inválido.");
            return;
        }
        console.log(`E-mail enviado para ${email} com mensagem: ${message}`);
    }
}

const sender = new EmailSender();
sender.sendEmail("test@example.com", "Olá!");
sender.sendEmail("invalid-email", "Isso não será enviado."); 

*/

// Refatoração: Separação da lógica de validação em uma classe ContactValidator
class ContactValidator {
    isValid(email: string): boolean {
        if (!email) {
            console.log("Email is invalid: cannot be null or empty.");
            return false;
        }
        const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            console.log("O formato do e-mail é inválido.");
            return false;
        }
        return true;
    }
}


// Classe EmailSender com injeção de dependência de ContactValidator
class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

   
    sendEmail(email: string, message: string): void {
        if (!this.contactValidator.isValid(email)) {
            console.log("Falha ao enviar e-mail: contato inválido.");
            return;
        }
       
        console.log(`E-mail enviado para ${email} com mensagem: ${message}`);
    }
}

const validator = new ContactValidator();
const emailSender = new EmailSender(validator);

emailSender.sendEmail("test@example.com", "Olá!");
emailSender.sendEmail("invalid-email", "Isso não será enviado.");

