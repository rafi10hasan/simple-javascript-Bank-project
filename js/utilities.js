//input value from deposit and withdraw input box
function inputFieldGetValueById(inputId){
    const inputField=document.getElementById(inputId);
    const inputValue=parseFloat(inputField.value);
    inputField.value='';
    return inputValue;
}

//input the current deposit and main balance value
function inputFieldGetElementById(inputElementId){
    const inputElementField=document.getElementById(inputElementId);
    const inputElementValue=parseFloat(inputElementField.innerText);
    inputElementField.value='';
    return inputElementValue;
}

//input element Id and set the value Deposit,withdraw,and main balance Box---
function setTextElementById(elementId,elementValue){
    const setElement=document.getElementById(elementId);
    setElement.innerText=elementValue;
}