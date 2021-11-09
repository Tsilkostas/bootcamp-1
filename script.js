function calculator(a,b,sym)
{
switch (sym)
{
case "+":
return a+b;
break;
case "-":
return a-b;
break;
case "*":
return a*b;
break;
case "/":
if (b!=0)
{
return a/b;
}
else
{
return "I cannot perform the division by zero";
}
break;
default:
return "wrong operation!";
break;
}
}
var num1=+prompt("Give me number 1");
while(parseInt(num1)!=num1)//validation for integer
  {
    alert("Not an integer");
    num1=+prompt("Give me number 1");
  }
var symbol=prompt ("Give me the operation");
var num2=+prompt("Give me number 2");
result= calculator(num1,num2,symbol);
console.log(result);

