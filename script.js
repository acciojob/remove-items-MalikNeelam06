//your JS code here. If required.
let option1 = document.getElementById("colorSelect");
let form = document.getElementById("form")[0];
// let button = form["Select and Remove"];
let button = document.getElementById("btn");

button.addEventListener("click",()=>{
	option1.remove(option1.selectedIndex);
});
// var element = document.getElementById("id_dropdown");
         // element.remove(element.selectedIndex);