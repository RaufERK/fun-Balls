function moveMyDiv(param) {
    let mydivData = document.getElementById(param);

    mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
    let widthSize = Math.round(Math.random() * 100) + 40;

    mydivData.style.width = widthSize + 'px';
    mydivData.style.height = widthSize + 'px';

    let ballMaxSize = Math.round(Math.sqrt(widthSize * widthSize * 2)*0.85);

    const maxLeft = window.innerWidth;
    const maxTop = window.innerHeight;

    let centralDivData = document.getElementById('main');
    centralDivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;

    let centalBoxSizePrc = 0.15;
    let cBoxWidth = Math.round(maxLeft * centalBoxSizePrc);
    let cBoxHeight = Math.round(maxTop * centalBoxSizePrc);
    let cBoxLeft = Math.round((maxLeft - cBoxWidth) / 2);
    let cBoxTop = Math.round((maxTop - cBoxHeight) / 2);
    let cBoxRight = cBoxLeft + cBoxWidth;
    let cBoxBottom = cBoxTop + cBoxHeight;

    centralDivData.style.left = cBoxLeft + 'px';
    centralDivData.style.top = cBoxTop + 'px';
    centralDivData.style.width = cBoxWidth + 'px';
    centralDivData.style.height = cBoxHeight + 'px';

    let leftPos = Math.round(Math.random() * (window.innerWidth - ballMaxSize));
    let topPos = Math.round(Math.random() * (window.innerHeight - ballMaxSize));
    let angle = Math.round(Math.random() * 365);
    let xSpeed = Math.round(Math.random()) || -1;
    let ySpeed = Math.round(Math.random()) || -1;
    let rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
    mydivData.style.transform = `rotate(${angle}deg)`;

    var timerId = setInterval(function () {

        let rightPos = leftPos + ballMaxSize;
        let bottomPos = topPos + ballMaxSize;

        if (rightPos >= maxLeft) {
            xSpeed = -1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        if (leftPos <= 0) {
            xSpeed = 1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        if (bottomPos >= maxTop) {
            ySpeed = -1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        if (topPos <= 0) {
            ySpeed = 1 * Math.round(Math.random() * 10);
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            rSpeed = (Math.round(Math.random()) || -1) * Math.round(Math.random() * 5);
        }

        let horizontalMatch = rightPos >= cBoxLeft && leftPos <= cBoxRight;
        let verticalMatch = bottomPos >= cBoxTop && topPos <= cBoxBottom;

        if (xSpeed > 0 && rightPos >= cBoxLeft && leftPos < cBoxLeft && verticalMatch) {
            xSpeed = -1 * xSpeed;
            centralDivData.style.backgroundColor = `rgb(${0},${Math.random() * 256},${0})`;
        }
        if (xSpeed < 0 && leftPos <= cBoxRight && rightPos > cBoxRight && verticalMatch) {
            xSpeed = -1 * xSpeed;
            centralDivData.style.backgroundColor = `rgb(${0},${Math.random() * 256},${0})`;
        }

        if (ySpeed > 0 && bottomPos >= cBoxTop && topPos<cBoxTop && horizontalMatch) {
            ySpeed = -1 * ySpeed;
            centralDivData.style.backgroundColor = `rgb(${0},${Math.random() * 256},${0})`;
        }

        if (ySpeed < 0 && topPos <= cBoxBottom && bottomPos>cBoxBottom && horizontalMatch) {
            ySpeed = -1 * ySpeed;
            centralDivData.style.backgroundColor = `rgb(${0},${Math.random() * 256},${0})`;
        }

        leftPos += xSpeed; //x
        topPos += ySpeed;  //y
        angle += rSpeed // rotation

        mydivData.style.left = leftPos + 'px';
        mydivData.style.top = topPos + 'px';
        mydivData.style.transform = `rotate(${angle}deg)`;

    }, 45);
}

function createDivs() {
    let parentElem = document.body;
    let numberOfDiv = Math.round(Math.random() * 50);
    numberOfDiv = 40;
    for (let i = 0; i <= numberOfDiv; i++) {
        let mydivData = document.createElement('div');
        mydivData.className = "box";
        parentElem.appendChild(mydivData);
        mydivData.id = i
        moveMyDiv(i)
    }
}