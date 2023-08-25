//your JS code here. If required.
let option1 = document.getElementById("colorSelect");
let form = document.getElementsByTagName("form")[0];
let button = form["Select and Remove"];
button.addEventListener("click",()=>{
	option1.remove();
});