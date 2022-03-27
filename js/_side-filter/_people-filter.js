const buttons = document.querySelectorAll(".button")
const applyButton = document.getElementById("applyButton");
const crossButton = document.querySelector(".icon")
for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        buttons.forEach(btn=>{
            btn.classList.remove("button__active");
            this.classList.add("button__active");
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
crossButton.addEventListener("click", () => {crossButton.classList.toggle("active")})