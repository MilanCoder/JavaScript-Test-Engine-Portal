
window.addEventListener("DOMContentLoaded",init);
var isShow=false;

var loginObj;
var regObj;
var passwordObj;
var useridObj;
var passwordobj;


function init(){
   
    loginObj = document.querySelector("#login-userid");
    regObj= document.querySelector("#register-userid");
    passwordObj =document.querySelector("#login-password");
     useridObj = document.querySelector("#register-userid");
    passwordobj = document.querySelector("#register-password");
    bindEvents();
    

}
function bindEvents(){
    document.querySelector("#reg").addEventListener("click",show);
    document.querySelector("#log").addEventListener("click",show);
    document.querySelector("#login").addEventListener("click",login)
    document.querySelector("#register").addEventListener("click",addUser);
     loginObj.addEventListener("blur",checkFill);
     passwordObj.addEventListener("blur",checkFill);
    regObj.addEventListener("blur",checkFill);
    useridObj.addEventListener("blur",checkFill);
    passwordobj.addEventListener("blur",checkFill);



}

function checkFill(){
    if(this.value=="")
   alert("Please Fill Userid And Password");
}
function show(){
   var id = event.target.id;
  var btns = document.getElementsByClassName("show");
  for( let btn=0;btn<btns.length;btn++){
  btns[btn].className="hide";  }
  isShow = true;
    showHide(id);
}
function showHide(id){
    document.querySelector("#"+id+"-form").className=isShow?"show":"hide";
}

function login(){
   
    var userid = loginObj.value;
    var password = passwordObj.value;
    
    var userObject = new User(userid,password,null,null);
    
   var pr = userOperation.loginsuccessorfail(userObject);
      pr.then(data=>{
        if(userObject.password==data.password)
        {  
          sessionStorage.setItem("Userid",userObject.userid);
          if(data.type=="Teacher"){        
             
            
          location.href="teacher.html";
          }
           else if(data.type=="Student"){        
               
            location.href="Student.html";
           }
         
        }
        else{
            alert("Incorrect Password");
        }  
          
      }).catch(()=>{
          alert("No match found");
      })
       

}

function addUser(){
   
    var userid = useridObj.value;
    var password = passwordobj.value;
    var confirmpassword = document.querySelector("#confirm-password").value;
   
    var type = (document.querySelector("#Teacher").checked)?"Teacher":"Student";

    if(confirmpassword==password){
   
      
        var userObject = new User(userid,password,type);
  
        var pr= userOperation.createUser(userObject);
        pr.then((data)=>alert(data));
    
} 
else{
    alert("Password Not Matching..");
}
}