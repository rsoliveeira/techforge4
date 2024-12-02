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
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (email, message) {
        console.log("enviado para ".concat(email, ": ").concat(message));
    };
    return EmailNotification;
}());
var UserManager = /** @class */ (function () {
    function UserManager(emailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }
    UserManager.prototype.createUser = function (name, email) {
        this.users.push({ name: name, email: email });
        this.emailNotification.send(email, "Bem-vindo(a), ".concat(name, "!"));
    };
    UserManager.prototype.listUsers = function () {
        this.users.forEach(function (user, index) {
            console.log("".concat(index + 1, ". ").concat(user.name, " (").concat(user.email, ")"));
        });
    };
    return UserManager;
}());
var emailNotification = new EmailNotification();
var userManager = new UserManager(emailNotification);
userManager.createUser("Alice", "alice@example.com");
userManager.createUser("Bob", "bob@example.com");
userManager.listUsers();
