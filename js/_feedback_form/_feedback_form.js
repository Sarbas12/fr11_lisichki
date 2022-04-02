// let feedback = document.getElementById('offer_button');
// feedback.onclick = () => {
//     document.querySelector(".feedbackForm").classList.add("feedbackForm_visible");
// };




// feedback.onclick = show('block');
document.getElementById('closeForm').onclick = () => {
    document.querySelector(".modalForm").style.display = 'none';
    document.querySelector(".filter").style.display = 'none';
};
document.getElementById('offer_button').addEventListener('click', show);

var show = function(state) {
    document.getElementById('modalForm').style.display = state;
    document.getElementById('filter').style.display = state;
};
offer_button.onclick = (state) => {document.getElementById('modalForm').style.display = state;
document.getElementById('filter').style.display = state;
};