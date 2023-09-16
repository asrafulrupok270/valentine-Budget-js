function innerText(id,value){

    const text = document.getElementById(id).innerText=value;
}
 

function inputquantiy(id){
    const quantity = document.getElementById(id).value;
     
    return quantity
}

 function totalSum(){

    const chocolate =  text("chocolate") 
    const rose  = text("rose") 
    const diary = text("diary") 
    const totalSum = chocolate+rose+diary;
    innerText("total",totalSum)
 }

 function text(id){

    const text = document.getElementById(id).innerText
    const textNum = parseFloat(text)
    return textNum;

 }