//catch the withdraw button for event handling

document.getElementById('btn-withdraw').addEventListener('click',function(){
   
    //input withdraw Amount------
   const withdrawAmount=inputFieldGetValueById('withdraw-field');

   //error handling by user input
   if(isNaN(withdrawAmount) ){
    alert('please provide valid input---Like Number');
    return;
  }

   //current main Balance Total
   const mainBalance=inputFieldGetElementById('balance-total');
   
   //insufficient error handling....
   if(withdrawAmount>mainBalance){
    alert("your Balance is insufficient Amount.please! cash in..");
    return;
   }

    //current withdraw Amount
    const currentWithdrawAmount=inputFieldGetElementById('withdraw-total');

    //new withdraw Total value
    const currentwithdrawTotal=withdrawAmount+currentWithdrawAmount;

    //set the value in withdraw Box
    setTextElementById('withdraw-total',currentwithdrawTotal);

    // new withdraw Amount and subtract from total main balance
    const mainBalanceTotal=mainBalance-withdrawAmount;

    //set the value in main Balance Box
    setTextElementById('balance-total',mainBalanceTotal);
})