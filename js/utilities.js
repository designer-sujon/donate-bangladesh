
function getDonateAmount (id){
    // if(id <0 || isNaN(id)){
    //     alert ('Please provide valid amount')
    //     return
    // }
    const donateAmount =document.getElementById(id).value;
    const donateAmountNumber = parseFloat(donateAmount);
    
    return donateAmountNumber
}

function openingBalance (id){
    // if(id <0 || isNaN(id)){
    //     alert ('Please provide valid amount')
    //     return
    // }
    const openingBalance =document.getElementById(id).innerText;
    const openingBalanceNumber = parseFloat(openingBalance);
    return openingBalanceNumber
    
}