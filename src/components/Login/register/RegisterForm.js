import { FormControl, TextField, Button} from "@mui/material";
import React from "react";


const generateloginFormValues = () =>{
    return{
    email:{
        value:"",
        required:true,
        error:"",
        validateInput:(email)=> email.incldues("@gmail.com") ? null:"email is not valid",
    }
 }
}
const RegisterForm = () => {
    return (
        <div>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                name="email"
                label="email"
                value={loginFormValues.email.value}
                onChange={oninputChange}
                error={!! loginFormValues.email.error}
                helperText={loginFormValues.email.error}
                margin="dense"
              />
            <TextField 
             variant="outlined"
             name="email"
             label="email"
             value={loginFormValues.email.value}
             onChange={oninputChange}
             error={!! loginFormValues.email.error}
             helperText={loginFormValues.email.error}
             margin="dense"
             />
             <burtton disabled ={isButtonDisabled} onClick={onFormSubmit}
             login
             </FormControl>
             </button>
        
        </div>
    )
}
export default RegisterForm