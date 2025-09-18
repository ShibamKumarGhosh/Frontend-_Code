function data() 
{

var a=document.getElementById ("n1") .Value;
var b=document.getElementById ("n2") .Value;
var c=document.getElementById ("n3") .Value;
var d=document.getElementById ("n4") .Value;

if(a==""|| b==""|| c==""|| d=="") 
    {
alert ("All Fields are mendatory");
return false;

  }

  else if(b.length<10 || b.length>10) 
    {
alert ("Number should be of 10 Digits ! Please enter valid number");
return false;
  }

  else if(isNaN(b)) 
    {
alert ("Only Numbers are allowed! Please enter valid number");
return false;
  }

  else if(c!=d)
    {
alert ("Please enter same password");
return false;
  }
 else
 {
  true;
}
}

