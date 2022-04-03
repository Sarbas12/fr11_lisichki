const buttons = document.querySelectorAll(".button")
const applyButtonSide = document.getElementById("applyButtonSide");
const applyButtonMain = document.getElementById("applyButtonMain")
const crossButton = document.querySelectorAll(".icon")
const filterResult = document.getElementById("filterResult")
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttons.forEach(btn => {
            btn.classList.remove("button__active");
            this.classList.add("button__active");
        })
    })
}
for (i = 0; i < crossButton.length; i++) {
    crossButton[i].addEventListener("click", function () {

        crossButton.forEach(btn => {
            this.classList.toggle("active")
        })
    })
}

const checkPlace = () => {
    outputData.destination = document.getElementById("destinationFilterMain").value;
}
let outputData = {
    peopleAmount: "",
    minPrice: "",
    maxPrice: "",
    duration: "",
    destination: ""
};
let sortedData = [
    [],
    [],
    []
] // 0 buses, 1 jeep, 2 yacht
const sortDataSide = () => {
    let tourdata = [
        [],
        [],
        []
    ]
    for (let i = 0; i < parsedData.length; i++) {
        for (item of parsedData[i]) {
            itemDuration = item.duration
            if (itemDuration.includes(outputData.duration) && outputData.minPrice < item.adultPrice < outputData.maxPrice && item.peopleAmount == outputData.peopleAmount) {
                tourdata[i].push(item)
            }
        }
    }
    return tourdata;
}

const sortDataMain = () => {
    let tourdata = [
        [],
        [],
        []
    ]
    for (let i = 0; i < parsedData.length; i++) {
        for (item of parsedData[i]) {
            itemDuration = item.duration
            if (itemDuration.includes(outputData.duration) && item.place == outputData.destination) {
                tourdata[i].push(item)
            }

        }
    }
    return tourdata;
}

const checkPeopleAmount = () => {
    try {
        let peopleAmountSelected = document.querySelector(".button__active")
        outputData.peopleAmount = peopleAmountSelected.value
        return peopleAmountSelected.value
    } catch {
        return
    }

};

const checkPriceLimits = () => {
    let priceLimits = document.querySelectorAll(".price-input > div > input");
    outputData.minPrice = priceLimits[0].value;
    outputData.maxPrice = priceLimits[1].value;

}

const checkDuration = () => {
    outputData.duration = document.querySelector('input[name="flexRadioDefault"]:checked').value;
}




const applyParametersSide = () => {
    document.getElementById("peopleFilterMain").value = checkPeopleAmount() //одновременно передаем значение в мейн фильтр и сохраняем его в outuput
    checkPriceLimits()
    checkDuration()
    sortedData = sortDataSide()

    let currentSelection = ""
    filterResult.innerHTML = ""
    if (localStorage.getItem("currentPage") == "bus") {
        if (sortedData[0].length == 0) {
            currentSelection = parsedCardsBus;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection))
            filterResult.innerHTML = "К сожалению, не найдено туров, подходящих под критерии. Предлагаем посмотреть все наши туры!"


        } else {

            currentSelection = sortedData[0];
            localStorage.setItem("currentSelection", JSON.stringify(sortedData[0]))
            filterResult.innerHTML = `Найдено туров: ${sortedData[0].length}`
        }

    } else if (localStorage.getItem("currentPage") == "jeep") {
        if (sortedData[1].length == 0) {
            currentSelection = parsedJeep;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection));
            filterResult.innerHTML = "К сожалению, не найдено туров, подходящих под критерии. Предлагаем посмотреть все наши туры!"
        } else {
            currentSelection = sortedData[1];
            localStorage.setItem("currentSelection", JSON.stringify(sortedData[1]))
            filterResult.innerHTML = `Найдено туров: ${sortedData[1].length}`

        }


    } else if (localStorage.getItem("currentPage") == "yacht") {
        if (sortedData[2].length == 0) {
            currentSelection = parsedYacht;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection));
            filterResult.innerHTML = "К сожалению, не найдено туров, подходящих под критерии. Предлагаем посмотреть все наши туры!"
        } else {
            currentSelection = sortedData[2];
            localStorage.setItem("currentSelection", JSON.stringify(sortedData[2]))
            filterResult.innerHTML = `Найдено туров: ${sortedData[2].length}`
        }




    }
    const reinitializeTour = () => {
        tourCard.tourImage.src = currentSelection[0].pictureSrc;
        tourCard.tourType.innerHTML = currentSelection[0].type;
        tourCard.tourName.innerHTML = currentSelection[0].name;
        tourCard.adultPrice.innerHTML = currentSelection[0].adultPrice;
        tourCard.childPrice.innerHTML = currentSelection[0].childPrice;
        tourCard.tourDuration.innerHTML = currentSelection[0].duration;
        tourCard.tourDescription.innerHTML = currentSelection[0].description,
            tourCard.amountLikes.innerHTML = currentSelection[0].likes
    }
    reinitializeTour()
    counter.innerHTML = 1;
    position = 0;
}

const applyParametersMain = () => {
    let receivedAmount = document.getElementById("peopleFilterMain").value
    const newActive = document.querySelector(`button[value="${receivedAmount}"]`)
    const previousActive = document.querySelector(`.button__active`);

    try {
        newActive.classList.add("button__active");
    } catch {
        return
    }

    previousActive.classList.remove("button__active");
    checkPlace();
    checkDuration();

    //одновременно передаем значение в мейн фильтр и сохраняем его в outuput
    sortedData = sortDataMain()

    let currentSelection = ""
    filterResult.innerHTML = ""
    if (localStorage.getItem("currentPage") == "bus") {
        if (sortedData[0].length == 0) {
            currentSelection = parsedCardsBus;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection))
            filterResult.innerHTML = "К сожалению, не найдено туров, подходящих под критерии. Предлагаем посмотреть все наши туры!"


        } else {

            currentSelection = sortedData[0];
            localStorage.setItem("currentSelection", JSON.stringify(sortedData[0]))
            filterResult.innerHTML = `Найдено туров: ${sortedData[0].length}`
        }

    } else if (localStorage.getItem("currentPage") == "jeep") {
        if (sortedData[1].length == 0) {
            currentSelection = parsedJeep;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection));
            filterResult.innerHTML = "К сожалению, не найдено туров, подходящих под критерии. Предлагаем посмотреть все наши туры!"
        } else {
            currentSelection = sortedData[1];
            localStorage.setItem("currentSelection", JSON.stringify(sortedData[1]))
            filterResult.innerHTML = `Найдено туров: ${sortedData[1].length}`

        }


    } else if (localStorage.getItem("currentPage") == "yacht") {
        if (sortedData[2].length == 0) {
            currentSelection = parsedYacht;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection));
            filterResult.innerHTML = "К сожалению, не найдено туров, подходящих под критерии. Предлагаем посмотреть все наши туры!"
        } else {
            currentSelection = sortedData[2];
            localStorage.setItem("currentSelection", JSON.stringify(sortedData[2]))
            filterResult.innerHTML = `Найдено туров: ${sortedData[2].length}`
        }




    }
    const reinitializeTour = () => {
        tourCard.tourImage.src = currentSelection[0].pictureSrc;
        tourCard.tourType.innerHTML = currentSelection[0].type;
        tourCard.tourName.innerHTML = currentSelection[0].name;
        tourCard.adultPrice.innerHTML = currentSelection[0].adultPrice;
        tourCard.childPrice.innerHTML = currentSelection[0].childPrice;
        tourCard.tourDuration.innerHTML = currentSelection[0].duration;
        tourCard.tourDescription.innerHTML = currentSelection[0].description,
            tourCard.amountLikes.innerHTML = currentSelection[0].likes
    }
    reinitializeTour()
    counter.innerHTML = 1;
    position = 0;
}

applyButtonSide.onclick = function () {
    applyParametersSide()
}

applyButtonMain.onclick = function () {
    applyParametersMain()
}