const cardsBus = `[{
    "pictureSrc":"images/asset_1.jpg",
    "pictureAlt":"Абхазия",
    "peopleAmount":"4",
    "place":"Абхазия",
    "type":"Автобусный тур",
    "name":"Золотое кольцо Абхазии (из Адлера)",
    "adultPrice":"2 300₽",
    "childPrice":"2 000₽",
    "duration":"2,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"4"
},
{
    "pictureSrc":"images/asset_2.jpg",
    "pictureAlt":"Адлер",
    "peopleAmount":"6",
    "place":"Адлер",
    "type":"Автобусный тур",
    "name":"Адлер на ладони",
    "adultPrice":"2 500₽",
    "childPrice":"2 200₽",
    "duration":"1,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"8"
},
{
    "pictureSrc":"images/asset_3.jpg",
    "pictureAlt":"Красная поляна",
    "peopleAmount":"4",
    "place":"Красная поляна",
    "type":"Автобусный тур",
    "name":"Красная поляна",
    "adultPrice":"2 700₽",
    "childPrice":"2 600₽",
    "duration":"2,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"2"
}
]`

const cardsJeep = `[{
    "pictureSrc":"images/asset_9.jpg",
    "pictureAlt":"джипинг красная поляна",
    "peopleAmount":"4",
    "place":"Красная поляна",
    "type":"Джипинг",
    "name":"Джипинг на Красной Поляне",
    "adultPrice":"3 900₽",
    "childPrice":"3 300₽",
    "duration":"2,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"13"
},
{
    "pictureSrc":"images/asset_10.jpeg",
    "pictureAlt":"Джипинг Сочи",
    "peopleAmount":"2",
    "place":"Сочи",
    "type":"Джипинг",
    "name":"Джипинг в Сочи",
    "adultPrice":"3 500₽",
    "childPrice":"3 100₽",
    "duration":"1,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"6"
},
{
    "pictureSrc":"images/asset_11.jpg",
    "pictureAlt":"джипинг адлер",
    "peopleAmount":"3",
    "place":"Адлер",
    "type":"Джипинг",
    "name":"Джипинг в Адлере",
    "adultPrice":"3 700₽",
    "childPrice":"3 300₽",
    "duration":"1,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"11"
}
]`

const cardsYacht = `[{
    "pictureSrc":"images/asset_6.jpg",
    "pictureAlt":"яхтинг адлер",
    "peopleAmount":"3",
    "place":"Адлер",
    "type":"Яхтинг",
    "name":"Яхтинг в Адлере",
    "adultPrice":"4 600₽",
    "childPrice":"4 300₽",
    "duration":"2,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"10"
},
{
    "pictureSrc":"images/asset_7.jpg",
    "pictureAlt":"яхтинг сочи",
    "peopleAmount":"1",
    "place":"Сочи",
    "type":"Яхтинг",
    "name":"Яхтинг в Сочи",
    "adultPrice":"5 600₽",
    "childPrice":"4 900₽",
    "duration":"1,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"8"
},
{
    "pictureSrc":"images/asset_8.jpg",
    "pictureAlt":"яхтинг красная поляна",
    "peopleAmount":"2",
    "place":"Красная поляна",
    "type":"Яхтинг",
    "name":"Яхтинг в Красной Поляне",
    "adultPrice":"6 500₽",
    "childPrice":"5 400₽",
    "duration":"2,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"15"
}
]`


let position = 0;
const parsedCardsBus = JSON.parse(cardsBus);
const parsedJeep = JSON.parse(cardsJeep);
const parsedYacht = JSON.parse(cardsYacht);
const parsedData = [parsedCardsBus, parsedJeep, parsedYacht];
const busTourSection = document.getElementById("busTourSection");
const jeepTourSection = document.getElementById("jeepTourSection")
const yachtTourSection = document.getElementById("yachtTourSection");
const nextButton = document.getElementById("nextButton");
const previousButton  = document.getElementById("previousButton");
let counter = document.getElementById("counterNumber");
let currentSelection = parsedCardsBus;
localStorage.setItem("currentSelection", JSON.stringify(currentSelection))
const tourCard = {
    tourImage:document.getElementById("tourImage"),
    tourType: document.getElementById("tourType"),
    tourName: document.getElementById("tourName"),
    adultPrice: document.getElementById("adultPrice"),
    childPrice: document.getElementById("childPrice"),
    tourDuration: document.getElementById("tourDuration"),
    tourDescription: document.getElementById("tourDescription"),
    amountLikes: document.getElementById("heartButtonValue")

}



const initializeTour = (currentSelection) => {
    tourCard.tourImage.src = currentSelection[0].pictureSrc;
    tourCard.tourType.innerHTML = currentSelection[0].type;
    tourCard.tourName.innerHTML = currentSelection[0].name;
    tourCard.adultPrice.innerHTML = currentSelection[0].adultPrice;
    tourCard.childPrice.innerHTML = currentSelection[0].childPrice;
    tourCard.tourDuration.innerHTML = currentSelection[0].duration;
    tourCard.tourDescription.innerHTML = currentSelection[0].description,
    tourCard.amountLikes.innerHTML = currentSelection[0].likes
}



const nextTour = () => {
    
    if(position<JSON.parse(localStorage.getItem("currentSelection")).length-1 && JSON.parse(localStorage.getItem("currentSelection")).length>1){
        position++;
        tourCard.tourImage.src = JSON.parse(localStorage.getItem("currentSelection"))[position].pictureSrc;
        tourCard.tourType.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].type;
        tourCard.tourName.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].name;
        tourCard.adultPrice.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].adultPrice;
        tourCard.childPrice.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].childPrice;
        tourCard.tourDuration.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].duration;
        tourCard.tourDescription.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].description;
        tourCard.amountLikes.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position].likes;
        counter.innerHTML = Number(counter.innerHTML)+1;
        heartButton.classList.remove("button_active")
        
    }
    
}

const previousTour = () => {
    if(position>0 && JSON.parse(localStorage.getItem("currentSelection")).length >1){
        tourCard.tourImage.src = JSON.parse(localStorage.getItem("currentSelection"))[position-1].pictureSrc;
        tourCard.tourType.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].type;
        tourCard.tourName.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].name;
        tourCard.adultPrice.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].adultPrice;
        tourCard.childPrice.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].childPrice;
        tourCard.tourDuration.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].duration;
        tourCard.tourDescription.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].description;
        tourCard.amountLikes.innerHTML = JSON.parse(localStorage.getItem("currentSelection"))[position-1].likes;
        counter.innerHTML = counter.innerHTML-1;
        position--;
        heartButton.classList.remove("button_active")
        
    }
    
}

const switchPage = () =>{
    nextButton.addEventListener("click", function(){
        nextTour()
    });
    previousButton.addEventListener("click", function(){
        previousTour()
    })
}

window.addEventListener("DOMContentLoaded", function(){
    initializeTour(currentSelection)
    localStorage.setItem("currentPage", "bus")
})



switchPage()

    jeepTourSection.addEventListener("click", function(){
        currentSelection = parsedJeep
        localStorage.setItem("currentSelection", JSON.stringify(currentSelection))
        initializeTour(currentSelection)
        nextTour(currentSelection)
        previousTour(currentSelection)
        filterResult.innerHTML=""
        localStorage.setItem("currentPage", "jeep")
        position = 0;
        counter.innerHTML = 1;
        heartButton.classList.remove("button_active")
    })
    busTourSection.addEventListener("click", function(){
            currentSelection = parsedCardsBus
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection))
        initializeTour(currentSelection)
        nextTour(currentSelection)
        previousTour(currentSelection);
        filterResult.innerHTML=""
        localStorage.setItem("currentPage", "bus")
        position = 0;
        counter.innerHTML=1;
        heartButton.classList.remove("button_active")
    });
    yachtTourSection.addEventListener("click", function(){
        
            currentSelection = parsedYacht;
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection))
            
            initializeTour(currentSelection)
            nextTour(currentSelection);
            filterResult.innerHTML=""
            previousTour(currentSelection);
            localStorage.setItem("currentPage", "yacht")
            position = 0;
            counter.innerHTML = 1;
        });
        heartButton.addEventListener("click", function(){
            if (heartButton.classList.contains("button_active")){
                heartButton.classList.remove("button_active");
                let value = document.getElementById("heartButtonValue").innerHTML
                document.getElementById("heartButtonValue").innerHTML = Number(value)-Number(1)
            }
            else{
                heartButton.classList.add("button_active")
                let value = document.getElementById("heartButtonValue").innerHTML
                document.getElementById("heartButtonValue").innerHTML =  Number(value)+Number(1)
            }
        })
