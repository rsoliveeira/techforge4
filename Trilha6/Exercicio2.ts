//Sem Refatoração

/*
class UserManager {
    private users: { name: string; email: string }[] = [];
  
    createUser(name: string, email: string): void {
      this.users.push({ name, email });
      this.sendEmailNotification(email, `Bem-vindo, ${name}!`);
    }
  
    private sendEmailNotification(email: string, message: string): void {
      console.log(`Email enviado para ${email}: ${message}`);
    }
  
    listUsers(): void {
      this.users.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name} (${user.email})`);
      });
    }
  }
  
  const userManager = new UserManager();
  userManager.createUser("Alice", "alice@example.com");
  userManager.createUser("Bob", "bob@example.com");
  userManager.listUsers();
  
*/

// Refatorada com Separação de Responsabilidades
class EmailNotification {
    send(email: string, message: string): void {
      console.log(`enviado para ${email}: ${message}`);
    }
  }
  
  class UserManager {
    private users: { name: string; email: string }[] = [];
    private emailNotification: EmailNotification;
  
    constructor(emailNotification: EmailNotification) {
      this.emailNotification = emailNotification;
    }
  
    createUser(name: string, email: string): void {
      this.users.push({ name, email });
      this.emailNotification.send(email, `Bem-vindo(a), ${name}!`);
    }
  
    listUsers(): void {
      this.users.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name} (${user.email})`);
      });
    }
  }
  
  const emailNotification = new EmailNotification();
  const userManager = new UserManager(emailNotification);
  userManager.createUser("Alice", "alice@example.com");
  userManager.createUser("Bob", "bob@example.com");
  userManager.listUsers();
  