let a= require("readline-sync");
x = a.questionFloat("Enter sied 1: ")
y = a.questionFloat("Enter side 2: ")
let teta1=a.questionFloat("Enter the degree in between : ")   
let rad= teta1 * Math.PI/180
//to find the third side lets use "cosines" rule here to fi
let z=Math.sqrt( x**2 + y**2 -2*x*y*Math.cos(rad))
let p=(x+y+z)/2
//then use the sin rule to calulate the rest angle
//teta2= Math.asin((y*Math.sin(teta1))/z)
//teta3= Math.asin((x*Math.sin(teta2))/y)
//teta1= Math.asin(rad)

if(teta1<180 && teta1!=0 &&x,y,z>0 && teta1!=0 &&x+y> z && x+z> y && y+z> x ){
    console.log("the value of z is ",z)
   if(teta1 <180&& teta1!=0 &&x+y> z && x+z> y && y+z> x && x,y,z!=0){
    console.log("The value are correct")
    let  area= Math.sqrt(p*(p-x)*(p-y)*(p-z))//here output the area of the triangle
    
    let radius=  2*area/(x+y+z)//calculate the rdiu of the inscribed circle
 console.log("the radius is:" ,radius )  //here calclate the raius
    console.log("area of the circle ",0.5*Math.PI*radius**2)  //calculate the are of the are 
}else{
    console.log("Eror: does't exist")
}
}else{
console.log ("The Triangle does not exist")
}
