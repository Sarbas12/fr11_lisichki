const buttons = document.querySelectorAll(".button")
const applyButton = document.getElementById("applyButton");
const crossButton = document.querySelectorAll(".icon")
for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        buttons.forEach(btn=>{
            btn.classList.remove("button__active");
            this.classList.add("button__active");
        })
    })
}
for(i=0; i<crossButton.length; i++){
    crossButton[0].classList.add("active");
    crossButton[i].addEventListener("click", function(){
        
        crossButton.forEach(btn=>{
            this.classList.toggle("active")
        })
    })
}


let outputData = {
    peopleAmount: ""
};

const checkPeopleAmount = () =>{
    try{
        peopleAmountSelected = document.querySelector(".button__active")
        outputData.peopleAmount = peopleAmountSelected.value
    }
    catch{
        return
    }
}
const applyParameters = () =>{
    checkPeopleAmount()
    }

applyButton.onclick = function (){applyParameters()}