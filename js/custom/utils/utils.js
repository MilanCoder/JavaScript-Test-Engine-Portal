const score={
    eachvalue:5
}
var config = {
    apiKey: "AIzaSyDXhvIH4zzkUaSuVY0ah3vQk7sUDuxmK3U",
    authDomain: "testengine-ec408.firebaseapp.com",
    databaseURL: "https://testengine-ec408.firebaseio.com",
    projectId: "testengine-ec408",
    storageBucket: "testengine-ec408.appspot.com",
    messagingSenderId: "579054710357"
  };
  firebase.initializeApp(config);
 
 function initialCounter(databaseinfo){
  var pr = new Promise((resolve,reject)=>{

 var ref= firebase.database().ref().child(databaseinfo);
 var count = 1;
ref.on('value', function(snapshot) {
     var objs = snapshot.val();
     
     for( let obj in objs){
         count++;
     }
     resolve(count);
    });
   
});
return pr;
 }

 function timer(idname,delay){
     var testTime=120;
     setInterval(()=>{
         minuteTime=parseInt((testTime/60));
         secondTime = parseInt(testTime%60);
         testTime--;
         document.querySelector("#"+idname).innerHTML = `${minuteTime}:${secondTime}`;
         if( document.querySelector("#"+idname).innerHTML=="0:0"){
            location.href="Result.html";}
     },delay);
    
 }

  