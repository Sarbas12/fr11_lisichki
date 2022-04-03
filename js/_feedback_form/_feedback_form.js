//show modal Form
let show = function(state) {
    document.getElementById('modalForm').style.display = state;
    document.getElementById('filter').style.display = state;
};


document.getElementById('closeForm').onclick = () => {
    document.querySelector("#modalForm").style.display = 'none';
    document.querySelector("#filter").style.display = 'none';
    document.getElementById('userName').value='';
    document.getElementById('userTel').value='';
    document.getElementById('userEmail').value='';
};

// let errorCount=false;
// const inputPhone=document.getElementById('userTel');
// const prefixNumber=(str) => {
//     if (str==="7") {
//         return "7 (";
//     }
//     if (str ==="8") {
//         return "8 (";
//     }
//     if (str==="9") {
//         return "7 (9";
//     }
//     return "7 (";
// };

// inputPhone.addEventListener('input', (e) => {
//     const value=inputPhone.value.replace(/\D+/g, "");
//     const numberLength = 11;

//     let result;
//     if (inputPhone.value.includes('+8') || inputPhone.value[0]==='8') {
//         result="";
//     } else {
//         result="+";
//     }
//     for (let i=0; i<value.length && i<numberLength; i++) {
//         switch (i) {
//             case 0:
//                 result+=prefixNumber(value[i]);
//                 continue;
//             case 4:
//                 result+=") ";
//                 break;
//             case 7:
//                 result+="-";
//                 break;
//             case 9:
//                 result+="-";
//                 break; 
//             default:
//                 break;   
//         }
//         result+=value[i];
//     }
//     inputPhone.value=result;
// });

// validate= () => {
//     let mailFormat=/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//     let phoneFormat=/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;

//     let a= document.forms['feedbackForm']['userName'].value;
//     if (a=="") {
//         document.getElementById('errName').textContent = "Заполните ваше имя";
//         document.getElementById('userName').classList.add('borderErr');
//         document.getElementById('userName').classList.remove('nameInput');
//         errorCount=true;
//     } else {
//         document.getElementById('errName').textContent = "";
//         document.getElementById('userName').classList.remove('borderErr');
//         document.getElementById('userName').classList.add('nameInput');
//         errorCount=false;
//     }
    
//     let b = document.forms['feedbackForm']['userTel'].value;
//     if (b =="") {
//         document.getElementById('errMobile').textContent = "Заполните номер телефона";
//         document.getElementById('userTel').classList.add('borderErr');
//         document.getElementById('userTel').classList.remove('telInput');
//         errorCount=true;
//     } else if (!document.getElementById('userTel').value.match(phoneFormat)) {
//         document.getElementById('errMobile').textContent = "Неверный формат  заполнения. Пример +7 (ххх) ххх-хх-хх";
//         document.getElementById('userTel').classList.add('borderErr');
//         document.getElementById('userTel').classList.remove('telInput');
//         document.getElementById('userTel').value="";
//         errorCount=true;
//         return false;
//     } else {
//         document.getElementById('errMobile').textContent = "";
//         document.getElementById('userTel').classList.remove('borderErr');
//         document.getElementById('userTel').classList.add('telInput');
//         errorCount=false;
//     }

//     let c = document.forms['feedbackForm']['userEmail'].value;
//     if (c =="") {
//         document.getElementById('errEmail').textContent = "Заполните ваш Email";
//         document.getElementById('userEmail').classList.add('borderErr');
//         document.getElementById('userEmail').classList.remove('telInput');
//         errorCount=true;
//     } else if (!document.getElementById('userTel').value.match(phoneFormat)) {
//         document.getElementById('errEmail').textContent = "Неверный формат  заполнения. Пример example@yandex.ru";
//         document.getElementById('userEmail').classList.add('borderErr');
//         document.getElementById('userEmail').classList.remove('emailInput');
//         document.getElementById('userEmail').value="";
//         errorCount=true;
//         return false;
//     } else {
//         document.getElementById('errEmail').textContent = "";
//         document.getElementById('userEmail').classList.remove('borderErr');
//         document.getElementById('userEmail').classList.add('emailInput');
//         errorCount=false;
//     }
// };


// document.getElementById('sendData').addEventListener('click', (event) => {
//     let resultValidate=validate();
//     if (resultValidate && !errorCount) {
//         submitForm();
//     } else {
//         document.body.scrollTop=document.documentElement.scrollTop=0;
//     }
// });

submitForm = (event) => {
    formData= new FormData(feedbackForm);
    
    for (let value of formData.values()) {
        console.log(value);
    }
    fetch ('https://httpbin.org/post', {
        method:'POST',
        body: formData,
    })
    .then(data => {
        console.log(data);
        document.getElementById('appSent').classList.remove('appSentOff');
        document.getElementById('appSent').classList.add('appSent');
        document.querySelector("#modalForm").style.display = 'none';
        document.querySelector("#filter").style.display = 'none';
    })
    .catch(error => {
        if (error) {
            console.log(error.message);
            console.log(error.name);
            document.getElementById('errorSent').classList.remove('errSentOff');
        document.getElementById('errorSent').classList.add('errSent');
        document.querySelector("#modalForm").style.display = 'none';
        document.querySelector("#filter").style.display = 'none';
        }
    });
    event.preventDefault();
}