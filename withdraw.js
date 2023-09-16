
document.getElementById("Withdraw-btn").addEventListener("click",function(){

    const newWitdraw = inputValue("Withdraw-input")

    const previousWithdraw = elementt("Withdraw-balance")

    const currentWithdraw = newWitdraw+ previousWithdraw
    setTextId("Withdraw-balance",currentWithdraw)
    const balance = elementt("Balance")
    const currentBalance = balance-newWitdraw;
    setTextId("Balance",currentBalance)



})