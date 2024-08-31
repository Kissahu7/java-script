function generateopt(){
let length=document.getElementById("otp_length").value;
let labelContainer=document.getElementById("generatedOTP");
let otp='';
    if (length > 0 && length <=8 ){
        for(let i = 0 ; i<length; i++){
            otp+=Math.floor(Math.random() * 10).toString();
        }
        console.log(otp);
        labelContainer.innerHTML= otp;
        return otp;
    }else{
        alert("Enter length betwwen 1-8 to generate OTP.");
        return false;
    }
}
//console.log(generateopt(6));
//var len =docuemnt.getElementById('lenth_no');