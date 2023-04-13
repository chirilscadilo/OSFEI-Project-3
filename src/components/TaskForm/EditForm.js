import React, {useContext, useState} from "react";
import {StyledInputForm} from '../../styles/InputForm.styled'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import CartContext from "../../state/cart-Context";
import {StyledFlexButtons} from '../../styles/StyledFlexButtons.styled';

const EditForm = (props)=>{
    const context = useContext(CartContext);
    const [updateTodo, setUpdateTodo] = useState(context.editedTodo.text);

    const sumbitHandler = (event)=>{
        event.preventDefault();
        context.updateTodo({...context.editedTodo, text:updateTodo});
    };

    return(
        <Modal open={context.openEdit} onClose={context.handleCloseEdit} onSubmit={sumbitHandler}>
            <StyledInputForm>
            <div>
                <h2>Edit Item</h2>
                <form noValidate autoComplete="off">
                <TextField
                    value={updateTodo}
                    onInput={(e)=>setUpdateTodo(e.target.value)}
                    label="Update Todo"
                    variant="outlined" 
                    color="secondary"
                    fullWidth
                    required
                />
                <StyledFlexButtons changeColor>
                    <Button disabled={!updateTodo} type="submit" variant="contained" color="primary">
                        Update Item
                    </Button>
                    <Button onClick={context.handleCloseEdit} variant="contained" color="secondary">
                        Cancel
                    </Button>
                </StyledFlexButtons>
                </form>
        </div>
        </StyledInputForm>
        </Modal> 
    )
}

export default EditForm