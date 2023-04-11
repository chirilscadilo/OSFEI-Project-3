import * as React from 'react';
import {StyledGroupButtons} from '../../styles/GroupButtons.styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CartContext from "../../state/cart-Context";

const options = ['All', 'Todo', 'Done'];

function FilterButtonGroup(props) {
    const context = React.useContext(CartContext);

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    /*click event for each button*/
    const handleClick = () => {
        return(options[selectedIndex]==='Todo'?context.todoFilter()
            :options[selectedIndex]==='Done'?context.doneFilter()
            :context.allFilter());
    };

    /*click event for each button*/
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    }
    
    React.useEffect(()=>{
        const select = options[selectedIndex]==='Todo'?context.todoFilter()
            :options[selectedIndex]==='Done'?context.doneFilter()
            :context.allFilter();
        return select;
    },[context, selectedIndex])

    const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
    setOpen(false);
    };

    return (
    <StyledGroupButtons>
        <div>
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
            size="small"
            onClick={handleToggle}
        >
            <ArrowDropDownIcon />
        </Button>
        </ButtonGroup>
        <Popper
        sx={{
            zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        >
        {({ TransitionProps, placement }) => (
            <Grow
            {...TransitionProps}
            style={{
                transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
            >
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={selectedIndex === index}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                    ))}
                </MenuList>
                </ClickAwayListener>
            </Paper>
            </Grow>
        )}
        </Popper>
        </div>
    </StyledGroupButtons>
    );
}

export default FilterButtonGroup