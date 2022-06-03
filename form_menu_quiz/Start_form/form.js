const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const password2Input = document.querySelector('#password2');
const emailInput = document.querySelector('#email');
const cityInput = document.querySelector('#city');

const controlButton = document.querySelector('.control-button');
const form = document.querySelector('form');
const endForm = document.querySelector('.end-form');
const endFormText = document.querySelector('.end-form-text');
const input = document.querySelectorAll('input');

const errorName = document.querySelector('.error-name');
const errorPassword = document.querySelector('.error-password');
const errorPassword2 = document.querySelector('.error-password2');
const errorEmail = document.querySelector('.error-email');
const errorCity = document.querySelector('.error-city');
const allError = [errorName, errorPassword,  errorPassword2, errorEmail, errorCity];

const goodAnswerIcon = document.querySelectorAll('.fa-check');
const iconUsernameCorrect = document.querySelector('.icon-username-correct');
const iconPasswordCorrect = document.querySelector('.icon-password-correct');
const iconPassword2Correct = document.querySelector('.icon-password2-correct');
const iconCityCorrect = document.querySelector('.icon-city-correct');
const iconEmailCorrect = document.querySelector('.icon-email-correct');

const wrongAnswerIcon = document.querySelectorAll('.fa-x');
const iconUsernameIncorrect = document.querySelector('.icon-username-incorrect');
const iconPasswordIncorrect = document.querySelector('.icon-password-incorrect');
const iconPassword2Incorrect = document.querySelector('.icon-password2-incorrect');
const iconCityIncorrect = document.querySelector('.icon-city-incorrect');
const iconEmailIncorrect = document.querySelector('.icon-email-incorrect');

const goNextBtn = document.querySelector('.go-next-btn');
const clearFormBtn = document.querySelector('.clear-form-btn');
const closeBtn = document.querySelector('.closeBtn');
const setPage = document.querySelector('.end-form a');

import {everyErrorText} from './every_error_text.js';
import {allRexExp} from './RexExp.js';
import {APIweather} from './fetch_API_Weather.js';

let i = 0;

const everyError = (valueInput, nameError, mistake, iconCheck, iconX) => {

    valueInput.classList.add("underline");
    nameError.style.visibility = 'visible';
    nameError.textContent = mistake; 
    iconCheck.style.visibility = 'hidden';
    iconX.style.visibility = 'visible';
}

const everyGoodPath = (valueInput, nameError, iconCheck, iconX) => {
    valueInput.classList.remove("underline");
    nameError.style.visibility = 'hidden';
    iconCheck.style.visibility = 'visible';
    iconX.style.visibility = 'hidden';
     
}

const clearError = () => {

    if(i >=1) {
        goodAnswerIcon.forEach(i => i.style.visibility = 'hidden');
        wrongAnswerIcon.forEach(i => i.style.visibility = 'hidden');
        allError.forEach(el => el.style.visibility = 'hidden');
        input.forEach(el => {
            el.value = '';
            el.classList.remove("underline");
        })
}
}

const checkUserName = ()  => {
   
    if(!allRexExp.specialSigns.test(userNameInput.value)){
        
        if(userNameInput.value.length > 2){

            everyGoodPath(userNameInput, errorName, iconUsernameCorrect, iconUsernameIncorrect);
            return true
            
        }else{
            everyError(userNameInput, errorName, everyErrorText.ToLowLetterName, iconUsernameCorrect, iconUsernameIncorrect); 
        }  
        
    } else{
        everyError(userNameInput,errorName,everyErrorText.forbiddenSpecialSigns, iconUsernameCorrect, iconUsernameIncorrect);  
    }
}  
        
const checkPassword = () => {

    if(passwordInput.value.length >= 8){

        if(allRexExp.specialSigns.test(passwordInput.value)){

            if(allRexExp.numbers.test(passwordInput.value)){

                everyGoodPath(passwordInput, errorPassword, iconPasswordCorrect, iconPasswordIncorrect);
                return true
                
            }else{
                everyError(passwordInput, errorPassword, everyErrorText.haveToUseNambers, iconPasswordCorrect, iconPasswordIncorrect);
            }

        }else{
            everyError(passwordInput, errorPassword, everyErrorText.haveToSpecialSigns, iconPasswordCorrect, iconPasswordIncorrect);
        }
   
    }else{
        everyError(passwordInput, errorPassword, everyErrorText.ToLowPassword, iconPasswordCorrect, iconPasswordIncorrect);
    }  
} 

const checkComparingPasswords = () => {

    if(password2Input.value === password.value && password2Input.value.length > 0){

        everyGoodPath(password2Input, errorPassword2, iconPassword2Correct, iconPassword2Incorrect);
        return true
    }else{

        everyError(password2Input, errorPassword2, everyErrorText.Otherpassword, iconPassword2Correct, iconPassword2Incorrect);
    }
}

const checkCity = ()  => {
   
  const  URL = APIweather.API_LINK + cityInput.value + APIweather.API_KEY + APIweather.API_UNITS
        axios.get(URL).then(res => {
            everyGoodPath(cityInput, errorCity, iconCityCorrect, iconCityIncorrect);
            allInputCorret();
          
        }).catch(() => {
            everyError(cityInput, errorCity, everyErrorText.errorCityInfo, iconCityCorrect, iconCityIncorrect);
        })

}

const checkEmail = () => {

    if((allRexExp.RexExpEmail.test(emailInput.value))){
        
        everyGoodPath(emailInput, errorEmail, iconEmailCorrect, iconEmailIncorrect);
        return true

    }else{

        everyError(emailInput, errorEmail, everyErrorText.errorEmailInfo, iconEmailCorrect, iconEmailIncorrect);

    }
}

const setCity = () => {

    localStorage.setItem('city', cityInput.value);
}

  const setNickName = () => {
      
    const firstBigLetter = String(userNameInput.value).charAt(0).toUpperCase();
    const removeSecoundLetter = String(userNameInput.value).slice(1);
    localStorage.setItem('nickName', `${firstBigLetter}${removeSecoundLetter}`);

    endFormText.innerHTML = `Hello <b>${firstBigLetter}${removeSecoundLetter}</b>, thanks for short form`;
}

const allInputCorret = () => {

    if( checkUserName() && checkPassword() && checkComparingPasswords() && checkEmail () ) {

        goodAnswerIcon.forEach(i => i.style.opacity = -1);
        controlButton.style.opacity = -1;
        form.style.visibility = 'hidden';
        endForm.style.visibility = 'visible';
        setNickName();
        setCity();

    }
}

const clearForm = () => {

    i++
    clearError();

}

const animationGoNextBtn = () => {

    goNextBtn.classList.add("animationAfterClickEnter"); 
    setTimeout( () => { 
        goNextBtn.classList.remove("animationAfterClickEnter");
    }, 500)

}

const redirectPage = () => {

  return  setPage.setAttribute('href', "/form_menu_quiz/Start_form/menu_after_form/menu.html");

}

    goNextBtn.addEventListener('click', checkUserName);
    goNextBtn.addEventListener('click', checkPassword);
    goNextBtn.addEventListener('click', checkComparingPasswords);
    goNextBtn.addEventListener('click',  checkCity);
    goNextBtn.addEventListener('click', checkEmail);
    clearFormBtn.addEventListener('click', clearForm);

    closeBtn.addEventListener('click', redirectPage);
    closeBtn.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            redirectPage()
        }
    } );

    input.forEach(input => input.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
                animationGoNextBtn() ;
                checkUserName();
                checkPassword();
                checkComparingPasswords();
                checkCity();
                checkEmail();
        }      
}
))


