var rock = document.getElementById("rock");
var paper= document.getElementById("paper");
var scissor= document.getElementById("scissor");
var finish_btn = document.getElementById("finish_btn");
var chooseShow = document.getElementsByClassName("choose_show");
var chooseShowUser = document.getElementById("choose_show_user");
var chooseShowComputer = document.getElementById("choose_show_computer");
var user;
var comNum;
var usertool;
var computertool;

rock.onclick = function(){
    // chooseShow.style.backgroundColor="yellow";
    user=1;
    if(user ==1){
        alert("it is " + user);
``  }
    computer();
    changeUserChoose(user);
    changeComputerChoose(comNum);
    compare(user, comNum);
}
paper.onclick = function(){
    user=2;
    if(user ==2){
        alert("it is 2");
``  }
    computer();
    changeUserChoose(user);
    changeComputerChoose(comNum);
    compare(user, comNum);
}
scissor.onclick = function(){
    user=3;
    if(user ==3){
        alert("it is 3");
``  }
    computer();
    changeUserChoose(user);
    changeComputerChoose(comNum);
    compare(user, comNum);
}
// choose for computer a number
function computer(){
    comNum = Math.ceil(Math.random()*3);
    return comNum;
}

function changeUserChoose(user){
    switch(user){
		case 1:
			usertool = "Rock";
			break;
		case 2:
			usertool = "Paper";
			break;
		case 3:
			usertool = "Scissor";
			break;
	}
	return usertool;
}
function changeComputerChoose(computer){
    switch(computer){
		case 1:
			computertool = "Rock";
			break;
		case 2:
			computertool = "Paper";
			break;
		case 3:
			computertool = "Scissor";
			break;
	}
	return computertool;
}

// function display(user, comNum){
//     chooseShow.style.display = "block";
//     chooseShow.style.backgroundColor="yellow";
//     switch (user) {
//         case 1:
//             chooseShowUser.src = "https://www.thoughtco.com/thmb/QK4xBnky7yIInPoKDEL0axg1XAc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg";
//             break;
//         case 2:
//           chooseShowUser.src = "https://bpimediagroup.com/wp-content/uploads/2018/04/61qSdyDYbZL._SL1185_.jpg";
//           break;
//         case 3:
//           chooseShowUser.src = "https://www.pngkit.com/png/detail/42-426676_royalty-free-stock-collection-of-free-cessor-salon.png";
//           break;   
//     }
//     switch (comNum) {
//         case 1:
//             chooseShowComputer.src = "https://www.thoughtco.com/thmb/QK4xBnky7yIInPoKDEL0axg1XAc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg";
//             break;
//         case 2:
//           chooseShowComputer.src = "https://bpimediagroup.com/wp-content/uploads/2018/04/61qSdyDYbZL._SL1185_.jpg";
//           break;
//         case 3:
//           chooseShowComputer.src = "https://www.pngkit.com/png/detail/42-426676_royalty-free-stock-collection-of-free-cessor-salon.png";
//           break;   
//     }
// }
function compare(user, comNum){
    if(user == 2 && comNum == 3 || user == 3 && comNum == 1 ||
    user == 1 && comNum == 2){
        alert("you picked " + usertool + ". computer picked " + computertool 
					+ ". \n Computer win. \n you: ");
    }
    else if(user == 2 && comNum == 1 || user == 1 && comNum == 3 
    || user == 3 && comNum == 2){
        alert("you picked " + usertool + ". computer picked " + computertool 
					+ ". \n You win. \n you: ");
    }
    else{
        alert("draw" + comNum);
    }
}



