console.log("hello world")
var num = prompt("Enter your marks:");

if(num<=100 && num>=90){
    console.log("A");
}
else if(num<90 && num>=80){
    console.log("B");
}
else if(num<80 && num>=70){
    console.log("C");
}
else if(num<70 && num>=60){
    console.log("D")
}
else{
    console.log("F");
}