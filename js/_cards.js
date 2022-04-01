const cardsBus = `[{
    "pictureSrc":"images/asset_1.jpg",
    "pictureAlt":"Абхазия",
    "peopleAmount":"4",
    "place":"Абхазия",
    "type":"Автобусный тур",
    "name":"Золотое кольцо Абхазии (из Адлера)",
    "adultPrice":"1 618₽",
    "childPrice":"1 412₽",
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
    "adultPrice":"1 548₽",
    "childPrice":"1 255₽",
    "duration":"1,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"8"
},
{
    "pictureSrc":"images/asset_3.jpg",
    "pictureAlt":"Красная поляна",
    "peopleAmount":"8",
    "place":"Красная поляна",
    "type":"Автобусный тур",
    "name":"Красная поляна",
    "adultPrice":"1 988₽",
    "childPrice":"1 678₽",
    "duration":"6 часов",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"2"
}
]`

const cardsJeep = `[{
    "pictureSrc":"images/asset_9.jpg",
    "pictureAlt":"джипинг красная поляна",
    "peopleAmount":"11",
    "place":"Красная поляна",
    "type":"Джипинг",
    "name":"Джипинг на Красной Поляне",
    "adultPrice":"3 954₽",
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
    "adultPrice":"3 590₽",
    "childPrice":"3 143₽",
    "duration":"1,5 часа",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "likes":"6"
},
{
    "pictureSrc":"images/asset_11.jpg",
    "pictureAlt":"джипинг адлер",
    "peopleAmount":"10",
    "place":"Адлер",
    "type":"Джипинг",
    "name":"Джипинг в Адлере",
    "adultPrice":"2 756₽",
    "childPrice":"2 333₽",
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
    "adultPrice":"4 674₽",
    "childPrice":"4 377₽",
    "duration":"6 часов",
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
    "adultPrice":"5 633₽",
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
    "adultPrice":"6 588₽",
    "childPrice":"5 440₽",
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
const counter = document.getElementById("counterNumber");
let currentSelection = parsedCardsBus;
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
    tourCard.tourImage.src = currentSelection[0].pictureSrc,
    tourCard.tourType.innerHTML = currentSelection[0].type,
    tourCard.tourName.innerHTML = currentSelection[0].name,
    tourCard.adultPrice.innerHTML = currentSelection[0].adultPrice,
    tourCard.childPrice.innerHTML = currentSelection[0].childPrice,
    tourCard.tourDuration.innerHTML = currentSelection[0].duration,
    tourCard.tourDescription.innerHTML = currentSelection[0].description,
    tourCard.amountLikes.innerHTML = currentSelection[0].likes
}



const nextTour = (currentSelection) => {
    
    if(position<currentSelection.length-1){
        position++;
        tourCard.tourImage.src = currentSelection[position].pictureSrc;
        tourCard.tourType.innerHTML = currentSelection[position].type;
        tourCard.tourName.innerHTML = currentSelection[position].name;
        tourCard.adultPrice.innerHTML = currentSelection[position].adultPrice;
        tourCard.childPrice.innerHTML = currentSelection[position].childPrice;
        tourCard.tourDuration.innerHTML = currentSelection[position].duration;
        tourCard.tourDescription.innerHTML = currentSelection[position].description;
        tourCard.amountLikes.innerHTML = currentSelection[position].likes;
        counter.innerHTML = Number(counter.innerHTML)+1;
        heartButton.classList.remove("button_active")
        
    }
    
}

const previousTour = () => {
    if(position>0){
        tourCard.tourImage.src = currentSelection[position-1].pictureSrc;
        tourCard.tourType.innerHTML = currentSelection[position-1].type;
        tourCard.tourName.innerHTML = currentSelection[position-1].name;
        tourCard.adultPrice.innerHTML = currentSelection[position-1].adultPrice;
        tourCard.childPrice.innerHTML = currentSelection[position-1].childPrice;
        tourCard.tourDuration.innerHTML = currentSelection[position-1].duration;
        tourCard.tourDescription.innerHTML = currentSelection[position-1].description;
        tourCard.amountLikes.innerHTML = currentSelection[position-1].likes;
        counter.innerHTML = counter.innerHTML-1;
        position--;
        heartButton.classList.remove("button_active")
        
    }
    
}

const switchPage = () =>{
    nextButton.addEventListener("click", function(){
        nextTour(currentSelection)
    });
    previousButton.addEventListener("click", function(){
        previousTour()
    })
}

window.addEventListener("DOMContentLoaded", function(){
    initializeTour(currentSelection)
})



switchPage()

    jeepTourSection.addEventListener("click", function(){
        currentSelection = parsedJeep;
        initializeTour(currentSelection)
        nextTour(currentSelection)
        previousTour(currentSelection)
        position = 0;
        counter.innerHTML = 1;
        heartButton.classList.remove("button_active")
    })
    busTourSection.addEventListener("click", function(){
        currentSelection = parsedCardsBus;
        initializeTour(currentSelection)
        nextTour(currentSelection)
        previousTour(currentSelection);
        position = 0;
        counter.innerHTML=1;
        heartButton.classList.remove("button_active")
    });
    yachtTourSection.addEventListener("click", function(){
            currentSelection = parsedYacht;
            initializeTour(currentSelection)
            nextTour(currentSelection)
            previousTour(currentSelection);
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
