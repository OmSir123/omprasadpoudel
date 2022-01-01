  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  import {getDatabase, ref ,set ,child ,update ,remove} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyB7F8TrkmdYbCgF7QKgqkuwxyhajR_0hYw",
      authDomain: "website-9448c.firebaseapp.com",
      databaseURL: "https://website-9448c-default-rtdb.firebaseio.com",
      projectId: "website-9448c",
      storageBucket: "website-9448c.appspot.com",
      messagingSenderId: "1014931886170",
      appId: "1:1014931886170:web:71c3720968d19b8b524863",
      measurementId: "G-Y2573KP0GV"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const db=getDatabase();


    //Refrences
    
    function InsertData(){
        
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var subject=document.getElementById('subject').value;
        var message=document.getElementById('message').value;

        let newName=name.trim();
        let newEmail=name.trim();
        
        
        if(newName==""){
            document.getElementById('errormsg').style.color='red';
            document.getElementById('errormsg').innerText='Please Fill Your Name';       
        }else if(newEmail==""){
            document.getElementById('errormsg').style.color='red';
            document.getElementById('errormsg').innerText='Please Fill Your Email';       
            
        }else if(message==""){
            document.getElementById('errormsg').style.color='red';
            document.getElementById('errormsg').innerText='Please Fill Your message';       
            
        }
        else{
            set(ref(db,'Person/'+name.value),{
                
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            })
            .then(()=>{
                document.getElementById('errormsg').style.color='green';
                
                document.getElementById('errormsg').innerText='Message Sent Sucessfully';       
                
            })
            .catch((error)=>{
                document.getElementById('errormsg').style.color='red';
                document.getElementById('errormsg').innerText='sorry something went wrong '+error;       
                
            });
            
    
            }

        
    }

    document.getElementById('btnsendmsg').addEventListener('click',InsertData)

    
