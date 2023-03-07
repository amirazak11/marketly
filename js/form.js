const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const phoneInput = document.querySelector(".phone-input");
const messageInput = document.querySelector(".message-input");
const topicInput = document.querySelector(".topic-input");
const sendBtn = document.querySelector(".send-btn");
let modalBody = document.querySelector(".modal-body");
const sendMessageToEmail = () => {
  if(
     nameInput.value.trim().length === 0 ||
    emailInput.value.trim().length === 0 ||
    phoneInput.value.trim().length === 0 ||
    messageInput.value.trim().length === 0 ||
    topicInput.value.trim().length === 0 
  ) {
   modalBody.innerHTML= `
   <p>You must enter your complete information</p>
  <p>يجب ادخال بياناتك كاملة</p>`
  }
else{
  modalBody.innerHTML= `
  <p> Thank you so much for taking the time to fill out our questionnaire. We’re always looking to improve the quality of our offerings, and we’re happy that you’re a part of that.</p>
  <p>شكرًا جزيلاً لك على الوقت الذي قضيته في ملء استبياننا. نتطلع دائمًا إلى تحسين جودة عروضنا ، ويسعدنا أن تكون جزءًا من ذلك.</p>
  `
}
  const formData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value,
      topic: topicInput.value
  }

  fetch('https://formsubmit.co/ajax/amirazak1032000@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  }).then(() => {
      nameInput.value = ""
      emailInput.value = ""
      phoneInput.value = ""
      messageInput.value = ""
      topicInput.value = ""
  }).catch(() => {
    modalBody.innerHTML= `
    <p>Error, please try again </p>
   <p>خطا,من فضلك قم باعادة المحاولة</p>`
  })
}
sendBtn.addEventListener("click", sendMessageToEmail)