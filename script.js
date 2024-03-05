let balance = 0;

//this function is for deposite button
function addToDeposite(){
    const depositeAmount = Number(document.getElementById('deposite-amount').value); // whatever I input

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
    const withdrawAmount = Number(document.getElementById('withdraw-amount').value); // whatever I input

    balance -= withdrawAmount;

    document.getElementById('withdraw').innerHTML = withdrawAmount; //00
    
    if (balance < 0){
        alert('Insufficient Balance!!');
    }

}


// let mainBalance = 50000;
// document.getElementById('balances').innerHTML = mainBalance;


// const depositeAmounts = Number(document.getElementById('deposite-amount').value);


// const withdrawAmounts = Number(document.getElementById('withdraw-amount').value);


// const finalBalance = depositeAmounts - withdrawAmounts;

// document.getElementById('balances').innerHTML += finalBalance;