var xchose = document.getElementById("xChose");
var ochose = document.getElementById("oChose");
var para = document.getElementById("para");
var userChose = 0;
xchose.onclick = function(){
    userChose = 1;
    para.innerHTML = "X turn"
}

ochose.onclick = function(){
    userChose = -1;
    para.innerHTML = "O turn"
}


if(userChose === "X"){
    userChose = 1;
    para.innerHTML = "X turn";
}
// else if(userChose === "O") {
//     para.innerHTML = "O turn";
// }