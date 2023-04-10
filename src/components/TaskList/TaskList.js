import React, {useContext} from "react";
import classes from './TaskList.module.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CartContext from "../../state/cart-Context";


function TaskList(props){
    const context = useContext(CartContext);
    if(props.todoItems.length === 0){
        return <h2 className={classes['no-items']}>No items found</h2>
    };
    
    return(
        <List dense sx={{ width: '100%', maxWidth: 510, bgcolor: 'background.paper' , margin: '0 auto', borderRadius: 2}}>
            {props.todoItems.map((item, index) => (
                <ListItem key={item.id}>
                <ListItemIcon>
                    <Checkbox
                        checked={item.done}
                        onClick={() => context.handleCheckClick(index)}
                    />
                </ListItemIcon>
                <ListItemText primary={item.text} />
                <ListItemSecondaryAction>
                    <IconButton onClick={() => {context.handleEditItem({id:item.id, text:item.text})}}>
                        <EditIcon />
                    </IconButton>

                    <IconButton onClick={()=> context.handleRemoveClick(item.id)}>
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default TaskList