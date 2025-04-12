


// Title: L1 - Dynamic User Role Message with Object Properties

// let user = { 
//             name: "Alice", 
//             role: "admin", 
//             active: false 
// };


let user = { 
          name: "Bob", 
          role: "user", 
          active: true 
  
};



  if((user.role == "admin") && (user.active == true)){
    console.log("Admin Access Granted!")
  }
  else
  {
    if((user.role == "admin") && (user.active == false))
    {
      console.log("Admin Access Revoked")
    }
    else
    {
        if((user.role == "user") && (user.active == true))
        {
          console.log("User Access Granted!")
        }
        else
        {
            if((user.role == "user") && (user.active == false))
            {
              console.log("User Access Revoked")
            }
            else
            {
              console.log("Access Denied")
            }
        }
    }
  }
