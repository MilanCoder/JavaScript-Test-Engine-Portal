checkLogin();

window.addEventListener("DOMContentLoaded",init)
var marks;
function checkLogin(){
if(sessionStorage.Userid==null){
    location.href="index.html";
}
}
function init(){
   marks= sessionStorage.getItem("marks");
document.querySelector("#marks").innerHTML = sessionStorage.getItem("marks");
sessionStorage.clear();
message();
}

function message(){
    if(marks>10){
        document.querySelector("#message").innerHTML="Congratulation for great Score";

    }
    else{
        document.querySelector("#message").innerHTML="Better Luck Next Time";
    }
}