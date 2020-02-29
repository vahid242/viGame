var xchose = document.getElementById("xChose");
var ochose = document.getElementById("oChose");
var para = document.getElementById("para");
var block0 = document.getElementById("block_0");
var block1 = document.getElementById("block_1");
var block2 = document.getElementById("block_2");
var block3 = document.getElementById("block_3");
var block4 = document.getElementById("block_4");
var block5 = document.getElementById("block_5");
var block6 = document.getElementById("block_6");
var block7 = document.getElementById("block_7");
var block8 = document.getElementById("block_8");
var block=[block0, block1, block2, block3, block4, 
block5, block6, block7, block8];
var userChose = 1;
var player="X";
var computer = "O";
choose();
initializeBoard();





function choose(){
    xchose.onclick = function(){
        userChose = 1;
        para.innerHTML = "X turn";
        this.disabled= true;
        ochose.disabled =true;
        xchose.classList.add("select");
        
     }
    
    ochose.onclick = function(){
        userChose = -1;
        para.innerHTML = "O turn"
        this.disabled= true;
        xchose.disabled =true;
        ochose.classList.add("select");
    }
}

function initializeBoard(){
    for(var i=0; i < 9; i++){
        console.log(userChose);
         block[i].onclick = function(){
            block[i].innerHTML = player;
            userChose = -1;
        }
    }
    
    // if(userChose ===1){
    //     console.log(userChose);
        // block0.onclick = function(){
        //     block0.innerHTML = player;
        //     userChose = -1;
        // }
        // block1.onclick = function(){
        //     block1.innerHTML = player;
        // }
        // block2.onclick = function(){
        //     block2.innerHTML = player;
        // }
        // block3.onclick = function(){
        //     block3.innerHTML = player;
        // }
        // block4.onclick = function(){
        //     block4.innerHTML = player;
        // }
        // block5.onclick = function(){
        //     block5.innerHTML = player;
        // }
        // block6.onclick = function(){
        //     block6.innerHTML = player;
        // }
        // block7.onclick = function(){
        //     block7.innerHTML = player;
        // }
        // block8.onclick = function(){
        //     block8.innerHTML = player;
        // }
    // }
    // else if(userChose === -1){
    //     block0.onclick = function(){
    //         block0.innerHTML = computer;
    //     }
    //     block1.onclick = function(){
    //         block1.innerHTML = computer;
    //     }
    //     block2.onclick = function(){
    //         block2.innerHTML = computer;
    //     }
    //     block3.onclick = function(){
    //         block3.innerHTML = computer;
    //     }
    //     block4.onclick = function(){
    //         block4.innerHTML = computer;
    //     }
    //     block5.onclick = function(){
    //         block5.innerHTML = computer;
    //     }
    //     block6.onclick = function(){
    //         block6.innerHTML = computer;
    //     }
    //     block7.onclick = function(){
    //         block7.innerHTML = computer;
    //     }
    //     block8.onclick = function(){
    //         block8.innerHTML = computer;
    //     }
    // }
}
