let balance = 0;

//this function is for deposite button
function addToDeposite(){
    const depositeAmount = Number(document.getElementById('deposite-amount').value); // whatever I input in deposite

    balance += depositeAmount;

   document.getElementById('deposite').innerHTML = balance; //00

   if (balance > 9999999){
    alert('You are Rich as Fuck!!!');
   }

   else if(balance < 100){
    alert("You are Poor as Fuck!!!");
   }

}


//this functioin is for withdraw button
function addToWithdraw(){
    const withdrawAmount = Number(document.getElementById('withdraw-amount').value); // whatever I input in withdraw

    const depositeAmount = Number(document.getElementById('deposite-amount').value);

    if(withdrawAmount < depositeAmount){
        balance -= withdrawAmount;

        document.getElementById('withdraw').innerHTML = withdrawAmount; //00
    
       
    
    }
   
    if (withdrawAmount > depositeAmount){
        alert('Insufficient Balance!!');

        document.getElementById('balances').innerHTML = NaN;
    }

    else if (balance < 0){
        alert('Insufficient Balance!!');
    }
}


function totalBalanceAdd(){
    let depositeAmount = Number(document.getElementById('deposite-amount').value); // whatever I input in deposite

    // let withdrawAmount = Number(document.getElementById('withdraw-amount').value); // whatever I input in withdraw

    const Balance = Number(document.getElementById('balances').innerHTML);

    depositeAmount += Balance;

    document.getElementById('balances').innerHTML = depositeAmount;
}

function totalBalanceDraw(){
    // let depositeAmount = Number(document.getElementById('deposite-amount').value); // whatever I input in deposite

    let withdrawAmount = Number(document.getElementById('withdraw-amount').value); // whatever I input in withdraw

    const Balance = Number(document.getElementById('balances').innerHTML);

    withdrawAmount -= Balance;

    document.getElementById('balances').innerHTML = Math.abs(withdrawAmount);
}