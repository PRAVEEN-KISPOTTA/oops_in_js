function main(){

  const userProfile = {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
          city: "New York",
          street: "123 Main St",
          zipCode: "10001"
      }
  };

  const userProfile2 = {
      name: "Marry Jane",
      email: "marry.jane@example.com",
      address: {
          city: "L.A",
          street: "154, washington road",
          block: "001",
          zipCode: "10011"
      }
  };

  function getUserDetail(profile, keys) {
      let currentObject = profile;
      
      // Loop through each key in the keys array using for...of loop
      for (let key of keys) {
          // If the current object is null or undefined, return "Not available"
          if (!currentObject || !currentObject.hasOwnProperty(key)) {
              return "Not available";
          }
          
          // Access the property dynamically using the current key
          currentObject = currentObject[key];
      }
      
      // Return the value corresponding to the last key
      return currentObject;
  }

  console.log(getUserDetail(userProfile, ["address", "city"]));
    // Usage: should return "New York"
    // do not modify the return statement
    
    return getUserDetail;
}

main();

//for...in loop is for properties of the object

//for...of loop is for values of the object
            //is used to iterate over iterable objects such as arrays, strings, maps, sets, and other iterable objects. 
            //It allows you to iterate directly over the values of an iterable object.