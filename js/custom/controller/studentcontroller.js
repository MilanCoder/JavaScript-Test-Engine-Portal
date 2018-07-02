checkLogin();
window.addEventListener("DOMContentLoaded",init)
var counter;
var index;
var answers;
var questionarr;
function checkLogin(){
  if(sessionStorage.getItem("Userid")==null){
      location.href="index.html";
  }
  }



function init(){
  counter = initialCounter("Questions");
    sessionStorage.setItem("marks",0);
     printUserid();
    index=0;
    loadCircleAndQuestion();
    bindEventsAll();
    disable();
     timer("time",1000);
   


}


function printUserid(){
  document.querySelector("#username").innerHTML=sessionStorage.getItem("Userid");
}



function bindEventsAll(){
document.querySelector("#previous").addEventListener("click",previousQuestion);
document.querySelector("#next").addEventListener("click",nextQuestion);
document.querySelector("#finish").addEventListener("click",finishTest);
  answers = document.getElementsByClassName("answers")
 for( let i=0;i<answers.length;i++){
       answers[i].addEventListener("click",pushAnswers);
 }
 
}



function pushAnswers(){ 
var id = event.target.id;
       parentElement = document.getElementById(id).parentNode;
         var value = parentElement.children[1].innerHTML;
        Index=index+1;
         sessionStorage.setItem(Index,value);        
 }



function getQuestion(index){
  var pr = studentOperations.getQuestions(index);
   pr.then((data)=>{
     questionarr=data;
    printQuestionAndOptions(data,index);
    studentOperations.setAnswers();
   }) 
}



function finishTest(){
  studentOperations.printScore();
  location.href="Result.html";
}



function nextQuestion(){
   index++;
   disable();
printQuestionAndOptions(questionarr,index); 
markTheAns(index);  
}



function previousQuestion(){
   index--;
   disable();
  printQuestionAndOptions(questionarr,index);   
markTheAns(index);
}
 function loadCircleAndQuestion(){
   counter.then((count)=>{
    for(let i=0;i<count-1;i++){
      drawCircle(i+1);
   }
   getQuestion(index);
  
 });
}


function drawCircle(id){
  var div = document.createElement("div"); //<div></div>
  div.className="red";
  div.innerHTML = id;
  div.id="id"+id;
  div.style.color="white";
  div.style.cursor="pointer";
  div.style.padding="10px 18px";
  div.style.borderRadius="50px";
  div.style.margin="10px auto";
  div.addEventListener("click",toQuestionNo);
  document.querySelector("#goToOption").appendChild(div);
  
}



function toQuestionNo(){
  var id = event.target.innerHTML;
   printQuestionAndOptions(questionarr,parseInt(id)-1);  
   markTheAns(parseInt(id)-1);

}




function disable(){
 
  counter.then((data)=>{

    if(index == 0){
      document.querySelector("#previous").setAttribute("disabled", true);
  }
  else{
      document.querySelector("#previous").removeAttribute("disabled");
  }
  if(index == data-2){
      document.querySelector("#next").setAttribute("disabled", true);
  }
  else{
    document.querySelector("#next").removeAttribute("disabled");
  }
  });
 
}



function printQuestionAndOptions(question,index){
  document.querySelector("#display_questions").innerHTML= studentOperations.question[index].Ques;
 document.querySelector("#Option1").innerHTML =question[index].Option1;  
 document.querySelector("#Option2").innerHTML = question[index].Option2;  
 document.querySelector("#Option3").innerHTML = question[index].Option3;  
 document.querySelector("#Option4").innerHTML =question[index].Option4; 
  var Index =index+1;
  document.querySelector("#id"+Index).style.backgroundColor="green"; 

}




function markTheAns(index){
  if(sessionStorage.getItem(index+1)===null){
    for( let i=0;i<answers.length;i++){
      answers[i].checked=false;
}}
  else
  {
     var checkans = sessionStorage.getItem(index+1);
    for(let i =1;i<=4;i++){
     if(checkans == document.querySelector("#Option"+i).innerHTML){
               answers[i-1].checked=true;
     }
  }
}}