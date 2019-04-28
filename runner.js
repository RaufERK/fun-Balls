function moveMyDiv(param) {
    let mydivData = document.getElementById(param);
    // mydivData.innerText = param;
    mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
    let widthSize = Math.round(Math.random() * 100) + 20;
    // widthSize = 100;
    mydivData.style.width = widthSize + 'px';
    mydivData.style.height = widthSize + 'px';

    let ballMaxSize = Math.round(Math.sqrt(widthSize * widthSize * 2) * 0.85);

    let leftPos = Math.round(Math.random() * (window.innerWidth - ballMaxSize));
    let topPos = Math.round(Math.random() * (window.innerHeight - ballMaxSize));
    let angle = Math.round(Math.random() * 365);
    let xSpeed = Math.round(Math.random()) || -1;
    let ySpeed = Math.round(Math.random()) || -1;
    let rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
    mydivData.style.transform = `rotate(${angle}deg)`;

    var timerId = setInterval(function () {

        // let allDivArray = document.getElementsByTagName('div');        
        // for (let i = 0; i <= allDivArray.length; i++) {
        //     if (allDivArray[i] != undefined && param != allDivArray[i].id) {
        //         let currentDiv = allDivArray[i];

                
        //         currDivTop = currentDiv.style.top.slice(0, -2);
        //         currDivLeft = currentDiv.style.left.slice(0, -2);
        //         currDivWidth = currentDiv.style.width.slice(0, -2);
        //         // console.log(`${currentDiv.style.top}  ${currDivTop}    currDivWidth ${currDivWidth} ${currentDiv.style.width}`)

        //         let horizontalMatch = currDivTop >= topPos && currDivTop <= topPos + widthSize;
        //         let verticalMatch = currDivLeft >= leftPos && currDivLeft <= leftPos + widthSize;

        //         if (horizontalMatch) {
        //             // console.log('horizontalMatch!!!')
        //             if (xSpeed > 0 && leftPos + widthSize > currDivLeft&& leftPos+widthSize<currDivLeft+currDivWidth) {
        //                 console.log(` leftPos: ${leftPos}  ${widthSize}    ${currDivWidth}`);
        //                 xSpeed = xSpeed * -1;
        //                 // leftPos += xSpeed;
        //             }
        //             if (xSpeed < 0 && leftPos < currDivLeft + currDivWidth&&leftPos>currDivLeft) {
        //                 console.log(`  ${leftPos}  ${currDivLeft}    ${currDivWidth}`);
        //                 xSpeed = xSpeed * -1;
        //                 // leftPos += xSpeed;
        //             }
        //         }
        //         if (verticalMatch){              
                
                
        //         }
        //     }
        // }


        const maxLeft = window.innerWidth - ballMaxSize;
        const maxTop = window.innerHeight - ballMaxSize;




        if (leftPos >= maxLeft) {
            xSpeed = -1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        if (leftPos <= 0) {
            xSpeed = 1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        if (topPos >= maxTop) {
            ySpeed = -1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        if (topPos <= 0) {
            ySpeed = 1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        leftPos += xSpeed; //x
        topPos += ySpeed;  //y
        angle += rSpeed // rotation

        mydivData.style.left = leftPos + 'px';
        mydivData.style.top = topPos + 'px';
        mydivData.style.transform = `rotate(${angle}deg)`;

    }, 10);
}

function createDivs() {
    let parentElem = document.body;
    let numberOfDiv = Math.round(Math.random() * 50);
    // numberOfDiv = 1;
    for (let i = 0; i <= numberOfDiv; i++) {
        let mydivData = document.createElement('div');
        mydivData.className = "box";
        parentElem.appendChild(mydivData);
        mydivData.id = i
        moveMyDiv(i)
    }
}
