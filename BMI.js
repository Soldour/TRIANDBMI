let a= require("readline-sync");
let height,waight
 height=a.questionFloat(" Enter your hight in m")
 waight=a.questionFloat("Enter your waight: ")

if(height<3 && height>0.2){
      let BMI=waight/height**2
    console.log("Your BMI is:",BMI)
    if(waight<18){
        console.log("you are thin")

    }else if(waight<24){
        console.log("you waight is noraml")

    }else{
        console.log("you are fat")
    }
    }else{
        console.log("Eror: Inalid Input ")
    }
