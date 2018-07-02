

const userOperation={
  message:null,
  
  loginsuccessorfail(userObject){
    var pr = new Promise((resolve,reject)=>{
 var ref =firebase.database().ref().child("Users/"+userObject.userid);
 ref.on('value',(snapshot)=>{
var tempObject = snapshot.val();
if(tempObject!=null)
{  resolve(tempObject);
}
else{
 reject("No Match Found");
}

})

  
  
 })
 return pr;
},

  
createUser(userObject){
  
var pr = new Promise((resolve,reject)=>{
  firebase.database().ref().child("Users/"+userObject.userid).set(userObject);
  resolve("REGISTERED");
  })
  return pr;
 
  
}}