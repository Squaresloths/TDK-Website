/*console.log(`Hello`);
console.log(`I like pizza`);

window.alert(`this is an alert`);
window.alert(`I like pizza`);*/

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myP").textContent = `Hello ${username}!`
    console.log(username);
};
