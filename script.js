/* This little script changes the message at the top of the page 
 * For now there are not many possible message, but that will hopefully change */
const messages = [
  "Just Do It!",
  "QUIDQUID AGIS PRUDENTER AGAS ET RESPICE FINEM"
  ];
window.onload = function(){
  let newMessage = getRandomMessage(messages);
  let message = document.getElementById("message");
  message.innerHTML = newMessage;  	
}

const getRandomMessage = function(messageList){
  return messageList[Math.floor(Math.random() *messageList.length)];
}
