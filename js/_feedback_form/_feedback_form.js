let feedback = document.getElementById('offer_button');
feedback.onclick = () => {
    document.querySelector(".feedbackForm").classList.add("feedbackForm_visible");
};

document.getElementById('closeForm').onclick = () => {
    document.querySelector(".feedbackForm").classList.toggle("feedbackForm_visible");
};