var dpc = document.getElementsByClassName("dropdown-container");
var dp1 = document.getElementsByClassName("dropdown-main-1-desc");
var dp2 = document.getElementsByClassName("dropdown-main-2-desc");
var dp3 = document.getElementsByClassName("dropdown-main-3-desc");
var dp4 = document.getElementsByClassName("dropdown-main-4-desc");
var dp5 = document.getElementsByClassName("dropdown-main-5-desc");

function catalog(){
    console.log(dp1[0].style.display);
    if(dp1[0].style.display == "inline-block" ){
        dpc[0].style.display = "none";
        dp1[0].style.display = "none";
    }
    else{
        dpc[0].style.display = "flex";
        dp1[0].style.display = "inline-block";
    }
    dp2[0].style.display = "none";
    dp3[0].style.display = "none";
    dp4[0].style.display = "none";
    dp5[0].style.display = "none";
}

function products(){
    dp1[0].style.display = "none";
    dp3[0].style.display = "none";
    dp4[0].style.display = "none";
    dp5[0].style.display = "none";
    if(dp2[0].style.display == "flex" ){
        dpc[0].style.display = "none";
        dp2[0].style.display = "none";
    }
    else{
        dpc[0].style.display = "flex";
        dp2[0].style.display = "flex";
    }
}
function careerPath(){
    dp1[0].style.display = "none";
    dp2[0].style.display = "none";
    dp4[0].style.display = "none";
    dp5[0].style.display = "none";
    if(dp3[0].style.display == "flex"){
        dpc[0].style.display = "none";
        dp3[0].style.display = "none";
    }
    else{
        dpc[0].style.display = "flex";
        dp3[0].style.display = "flex";
    }
}
function resources(){
    dp1[0].style.display = "none";
    dp2[0].style.display = "none";
    dp3[0].style.display = "none";
    dp5[0].style.display = "none";
    if(dp4[0].style.display == "flex"){
        dpc[0].style.display = "none";
        dp4[0].style.display = "none";
    }
    else{
        dpc[0].style.display = "flex";
        dp4[0].style.display = "flex";
    }
}
function business(){
    dp1[0].style.display = "none";
    dp2[0].style.display = "none";
    dp3[0].style.display = "none";
    dp4[0].style.display = "none";
    if(dp5[0].style.display == "flex"){
        dpc[0].style.display = "none";
        dp5[0].style.display = "none";
    }
    else{
        dpc[0].style.display = "flex";
        dp5[0].style.display = "flex";
    }
}