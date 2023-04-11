import React, {useRef, useContext} from "react";
import {StyledInputForm} from '../../styles/InputForm.styled'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import CartContext from "../../state/cart-Context";

const InputForm = (props)=>{
    const context = useContext(CartContext);
    const toDoInput = useRef();

    const sumbitHandler = (event)=>{
        event.preventDefault();
        const enteredValue = toDoInput.current.value;

        if(enteredValue.trim().length > 0){
            context.addingNewTodo({id: Math.random().toString() ,text:enteredValue, done:false});
        }
        toDoInput.current.value = '';
    };

    return(
        <StyledInputForm> 
            <div>
                <form onSubmit={sumbitHandler} noValidate autoComplete="off">
                    <TextField 
                    inputRef={toDoInput}
                    label="Create Todo"
                    variant="outlined" 
                    color="secondary"
                    fullWidth
                    required
                    />
                    
                    <Button type="submit" variant="contained">Add</Button>
                </form>
            </div>
        </StyledInputForm>
    )
}

export default InputForm