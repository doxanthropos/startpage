const messages = ["Just Do It!","QUIDQUID AGIS PRUDENTER AGAS ET RESPICE FINEM"];
window.onload = function(){
let newMessage = getRandomMessage(messages);
let message = document.getElementById("message");
message.innerHTML = newMessage;  	
}

const getRandomMessage = function(messageList){
  return messageList[Math.floor(Math.random() *messageList.length)];
}
