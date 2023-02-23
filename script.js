var loopButtons = document.getElementsByTagName("button"); //creating button array with left pad buttons
var tutorialFlag = 0;

function clearTable() {
    /* clear pad */

    for(var i = 0; i < loopButtons.length; i++) {
        loopButtons[i].style.backgroundColor = "darkgray";
    }
}

window.onload = function() {
    /* We use this function while the window is loading so that the pad buttons work well. */

    clearTable();
}

function buttonClick(element) {
    /* The background color of the button changes. Also, We edit the "p" for tutorial. */

    if(element.style.backgroundColor == "darkgray") {
        element.style.backgroundColor = "forestgreen";

        if(tutorialFlag == 0) {
            var info_p = document.getElementById("info-p");
            info_p.innerHTML = 'Now click "Play" button.';
            tutorialFlag = 1;
        }
    } else{
        element.style.backgroundColor = "darkgray";
    }
}

function delay(time) {
    /* Delay function, like sleep() function in C# */

    return new Promise(resolve => setTimeout(resolve, time));
}

var playButtonFlag = 0; //Check flag for "Play / Pause" button

async function tablePlay(element) {
    /* If flag equals 0, melody is paused; Equals 1, melody is playing. Also, We edit the "p" for tutorial. */

    console.log(loopButtons);

    var info_p = document.getElementById("info-p");
    info_p.innerHTML = 'Easy as that. If you want to pause the melody, you can click "Pause" button. Also, if you want clear the pad, you can click "Clear" button. Have fun !';

    if(playButtonFlag == 0) {
        playButtonFlag = 1;
        element.innerText = "Pause"
    } else {
        playButtonFlag = 0;
        element.innerText = "Play"
    }

    while(playButtonFlag == 1) {
        for(var i = 0; i < 7; i++) {
            if(playButtonFlag == 0) {
                break;
            }
            for(var j = 0; j < 7; j++) {
                var buttonIndex = j * 7 + i;
                if(loopButtons[buttonIndex].style.backgroundColor == "forestgreen") {
                    var noteIndex = Math.floor(buttonIndex / 7);
                    console.log("note index: " + noteIndex);
    
                    switch(noteIndex) {
                        case 0:
                            var noteDo = new Audio("notes/1do.wav");
                            noteDo.play();
                            break;
                        
                        case 1:
                            var noteRe = new Audio("notes/2re.wav");
                            noteRe.play();
                            break;
    
                        case 2:
                            var noteMi = new Audio("notes/3mi.wav");
                            noteMi.play();
                            break;
    
                        case 3:
                            var noteFa = new Audio("notes/4fa.wav");
                            noteFa.play();
                            break;
    
                        case 4:
                            var noteSol = new Audio("notes/5sol.wav");
                            noteSol.play();
                            break;
    
                        case 5:
                            var noteLa = new Audio("notes/6la.wav");
                            noteLa.play();
                            break;
    
                        case 6:
                            var noteSi = new Audio("notes/7si.wav");
                            noteSi.play();
                            break;
                    }
                }
            }
            await delay(300);
        }
    }
}