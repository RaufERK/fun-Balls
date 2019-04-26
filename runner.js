function myfunc(param) {
    let mydivData = document.getElementById(param);

    // mydivData.innerText = param;

    mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;

    let leftPos = Math.round(Math.random() * (window.innerWidth - 50));
    let topPos = Math.round(Math.random() * (window.innerHeight - 50));
    let xAcceleration = Math.round(Math.random()) || -1;
    let yAcceleration = Math.round(Math.random()) || -1;

    var timerId = setInterval(function () {
        const maxLeft = window.innerWidth - 50;
        const maxTop = window.innerHeight - 50;

        leftPos += xAcceleration; //x
        topPos += yAcceleration;  //y

        mydivData.style.left = leftPos + 'px';
        mydivData.style.top = topPos + 'px';

        if (leftPos >= maxLeft) {
            xAcceleration = -1;
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        }

        if (leftPos <= 0) {
            xAcceleration = 1;
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        }

        if (topPos >= maxTop) {
            yAcceleration = -1;
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        }

        if (topPos <= 0) {
            yAcceleration = 1;
            mydivData.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        }



    }, 5);
}

myfunc('box0');
myfunc('box1');
myfunc('box2');
myfunc('box3');
myfunc('box4');
myfunc('box5');
myfunc('box6');
myfunc('box7');
myfunc('box8');
myfunc('box9');
myfunc('box10');
myfunc('box11');
myfunc('box12');
myfunc('box13');
myfunc('box14');
myfunc('box15');
myfunc('box16');
myfunc('box17');
myfunc('box18');
myfunc('box19');
myfunc('box20');

