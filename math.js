// function FunctionArray(count)
// {
//     var arr = [];
//     for (var i = 0; i < count; i++) {
//         // let myMunber=i;
//         arr[i] = function() { console.log(i) };
//     }
//     return arr;
// }

// var i=100;
// var arr = FunctionArray(i);

// //Проверка
// arr[50]();

var data=[
    {type:"Человек",name:"Вася",city:"Москва"},
    {type:"Человек",name:"Петя",city:"Казань"},
    {type:"Человек",name:"Коля",city:"Рязань"},
 ]
 var peoples=Array();
 var man=function(type){
    this.type=type;
 };
 
 man.prototype={
    type:"",
    params:{
        name:"имя",
        city:"город",
        age:0
    }
 }
 for(i in data){
    var current=data[i];
    var obj=new man(current);
    obj.params.name=current.name;
    obj.params.city=current.city;
    console.log(current,obj)
    peoples.push(obj);
 }