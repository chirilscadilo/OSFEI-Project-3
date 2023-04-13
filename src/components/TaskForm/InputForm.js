import React, {useContext} from "react";
import {StyledInputForm} from '../../styles/InputForm.styled'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import CartContext from "../../state/cart-Context";
import { useState } from "react";

const InputForm = (props)=>{
    const context = useContext(CartContext);
    const [toDoInput, setToDoInput] = useState('');
    
    const sumbitHandler = (event)=>{
        event.preventDefault();
        //const enteredValue = toDoInput.current.value;

        if(toDoInput.trim().length > 0){
            context.addingNewTodo({id: Math.random().toString() ,text:toDoInput, done:false});
        }
        setToDoInput('');
    };

    return(
        <StyledInputForm> 
            <div>
                <form onSubmit={sumbitHandler} noValidate autoComplete="off">
                    <TextField
                    value={toDoInput}
                    onChange={(e)=>setToDoInput(e.target.value)}
                    label="Create Todo"
                    variant="outlined" 
                    color="secondary"
                    fullWidth
                    required
                    />
                    
                    <Button disabled={!toDoInput} type="submit" variant="contained">Add</Button>
                </form>
            </div>
        </StyledInputForm>
    )
}

export default InputForm