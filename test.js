class Counter {
    count = 1;

    inc = () => {
        this.count++;
        console.log(this.count);
    }

    static incStep = 2;
    static incrementAll = function (arr){
        arr.forEach((c)=>c.inc());
    }
}


const cnt = new Counter();
// const cnt = new Counter();
Counter.incrementAll([1,2])
console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc,1000);