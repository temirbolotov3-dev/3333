/*let animals=['dog','cat','caw','horse']
animals.unshift('snake')
console.log(animals);*/

/*let animals=['dog','cat','caw','horse']
animals.shift()
console.log(animals);*/

/*let animals=['dog','cat','caw','horse']
animals.push('mause')
console.log(animals);*/

/*let animals=['dog','cat','caw','horse']
animals.pop()
console.log(animals);*/

let clock =()=>{
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hour<10)hour='0'+hour
    if(min<10)min='0'+min
    if(sec<10)sec='0'+sec
    let time=hour+':'+min+':'+sec

    //console.log(time)
let Element=document.getElementById('clock').innerHTML=time

setInterval(() =>{
clock()
}, 1000);
}
clock()