$(function() {
  console.log("Doing Bindings");
  $("#load").click(sendAjax);
});
function sendAjax() {
  console.log("sending ajax Request");
  //send request here
  $.get(http://localhost/students.txt, handleResponse);
  console.log("Request sent");
}
function handleResponse(response) {
  console.log("response received");
  $("#result").empty();
  $("#result").append(response);
}
console.log("Code Finished");