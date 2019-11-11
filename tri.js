let a= require("readline-sync");
x = a.questionFloat("Enter sied 1: ")
y = a.questionFloat("Enter side 2: ")
z = a.questionFloat("Enter side 3: ")
let p=(x+y+z)/2
if(x+y>z && x+z>y && y+z>x && x,y,z>0){
    console.log("valid Triangle \n"  )
}
else{
    console.log("Eror: Triangle does not exits:")
}
if(x+y>z && x+z>y && y+z>x){
    console.log("The Area is : " , Math.sqrt(p*(p-x)*(p-y)*(p-z)))
}
else{
    console.log("Eror: invalid Triangle:")
}
