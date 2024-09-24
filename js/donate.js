

const mainBalance = openingBalance('main-Balance');
const noakhaliBalance = openingBalance ('noakhali-Balance');
const feniBalance = openingBalance('feni-Balance');
const quotaBalance = openingBalance('quota-Balance');

const noakhaliDonateAmount = getDonateAmount('input-noakhali')
const feniDonateAmount = getDonateAmount('input-feni')
const quotaDonateAmount = getDonateAmount('input-quota')


function handleDonateBtn(event){
    const noakhaliDonate = noakhaliBalance + noakhaliDonateAmount;
    document.getElementById('noakhali-Balance').innerText = noakhaliDonate.toFixed(2)
    
}