


//Title: L2 - Advanced User Privilege Management System

// let person = { role: "admin", experience: 3, active: false, department: "Finance" };

// let person = { role: "user", experience: 2, active: true, department: "Support" };

// let person = { role: "manager", experience: 4, active: true, department: "Marketing" };


let person = { 
              role: "admin",
              experience: 7,
              active: true,
              department: "IT"
            };
  
  

if(person.role == "admin")
{
  
      if((person.active == true) && (person.experience > 5) && (person.department == "IT"))
      {
        console.log("Full IT Admin Access")
      }
      else
      {
        if((person.active == true) && (person.experience > 5) && (person.department != "IT"))
        {
            console.log("Full General Admin Access")
        }
        else
        {
          if((person.active == true) && (person.experience <= 5) && (person.department != "IT"))
          {
            console.log("Limited Admin Access")
          }
          else
          {
            console.log("Admin Access Revoked")
          }
        }
      }
  
}
else
{
  if(person.role == "manager")
  {
    if((person.active == true) && (person.experience > 3) &&(person.department == "Sales"))
    {
    console.log("Full Sales Manager Access")
    }
    else
    {
    if((person.active == true) && (person.experience > 3))
    {
        console.log("Full Manager Access")
    }
    else
    {
      if((person.active == true) && (person.experience <= 3))
      {
        console.log("Limited Manager Access")
      }
      else
      {
        console.log("Manager Access Revoked")
      }
    }
  }
  
  }
  else
  {
      if(person.role == "user")
      {
          
        if((person.active == true) && (person.department == "Support"))
        {
          console.log("Priority Support Access")
        }
        else
        {
          if((person.active == true) && (person.department != "Support"))
          {
              console.log("User Access")
          }
          else
          {
              console.log("User Access Revoked")
             
          }
        }
    }
    else
    {
      console.log("Invalid Role")
    }

  }
}
  