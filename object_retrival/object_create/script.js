// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    // Implement the code here
    const result = Object.assign({}, user, updates);
    return result;
  }
  
  function freezeProfile(user) {
    // Implement the code here
      Object.freeze(user);
      return user;
  }