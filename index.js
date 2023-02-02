let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b", "#03fc30", "#6e736f", "#e0a226", "#6ec3f5"];
function change(){
    let sachin = bgColorsArray.length;
    let manu = Math.floor(Math.random()*sachin);
    document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[manu];
}