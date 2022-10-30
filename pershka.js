// let img1=document.getElementById("img1").value;
// // let img2=document.getElementById("img2");
// // let img3=document.getElementById("img3");
// let ssdiv1=document.getElementsByClassName("ssdiv1")
// console.log("h1")
// img1.addEventListener('click' , () =>{
//     console.log("h2")
//     ssdiv1.classList.toggle('active')
// });


var img11 = document.querySelector(".img11");
var ssdiv11 = document.querySelector(".ssdiv11");

img11.addEventListener("mouseover",()=>{
    ssdiv11.style.top=-10+"px";

})
img11.addEventListener("mouseout",()=>{
    ssdiv11.style.top=70+"px";
})


var img2 = document.querySelector(".img2");
var ssdiv2 = document.querySelector(".ssdiv2");

img2.addEventListener("mouseover",()=>{
    ssdiv2.style.top=-10+"px";
})
img2.addEventListener("mouseout",()=>{
    ssdiv2.style.top=70+"px";
})


var img3 = document.querySelector(".img3");
var ssdiv3 = document.querySelector(".ssdiv3");
img3.addEventListener("mouseover",()=>{
    ssdiv3.style.top=-10+"px"
  
})
img3.addEventListener("mouseout",()=>{
    ssdiv3.style.top=70+"px";

})


// js de recherche


let im = document.querySelector("#im");
let inp = document.querySelector("#inp");
 function fn1(event){
    console.log('he')
 }
// inp.addEventListener('keypress' , (event)=>{
//         console.log('he')
// })

inp.addEventListener('keypress' , (event)=>{
    console.log(inp.value)
    if(inp.value ==  "sec1"){
        var elem = document.querySelector(".sec1");
                elem.scrollIntoView();
    }else if(inp.value ==  "sec2"){
        var elem = document.querySelector(".sec2");
                elem.scrollIntoView();
    }else if(inp.value ==  "featured-product"){
        var elem = document.querySelector(".featured-product");
                elem.scrollIntoView();
    }else if(inp.value ==  "footer"){
        var elem = document.querySelector("footer");
                elem.scrollIntoView();
    }
})











let toggle=false;
im.addEventListener('click' , ()=>{
    toggle=!toggle;
    if(toggle){
     inp.style.top=110+"px"
    }
    else {
        inp.style.top=-60+"px"
    }

    
});







