const quizData=[
    {
        question:'How old are you',
        a:'10',
        b:'17',
        c:'23',
        d:'110',
        correct:'c'
    },
    {
        question:'What is the most used programming langauage in 2020',
        a:'java',
        b:'c',
        c:'python',
        d:'js',
        correct:'a'
    },
    {
        question:'Who is the presient of us',
        a:'trump',
        b:'donald',
        c:'andrei',
        d:'pop',
        correct:'a'
    },
    {
        question:'Abrevation of html',
        a:'hyper test pro language',
        b:'json obect not',
        c:'Application prog',
        d:'Hyper Text Programming Language',
        correct:'d'
    },
    {
        question:'What year js launched',
        a:'2020',
        b:'2019',
        c:'1996',
        d:'1995',
        correct:'d'
    }



]
const questionE=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submit=document.getElementById('submit');
let curr_question=0;
let correctA=0;
loadQuiz();
function loadQuiz()
{
    const currentQuiz=quizData[curr_question];
    questionE.innerHTML=currentQuiz.question;
    a_text.innerHTML=currentQuiz.a;
    b_text.innerHTML=currentQuiz.b;
    c_text.innerHTML=currentQuiz.c;
    d_text.innerHTML=currentQuiz.d;
    }
submit.addEventListener('click',()=>{
    if(curr_question<quizData.length)
    {
        loadQuiz();
     }
    else
    {
        alert('You finished');
    }
    curr_question++;
 


})
