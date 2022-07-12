var quizDB = 
[
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hyper Text Markup Language",
        b:"HTML Language",
        c:"Hey Text Markup",
        d:"Hello to my land",
        ans:"ans1"

    },
    {
        question:"Q2:What does CSS stand for?",
        a:"Colorful Style Sheet",
        b:"Casading Style Sheet",
        c:"Control Style",
        d:"Contoring Style Sheet",
        ans:"ans2"

    },
    {
        question:"Q3: What is the full form of Js?",
        a:"Source",
        b:"JAVA",
        c:"JavaScript",
        d:"JavaScripting Source",
        ans:"ans3"

    },
    {
        question:"Q4: How do you create a function in JavaScript? ",
        a:"function =  myFunction()=> ",
        b:"function:myFunction()",
        c:"function = myFunction() ",
        d:"function myFunction()  ",
        ans:"ans4"

    }

]

        var score=0,i=0;
        var returnzero = ()=>{
            var question = document.querySelector(".question");
            question.innerHTML = quizDB[i].question;
            var option1 = document.getElementById("option1");
            option1.innerHTML=quizDB[i].a;
            var option2 = document.getElementById("option2");
            option2.innerHTML=quizDB[i].b;
            var option3 = document.getElementById("option3");
            option3.innerHTML=quizDB[i].c;
            var option4 = document.getElementById("option4");
            option4.innerHTML=quizDB[i].d;}
        returnzero();
var submit = document.getElementById("submit");

submit.addEventListener('click',()=>{
   

    if(i==3){
        var showarea = document.querySelector(".showarea");
        showarea.style.display = "block";
        submit.style.display = "none";
    
        
     var btn = document.getElementsByClassName("btn")[0];
     btn.addEventListener('click',()=>{
        i=0;
        score=0;
        returnzero();
        submit.style.display = "block";
        showarea.style.display = "none";
        scorenum.innerHTML = score;

     })

    }

    var answers = document.getElementsByClassName("answer");
    
    for(var j=0;j<4;j++){
        element = answers[j];
        if(element.checked){
            answer = element;
            
        }
    }

    var validation = answer.getAttribute("id");
    if(validation == quizDB[i].ans){
        score++;
    }
    var scorenum = document.getElementById("scorenum");
    scorenum.innerHTML = score;
    console.log(i)
    i++;
    if(i<4){
    returnzero();}
})

