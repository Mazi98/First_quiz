
const body = document.querySelector('body');

const question = document.querySelector('.question');
const firstOption = document.querySelector('.first-option');
const secondOption = document.querySelector('.second-option');
const threeOption = document.querySelector('.three-option');
const fourthOption = document.querySelector('.fourth-option');

const nextBtn = document.querySelector('.next');
const startBtn = document.querySelector('.start');

const score = document.querySelector('.score');
const finalScore = document.querySelector('.final-score');

const time = document.querySelector('.time');

const instruction = document.querySelector('.instruction');
const bodyForms = document.querySelector('.body-forms');
const endButtons = document.querySelector('.end-buttons');

import {selektQuestion} from '../../menu_after_form/select_quiz.js';
const objectQuestions = selektQuestion();
       
let questionIndex = Math.floor( Math.random()*objectQuestions.length);
let answerIndex = objectQuestions[questionIndex].answer;
let index = [
    Math.floor( Math.random()*answerIndex.length),
    Math.floor( Math.random()*answerIndex.length),
    Math.floor( Math.random()*answerIndex.length),
    Math.floor( Math.random()*answerIndex.length)
];

let askIndexes = [];
let i = 0;
let fullTime = 30;
let sec;

const start  = () => {

    startBtn.style.visibility = 'hidden';
    instruction.style.visibility = 'hidden';
    body.style.transition = "all 2s";
    body.style.visibility = 'visible';
    setAsk();
    optionsAfterClick();
    countTime();  
    
}

const setAsk = () => {
    
    question.textContent = objectQuestions[questionIndex].question;  
    
}

const firstTimeOptions = () => {

    firstOption.textContent = answerIndex[index[0]].text;
    
    while(index[0] === index[1]){
        index[1] = Math.floor( Math.random()*answerIndex.length); 
    }
    secondOption.textContent = answerIndex[index[1]].text;

    while(index[0] === index[2] || index[1] === index[2] ){
        index[2] = Math.floor( Math.random()*answerIndex.length); 
    } 
    threeOption.textContent = answerIndex[index[2]].text;

    while(index[0] === index[3] || index[1] === index[3] || index[2] === index[3] ){
        index[3] = Math.floor( Math.random()*answerIndex.length); 

    } 
    fourthOption.textContent = answerIndex[index[3]].text;
    
}


const optionsAfterClick = (answer) => {
    
    if(answer) {
        
        firstOption.textContent = answer[index[0]].text;

        while(index[0] === index[1]) {
            
            index[1] = Math.floor( Math.random()*answerIndex.length); 
                    if( index[0] !== index[1]  || askIndexes.length === objectQuestions.length) break;

                }
                
        secondOption.textContent = answer[index[1]].text;

        while(index[0] === index[2] || index[1] === index[2] ) {
            
            index[2] = Math.floor( Math.random()*answerIndex.length);
                if( index[0] !== index[1]  || askIndexes.length === objectQuestions.length) break; 

            } 
            
        threeOption.textContent = answer[index[2]].text;
        
        while(index[0] === index[3] || index[1] === index[3] || index[2] === index[3] ) {

            index[3] = Math.floor( Math.random()*answerIndex.length);
            if( index[0] !== index[1]  || askIndexes.length === objectQuestions.length) break;

        } 

        fourthOption.textContent = answer[index[3]].text;
        
        }
        
        firstTimeOptions();
    }

const changeAsk = () => {

        askIndexes.push(questionIndex);
        while(askIndexes.includes(questionIndex)) {
            
            
            questionIndex = Math.floor( Math.random()*objectQuestions.length);
            console.log(questionIndex);
            if(!askIndexes.includes(questionIndex)|| askIndexes.length === objectQuestions.length) break;
            
        }
        
        answerIndex = objectQuestions[questionIndex].answer;
        
    optionsAfterClick(answerIndex);
    setAsk();
}

const nextQuestion = () => {
    if(askIndexes.length != objectQuestions.length){
    changeAsk();
    countTime();
    result();
}
} 


const allOptionAnswer = (param) => { 
    
    if(answerIndex[index[param -1]]?.correct) {
        correctAnswer();
        countScore();
        afterClickOption();
        
    } else{
        
        wrongAnswer();
        afterClickOption();  
        
    }
}

const wrongAnswer = () => {
    
    body.style.backgroundColor = 'red';
    
}

const correctAnswer = () => {
    
    body.style.backgroundColor = 'blue';
    
}

const countScore = () => {
    
    i++
    score.textContent = `Score : ${i}`;
    
} 

const returnColor = () => {
    
    setTimeout(() => {
        body.style.background = 'linear-gradient(rgba(0, 0, 3, 0.4), rgb(255,192,203))';
    },200)
    
}

const afterClickOption = () => {

    setTimeout(function(){
        nextQuestion();
        returnColor();
        result();    
    }, 200);
    
}

const countTime = () => {

    clearInterval(sec);
    fullTime = 30;
    sec =  setInterval( () => {
        time.textContent = `Time:  ${fullTime}`;
        fullTime--;
        if(fullTime === 0){
            clearInterval(sec);
            time.textContent = `Time:  0${fullTime}`;
            nextQuestion();
                }
                else if(fullTime < 10){
                    time.textContent = `Time:  0${fullTime}`;
                }
    }, 1000)
}

const convertPointToPercentage = () => {
    const Percentage = (i * 100) /  objectQuestions.length;
    return `${Math.floor(Percentage)}%`;
}

const result = () => {
    
    if(askIndexes.length === objectQuestions.length){

        bodyForms.style.visibility = 'hidden';
        finalScore.style.visibility = 'visible';
        finalScore.textContent = score.textContent = `Score : ${i}/${objectQuestions.length} it is ${convertPointToPercentage()}`;
        endButtons.style.visibility = 'visible';

    }
}


startBtn.addEventListener('click', start);
nextBtn.addEventListener('click', nextQuestion);

firstOption.addEventListener('click', () => {
    allOptionAnswer(1);
})
secondOption.addEventListener('click',  () =>{
    allOptionAnswer(2);
})
threeOption.addEventListener('click',  () =>{
    allOptionAnswer(3);
})
fourthOption.addEventListener('click',  () =>{
    allOptionAnswer(4);
})
