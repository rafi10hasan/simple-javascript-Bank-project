
//catch the Deposit button for event handling
document.getElementById('btn-deposit').addEventListener('click',function(){
    
    //input Deposit Amount------
    const depositInputAmount=inputFieldGetValueById('deposit-field');
    
    //error handling by user input
    if(isNaN(depositInputAmount) ){
        alert('please provide valid input---Like Number');
        return;
      }
    
    //current Deposit Amount
    const currentDepositAmount=inputFieldGetElementById('deposit-total');
    
    //new Deposit Total value
    const currentDepositTotal=depositInputAmount+currentDepositAmount;
    
    //set the value in Deposit Box
    setTextElementById('deposit-total',currentDepositTotal);
    
    //current main Balance Total
    const mainBalance=inputFieldGetElementById('balance-total');

    //Add new deposit Amount and sum total main balance
    const mainBalanceTotal=mainBalance+depositInputAmount;
    
    //set the value in main Balance Box
    setTextElementById('balance-total',mainBalanceTotal);
    
})