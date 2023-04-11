import {Container} from './styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.styled'
import React, {useContext} from 'react';
import InputForm from './components/TaskForm/InputForm';
import TaskList from './components/TaskList/TaskList';
import EditForm from './components/TaskForm/EditForm';
import FilterButtonGroup from './components/FilterButtonsGroup/FilterButtonGroup';
import CartContext from './state/cart-Context';

const theme = {
  colors: {
    body: `#c0cdcf`,
    input:`#fff`,
    buttons: `#09a4b3`,
    deleteButons: `#d63a0f`,
  }
};

function App() {
  const context = useContext(CartContext);
  
  const filtrDoneItems=context.items.filter(item =>{
    return item.done === true;
  })
  const filterTodoItems=context.items.filter(item =>{
    return item.done === false;
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        {context.openEdit && (<EditForm/>)}
        <InputForm />
        <FilterButtonGroup/>
        <TaskList todoItems={
          context.isDoneList?filtrDoneItems 
          :context.isTodoList?filterTodoItems 
          :context.items
          }/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
