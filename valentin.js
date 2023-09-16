document.getElementById("kitkat-buy-btn").addEventListener("click",function(){


   const quantity = inputquantiy("kitkat-quantity")
 
 
 
const quantityPrice = document.getElementById("kitkat-price")
const quantityPriceString = quantityPrice.innerText
const quantityNumPrice = parseFloat(quantityPriceString)

const choklet =  document.getElementById("chocolate")
const chocolateString = choklet.innerText
const chocolate = parseFloat(chocolateString)
 const chokletTotal  = quantity*quantityNumPrice;
 innerText("chocolate",chokletTotal)
 totalSum();



quantity.value  = ""
 

})
document.getElementById("rose-buy-btn").addEventListener("click",function(){


   const quantity = inputquantiy("rose-quantity")
 
//    console.log(quantityValue)
const quantityPrice = document.getElementById("rose-price")
const quantityPriceString = quantityPrice.innerText
const quantityNumPrice = parseFloat(quantityPriceString)

const rose =  document.getElementById("rose")
const roseString = rose.innerText
const rosePrice = parseFloat(roseString)
const roseTotal= quantity*quantityNumPrice;
innerText("rose",roseTotal)
totalSum()
quantity.value  = ""

 
})
document.getElementById("diary-buy-btn").addEventListener("click",function(){


   const quantity = inputquantiy("diary-quantity")
  
//    console.log(quantityValue)
const quantityPrice = document.getElementById("diary-price")
const quantityPriceString = quantityPrice.innerText
const quantityNumPrice = parseFloat(quantityPriceString)

const choklet =  document.getElementById("diary")
const chocolateString = choklet.innerText
const chocolate = parseFloat(chocolateString)
const chocolatePrice = quantity*quantityNumPrice;
innerText("diary",chocolatePrice)
quantity.value  = ""
totalSum()

})


 document.getElementById("Apply").addEventListener("click",function(){

   const promoCode= inputquantiy("promo-code")
  
   if(promoCode ==="101"){
      const total = text("total")
      const discount = total*0.1;
      
      const alltotal =text("all-total")

      const currenttotal = total-discount;
      innerText("all-total",currenttotal)
   

   }
   else{
      alert("wrong")
   }
  
 })

 













 