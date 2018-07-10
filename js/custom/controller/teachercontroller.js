checkLogin();
window.addEventListener("DOMContentLoaded",init)
var counter;
var question;
var option1;
var option2;
var option3;
var option4;
var ans;
var isSearch=false;

function checkLogin(){

if(sessionStorage.getItem("Userid")==null){
    location.href="index.html";
}
}

function init(){
    
bindAllEvents();
counter = initialCounter("Questions");
}
function bindAllEvents(){
    document.querySelector("#add").addEventListener("click",setQuestions);
    document.querySelector("#search").addEventListener("click",search);

}

function setQuestions(){
   
     question = document.querySelector("#question").value.trim();
     option1 = document.querySelector("#Option1").value.trim();
     option2 = document.querySelector("#Option2").value.trim();
     option3 = document.querySelector("#Option3").value.trim();
     option4 = document.querySelector("#Option4").value.trim();
        var ans = document.querySelector("#ans").value;
        if(question!=""||(ans!="")||(option1!=="")||(option2!="")||(option3!="")||(option4!="")){
  if(isSearch){
    var questionObject = new Question(question,ans,document.querySelector("#searchquestionid").value,option1,option2,option3,option4);
    var pr = teacherOperation.addQuestion(questionObject);
    pr.then((data)=>{
       
        alert(data)});}

else if(!isSearch){
            counter.then( (count)=>{  
       var questionObject = new Question(question,ans,count,option1,option2,option3,option4);
       var pr = teacherOperation.addQuestion(questionObject);
  pr.then((data)=>alert(data));});
    
}
else{
    alert("Please Fill The Empty Boxes");
}
}}

    function search(){
        question = document.querySelector("#question");
        option1 = document.querySelector("#Option1");
        option2 = document.querySelector("#Option2");
        option3 = document.querySelector("#Option3");
        option4 = document.querySelector("#Option4");
        ans=document.querySelector("#ans");
        var id = document.querySelector("#searchquestionid").value;
         var pr =teacherOperation.searchById(id);
          pr.then((data)=>{
            question.value=data.Ques;
            option1.value=data.Option1;
            option2.value=data.Option2;
            option3.value=data.Option3;
            option4.value=data.Option4;
            ans.value=data.Ans;
           isSearch=true;
           
          }).catch((err)=>{
              alert(err);
          });
        }
    
        