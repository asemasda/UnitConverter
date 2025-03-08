const btnElement=document.getElementById("btn")
const lengthElement =document.getElementById("unit-length")
const volumeElement=document.getElementById("unit-volume")
const massElement=document.getElementById("unit-Mass")
const numElement=document.getElementById("numId")



numElement.addEventListener("click",function(){
    numElement.value="";

})


btnElement.addEventListener("click",function(){
    let numValue = parseFloat(numElement.value); 
    if (isNaN(numValue)) {
        
        alert("Please enter a valid number");
        return;
    }

    lengthElement.innerText +=`${numValue} meter = ${(numValue * 3.281).toFixed(3)} Feet | ${numValue} Feet = ${(numValue * 0.3048).toFixed(3)} meters`;
    volumeElement.innerText+= `${numValue} gallons = ${(numValue * 0.264).toFixed(3)} gallons | ${numValue} gallons = ${(numValue * 3.78541).toFixed(3)} liters`;
    massElement.innerText += `${numValue} kilos = ${(numValue * 2.204).toFixed(3)} pounds | ${numValue} pounds = ${(numValue * 0.453592).toFixed(3)} kilos`;

})