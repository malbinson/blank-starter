
document.getElementById("button").addEventListener("click",myFunc);
document.getElementById("button2").addEventListener("click",retrieve);
function myFunc(){
    document.getElementById("output").innerHTML = "information stored";
    let object = {firstName:"John", lastName:"Doe"};
    let objectStr = JSON.stringify(object);
  
    localStorage.setItem("myItem", objectStr);
}

function retrieve(){
    var obj = JSON.parse(localStorage.getItem("myItem"));
    document.getElementById("output").innerHTML = "information retrieved";
    console.log(obj)
}






