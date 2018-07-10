const studentOperations ={
   question:[],
   answers:[],
   marks:0,
  
   
   setAnswers(){
    for( let ques of this.question )  
    this.answers.push(new Answer(ques.Id,ques.Ans));
   },
   
  
   printScore(){
   for(let i=0;i<studentOperations.answers.length;i++)
   {
      
   
           if(sessionStorage.getItem(i+1)==studentOperations.answers[i].Ans){
               
              
            sessionStorage.setItem("marks",parseInt(sessionStorage.getItem("marks"))+parseInt(score.eachvalue));
           }
       }
    
    
    
    },
    getQuestions(){
       var pr = new Promise((resolve,reject)=>{
        var  ref = firebase.database().ref().child('Questions/');
        ref.on('value',(snapshot)=>{
            var obj = snapshot.val();
            
         for(let key in obj)
          {  this.question.push(obj[key]);
            }
     
        }) 
        resolve(this.question);   
        })
        return pr;
    }
}