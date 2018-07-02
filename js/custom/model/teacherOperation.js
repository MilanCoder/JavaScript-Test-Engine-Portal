const teacherOperation={
    addQuestion(questionObject){
        var pr = new Promise((resolve,reject)=>{
          firebase.database().ref().child("Questions/"+questionObject.Id).set(questionObject);
          resolve("Questions Added");
          })
          return pr;
         
          
        },

        searchById(id){
            var pr = new Promise((resolve,reject)=>{
                var ref = firebase.database().ref().child("Questions/"+id);
                ref.on("value",(snapshot)=>{
                     var questionObject = snapshot.val();
                     if(questionObject!=null)
                     resolve(questionObject);
                     else reject("No Record Found");
                })

            })
            return pr;
        }
    }

