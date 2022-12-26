
var json = [];
var count = 0 ;
var x;
var emailSto = localStorage.getItem("email" );
var passSto = localStorage.getItem("password" );

function register()
{
   
    var userName = document.getElementById("user").value,
        email = document.getElementById("rEmail").value,
        password = document.getElementById("rPass").value,
        passwordretype = document.getElementById("rrPass").value;
        
       

       
    
        

    if(userName == "")
    {
        alert("userName required.");
        return ;
    }
    else if(email == "")
    {
        alert("email required.");
        return ;
    }
    else if(password == "")
    {
        alert("password required.");
        return ;
    }
    else if(passwordretype == "")
    {
        alert("password retype required.");
        return ;
    }
    else if(password != passwordretype) {
        alert("Password don't match retype your Password.");
        return;
    }
    else if( email == emailSto){
        alert(email + " is already register.");
        return;
        
    }else {
        function Client(userName, email , password) {
            this.userName = userName
            this.email = email
            this.password = password
            
        }
      
        clients = new Array();
      
      for (i = 0;i < 10 ; i++) {
          clients.push(new Client(userName , email , password))
      }
      
      for (i = 0; i < 1 ; i++) {
          var dict = {}
          dict['username'] = clients[i].userName
          dict['email'] = clients[i].email
          dict['password'] = clients[i].password
          json[count] = dict;
      }
    }
   
    count++;
   
    console.log("all",json);
    localStorage.setItem("User Name",  userName);
    localStorage.setItem("email", email);
    localStorage.setItem("password",  password);
 
    return x ;

}

 


console.log("outer",json)

        function login(){
          

            var email = document.getElementById("lEmail").value;
            var password = document.getElementById("lPass").value;
           if(json == 0)
           {

            if( emailSto != email){
                // console.log("h1");
            if (email == ""){
                alert("Email required.");
                return ;
            }
            alert("Email does not exist.");
            return ;
            
           }
            else if(passSto != password){
                // console.log("p1");
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else if(emailSto == email ) {
               // console.log("e1");
                if(email == "admin@admin.com")
                window.location = "admin.html"; 
                else{
                    window.location = "index.html"
                }
                alert(email + " yor are login Now \n welcome to our website." );
                return ;

            }
               
           }else {
            
            for(var i = 0; i <json.length; i++)
            {
               console.log(json[i]["email"]);
               console.log(json[i]["password"]);

            if( json[i]["email"] != email){
                //console.log("h2");
            if (email == ""){
                alert("Email required.");
                return ;
            }
            alert("Email does not exist.");
            return ;
            
           }
            else if( json[i]["password"] != password){
                console.log("p2");
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else if(email == emailSto ) {
                console.log("e2");
                if(email == "admin@admin.com")
                window.location = "admin.html"; 
                else{
                    window.location = "index.html"
                }
                alert(email + " yor are login Now \n welcome to our website." );
                return ;

            }
               
             }

            

            }
        }

       

       