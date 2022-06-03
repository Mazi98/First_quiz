const quizHtml = document.querySelector('.quiz-HTML a');
const quizCss = document.querySelector('.quiz-CSS a');
const quizJs = document.querySelector('.quiz-JS a');

let value = localStorage.getItem('value');

import {objectQuestionsHtml} from './question_quiz/question_HTML.js';
import {objectQuestionsCss} from './question_quiz/questions_CSS.js';
import {objectQuestionsJs} from './question_quiz/question_JS.js';

            
export const selektQuestion = () => {
    
        if(value == 1){

            let objectQuestions = objectQuestionsHtml;
                 
            return objectQuestions;
            
        }

        else if(value == 2){

            let objectQuestions = objectQuestionsCss;
                  
            return objectQuestions;
            
        }
        
        else if(value == 3){

            let objectQuestions = objectQuestionsJs;
                
            return objectQuestions;
            
        }
    }
            
    quizHtml?.addEventListener('click', () => {

        localStorage.setItem( 'value', '1');
        quizHtml.setAttribute('href', "/form_menu_quiz/Start_form/menu_after_form/quiz/quiz.html");
        selektQuestion();

    })
    
    quizCss?.addEventListener('click', () => {

        localStorage.setItem( 'value', '2');
        quizCss.setAttribute('href', "/form_menu_quiz/Start_form/menu_after_form/quiz/quiz.html");
        selektQuestion();
        
    })

    quizJs?.addEventListener('click', () => {

        localStorage.setItem( 'value', '3');
        quizJs.setAttribute('href', "/form_menu_quiz/Start_form/menu_after_form/quiz/quiz.html");
        selektQuestion();
      
    })

