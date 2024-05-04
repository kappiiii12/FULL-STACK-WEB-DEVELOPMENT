 function f1()
{
    var k=document.getElementByTagName("button");
    alert("form submitted")
}
function passwordlength()
{
    var a="123456789"
    if (a.length<8 || a.length>12) ;
     {
        console.log("invalid password");
     }
    if(a.length>8 || a.length<12) ;
    {
        console.log("valid password")
    }
}
passwordlength();
