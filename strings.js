var $ = function (id) {
    return document.getElementById(id);
}
var demo = function()
{
    var display = "\tA subject i enjoy is music. it\'s a gateway into different cultures through expression." + "i enjoy all types of music with everything that comes with them. it\'s hard to believe where humanity would be without it" + " music has done so much to impact society in such posoitive ways its hard to understand when somone does\'nt like  it.\\" + "\n\"one good thing about music, when it hits you, you feel no pain\" \n\t\t\t-Bob Marley";



    $("display").value = display;

}

window.onload = function()
{
    $("demo").onclick = demo;
}