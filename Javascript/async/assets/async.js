

var messageRevived = false;

setTimeout(() => {
  console.log("Message sent");
  messageRevived = true;
}, 2000);

function waitForMessage() {
  console.log("Waiting for message...");
  if(messageRevived){
    handleMessage();
  }
  else {
    setTimeout(() => {
      waitForMessage();
    }, 500);
  }
}

function handleMessage() {
  console.log("Message received");
}

waitForMessage();