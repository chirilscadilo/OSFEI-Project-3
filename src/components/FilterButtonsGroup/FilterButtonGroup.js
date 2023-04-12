import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CartContext from "../../state/cart-Context";

function FilterButtonGroup() {
  const context = React.useContext(CartContext);

  const handleChange = (event) => {
    context.handleFiltres(event.target.value);
  };

  return (
    <Box sx={{width: '100%', maxWidth: 110, bgcolor: 'background.paper' , margin: '0 auto', borderRadius: 2, marginBottom:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select sx={{fontSize:18}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={context.filter}
          label="List-Filter"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'todo'}>Todo</MenuItem>
          <MenuItem value={'done'}>Done</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default FilterButtonGroup