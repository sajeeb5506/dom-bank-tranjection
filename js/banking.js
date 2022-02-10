// handel deposit button
document.getElementById('diposit-button').addEventListener('click', function(){
    // get the amount 
    const dipositInput = document.getElementById('diposit-input');
    const newdipositAmount=dipositInput.value ;
   
    const dipositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = dipositTotal.innerText;
    const newDipositTotal = parseFloat(previousDepositAmount)  + parseFloat(newdipositAmount);
    dipositTotal.innerText = newDipositTotal;
//   ubdate -balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal +  parseFloat(newdipositAmount);
    balanceTotal.innerText = newBalanceTotal;


    // clear input filf
    dipositInput.value = '';

// handel widthdrow
document.getElementById('widthdeow-button').addEventListener('click', function(){
    const widthdrowInput = document.getElementById('widthdeow-input');
    const widthdrowAmountText = widthdrowInput.value;
    const newWidthdrowAmount = parseFloat(widthdrowAmountText);
    // set widthdrow total
    
    const widthdrowTotal = document.getElementById('withdrow-total');
    const previousWidthdrowText = widthdrowTotal.innerText;
    const previousWidthdrowTotal = parseFloat( previousWidthdrowText);
    const newWidthdrowTotal = previousWidthdrowTotal + newWidthdrowAmount ;
    widthdrowTotal.innerText = newWidthdrowTotal;

// clear widthdrow niput 
widthdrowInput.value = '';
// ubdate balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWidthdrowAmount;
balanceTotal.innerText = newBalanceTotal;


})

})