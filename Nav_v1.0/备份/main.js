
console.log(`%cYoung's Navigation`,style="text-align:center;font-size:3rem;color:firebrick;");
// let div_time = document.getElementById("time");
// let time = new Date();
// function getTime(date, format = "YYYY-MM-DD HH:mm:ss") {
//     const config = {
//         YYYY: date.getFullYear(),
//         MM: date.getMonth() + 1,
//         DD: date.getDay(),
//         HH: date.getHours(),
//         mm: date.getMinutes(),
//         ss: date.getSeconds()
//     }
//     for (const key in config) {
//         format = format.replace(key, config[key]);
//     }
//     return format;
// }
// function interface_time(obj,time) {
//     obj.innerHTML =  getTime(time);
// }
// setInterval(function() {
//     interface_time(div_time,time)
// }, 1000);

let matte = document.getElementById("matte");
matte.onclick = function () {
    this.classList.toggle("bg_change")
}
console.log(matte);


// let inputs = document.getElementsByTagName("input");
// [...inputs].map(item=>{
//     item.addEventListener('blur',function(){
//         item.style.transition = ".3" + 's'
//         item.style.transitionTimingFunction = 'cubic-bezier(.64,.13,.53,.87)'
//         // this.style.backgroundColor = 'red'
//         this.style.backgroundImage
//     })
// })

let button = document.querySelector('#await_function');
let main = document.getElementsByTagName("main")[0];
console.log(main);
button.addEventListener('click', function () {
    // main.classList.value = 'n_on' ? '_on' : 'p_on'
    switch (main.classList.value) {
        case ("p_on"):
            main.classList.remove("p_on");
            main.classList.add("n_on");
            button.style.backgroundImage = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
            break;
        case ("n_on"):
            main.classList.remove("n_on");
            main.classList.add("p_on");
            button.style.backgroundImage = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    }
    console.log(main.classList.value);
    // console.log(this.classList);
})

document.onkeydown = function (e) {
    console.log(e.key);
    let status = 0;
    if (e.key = 'Escape' && status == 0) {
        status = 1;
        console.log(e.key);
    }
    switch (status) {
        case 0:
            document.querySelector(".search>input").blur();
            break;
        case 1:
            document.querySelector(".search>input").focus();
            status = 0;
            break;
    }

    // switch (e.key) {
    //     case 'f':
    //         document.querySelector(".search>input").focus();
    //         document.querySelector(".search>input").value = ''
    //         break;
    //     case 'Escape':
    //         document.querySelector(".search>input").blur();
    //     default:

    //         break;
    // }
}

let aside_lines = document.getElementsByClassName("aside_line");
for (const v of aside_lines) {
    v.onclick = () => window.location.href = v.childNodes[3].href;
}