
var json = [];
var count = 0 ;
var x;
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
    }else 
    {
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
  
 
    return x ;

}

 


console.log("outer",json)
//else if(emailArray.indexOf(email) == -1){
    //                 emailArray.push(email);
    //                 passwordArray.push(password);
    
    //                 alert(email + "  Thanks for registration. \nTry to login Now");
    
    //                 document.getElementById("re").value ="";
    //                 document.getElementById("rp").value="";
    //                 document.getElementById("rrp").value="";
    //             }
    //             else{
    //                 alert(email + " is already register.");
    //                 return ;
    //             }

// favorites = [{
        //     "artist" : "Mike king",    
        //     "song_name" : "Mild Songs"  
        //   }];
      
      
        //   var myObj = {
        //     "artist" : "Johny steve",    
        //     "song_name" : "Rock Songs"  
        //   };
      
        //   favorites.push(myObj);
      
        //   console.log(favorites);
        //   console.log(favorites[1]);


        function login(){
          

            var email = document.getElementById("lEmail").value;
            var password = document.getElementById("lPass").value;
            for(var i = 0; i < json.length ; i++)
            {
               console.log(json[i]["email"]);
               console.log(json[i]["password"]);

            if( json[i]["email"] != email){
            if (email == ""){
                alert("Email required.");
                return ;
            }
            alert("Email does not exist.");
            return ;
            
           }
            else if( json[i]["password"] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
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

       

        // favorites = [{
        //     "artist" : "Mike king",    
        //     "song_name" : "Mild Songs"  
        //   }];
      
      
        //   var myObj = {
        //     "artist" : "Johny steve",    
        //     "song_name" : "Rock Songs"  
        //   };
      
        //   favorites.push(myObj);
      
        //   console.log(favorites);
        //   console.log(favorites[1]);