const signupValidation=(name:string,value:string,passwordValue:string)=>{
    switch(name){
        case 'name': 
            if(value.length===0){
                return "Name is required";
            }
            return "";
        case "email":
            if(value.length===0){
                return "Email is required";  
            }
            if(!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
                return "Email is invalid";
            }
            return "";
        case "password":
            if(value.length===0){
                return "Password is required";
            }
            if(value.length<8){
                return "Password must be at least 8 characters";  
            }
            if(!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)){
                return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
            }
            return "";      
        case "confirmPassword": {
            if(value.length===0){
                return "Confirm Password is required";
            }
            if(value !== passwordValue){
                return "Passwords do not match";
            }
            return "";
        }
        default:
            return "";
    }   
}

const loginValidation=(name:string,value:string)=>{
    switch(name){
        case 'name': 
            if(value.length===0){
                return "Name is required";
            }
            return "";
        case "email":
            if(value.length===0){
                return "Email is required";  
            }
            if(!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
                return "Email is invalid";
            }
            return "";
        case "password":
            if(value.length===0){
                return "Password is required";
            }
            
            return "";      
        default:
            return "";
    }  

}
export  {signupValidation,loginValidation}