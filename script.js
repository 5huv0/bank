let balance = 0;

//this function is for deposite button
function addToDeposite(){
    const depositeAmount = Number(document.getElementById('deposite-amount').value); // whatever I input

    balance += depositeAmount;

   document.getElementById('deposite').innerHTML = balance; //00

}


//this functioin is for withdraw button
function addToWithdraw(){
    const withdrawAmount = Number(document.getElementById('withdraw-amount').value); // whatever I input

    balance -= withdrawAmount;

    document.getElementById('withdraw').innerHTML = balance; //00
    
}

