document.getElementById('add-money-button').addEventListener('click',function(){
    document.getElementById('add-money').classList.remove('hidden');
    document.getElementById('cash-out').classList.add('hidden');
    document.getElementById('tansaction').classList.add('hidden')
});

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cash-out').classList.remove('hidden');
    document.getElementById('tansaction').classList.add('hidden')
})

document.getElementById('transaction-button').addEventListener('click',function(){
  document.getElementById('add-money').classList.add('hidden');
  document.getElementById('cash-out').classList.add('hidden');
  document.getElementById('tansaction').classList.remove('hidden')
})
  let balance = document.getElementById('balance');
  document.getElementById('add-click-button').addEventListener('click',function(event){
    event.preventDefault();

    let currentBalance = Number(balance.innerText);
    const addPin = document.getElementById('add-pin').value;
    
    let addAmount = Number(document.getElementById('add-amount').value);
    if(addPin === '1234'){
      currentBalance += addAmount;
      balance.innerText = currentBalance;
     const transaction = document.createElement('p');
     transaction.innerText =  `Added taka  ${addAmount}   Now Balance  ${currentBalance}`

     document.getElementById('tansaction').appendChild(transaction);
     document.getElementById('history').classList.add('hidden')
     
    }
    else{
        alert('wrong pin')
    }
  })

  document.getElementById('out-click-button').addEventListener('click',function(event){
    event.preventDefault();
    let newBalance = Number(balance.innerText);
    const outPin = document.getElementById('out-pin').value;
    const demo = document.getElementById('demo')
    const outAmount = Number(document.getElementById('out-amount').value);
    if(outPin === '1234' && newBalance>=outAmount){
      newBalance -= outAmount;
      balance.innerText = newBalance;

      const transaction = document.createElement('p');
     transaction.innerText =  `Cash Out taka  ${outAmount}  Now Balance  ${newBalance}`

     document.getElementById('tansaction').appendChild(transaction).style.backgroundColor = 'orange';
     document.getElementById('history').classList.add('hidden')
    }
    else if(outPin !== '1234'){
        alert('wrong pin')
    }
    else{
        alert('insufficient balance please add balance')
    }
  });