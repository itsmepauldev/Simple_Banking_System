
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');


deposit.onclick = function () {
    let input = parseInt(document.getElementById('input').value);
    let money = parseInt(localStorage.getItem('balance')) || 0;
    let result = input + money;
if(isNaN(input)){
    alert('You need to enter an amount.');
}else{
    localStorage.setItem('balance', result);
    document.getElementById('balancee').innerHTML =  ` ₱${result}`;
    document.getElementById('with').innerHTML = `Successfully Deposited: ₱${input}`;
}
    


}
withdraw.onclick = function () {
    let input = parseInt(document.getElementById('input').value);
    let money = parseInt(localStorage.getItem('balance')) || 0;
    let withdraw = money - input;
if(isNaN(input)){
    alert('You need to enter an amount.');

}
   else if (input > money) {
        document.getElementById('with').innerHTML = `Balance is insufficient.`;

    }

    else {
        localStorage.setItem('balance', withdraw);
        document.getElementById('with').innerHTML = `Withdrawal Successful: ₱${input}`;
        document.getElementById('balancee').innerHTML = ` ₱${withdraw}`;
    }
}

function balance() {
    let money = parseInt(localStorage.getItem('balance')) || 0;
    document.getElementById('balancee').innerHTML = ` ₱${money}`;

}

window.onload = balance;