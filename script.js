var index = 0;
function  changeColour(){

    var colour=["red","yellow","blue","purple","green"];
    document.getElementsByTagName("body")[0].style.background = colour[index++];
    if(index > colour.length -1)
    index=0;


}