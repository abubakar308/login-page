document.getElementById('add-money-button').addEventListener('click',function(){
    document.getElementById('add-money').classList.remove('hidden');
    document.getElementById('cash-out').classList.add('hidden');
});

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cash-out').classList.remove('hidden');
})