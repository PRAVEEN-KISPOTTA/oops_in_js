// Instructions:
// 1. Implement the login method on the User prototype.
// 2. Create a reusable loginFunction using the bind method, bound to the systemCredentials object.
function User(displayName) {
    this.displayName = displayName;
  }
  
  const systemCredentials = {
    username: "system",
    password: "pass123"
  };
  User.prototype.login = function (username, password) {
      // Implement the code here
      console.log((systemCredentials.username === username && systemCredentials.password === password) ? "Login successful!" : "Login failed!");
    };
    
    // Example usage:
    const user = new User("John Doe");
    // Create the reusable loginFunction here
  const loginFunction = User.prototype.login.bind(systemCredentials);
    
    loginFunction("system", "pass123"); // Expected output: "Login successful!"
    loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"