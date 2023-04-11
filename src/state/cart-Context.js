import React, {useState} from 'react';
//custom hooks
import useLocalStorage from '../customHook/useLocalStorage';


//Create a context Object,
const CartContext = React.createContext({
    items: [],
    openEdit: false,
    editedTodo: null,
    isDoneList:false,
    isTodoList:false,
    addingNewTodo:(todo)=>{},
    handleCheckClick:(index)=>{},
    handleRemoveClick:(id)=>{},
    updateTodo: (todo) => {},
    handleEditItem: (todo) =>{},
    handleOpenEdit: () => {},
    handleCloseEdit: () => {},
    allFilter:()=>{},
    doneFilter: ()=>{},
    todoFilter:()=>{},
    removeAll:()=>{},
    removeAllDone:()=>{},
});

export const CartProvider = (props)=>{
    const [items, setItemsList] = useLocalStorage('react-todo.tasks',[]);
    const [openEdit, setOpenEdit] = useState(false);
    const [editedTodo, setEditedTask] = useState(null);
    const [isDoneList, setIsDoneList] = useState(false);
    const [isTodoList, setTodoList] = useState(false);

    /*adding new todo received from InputForm*/
    const addingNewTodo = (todo) =>{
    setItemsList((prevTodos) => prevTodos.concat(todo));
    }

    /*mark as done, received from TaskList*/
    const handleCheckClick = (index) => {
    const newListItems = [...items];
    newListItems[index].done = !newListItems[index].done;
    setItemsList(newListItems);
    };

    /*remove the list Item, received from TaskList*/
    const handleRemoveClick = (id) => {
    setItemsList(items.filter((item) => item.id !== id));
    };

    /*edit item function*/
    const updateTodo = (todo) => {
    setItemsList(prevState => prevState.map(item => (
        item.id === todo.id ? {...item, text: todo.text}: item
    )))
    handleCloseEdit();
    };

    /*passing todo from TaskList to edit*/
    const handleEditItem = (todo) =>{
    setEditedTask(todo);
    handleOpenEdit();
    }

    /*open edit modal*/
    const handleOpenEdit = () => {
    setOpenEdit(true);
    };
    /*close edit modal*/
    const handleCloseEdit = () => {
    setOpenEdit(false);
    };

    /*filter handles*/
    const allFilter =()=>{
    setIsDoneList(false);
    setTodoList(false);
    }

    const doneFilter = ()=>{
    setIsDoneList(prevState=>!prevState);
    setTodoList(false);
    }

    const todoFilter =()=>{
    setIsDoneList(false);
    setTodoList(prevState=>!prevState);
    }

    const removeAll=()=>{
        setItemsList([]);
    };

    const removeAllDone=()=>{
        const filtrDoneItems = items.filter(item => item.done !== true);
        setItemsList(filtrDoneItems);
    }

  return <CartContext.Provider 
    value={{
        items: items,
        openEdit: openEdit,
        editedTodo: editedTodo,
        isDoneList:isDoneList,
        isTodoList:isTodoList,
        addingNewTodo:addingNewTodo,
        handleCheckClick:handleCheckClick,
        handleRemoveClick:handleRemoveClick,
        updateTodo: updateTodo,
        handleEditItem: handleEditItem,
        handleOpenEdit: handleOpenEdit,
        handleCloseEdit: handleCloseEdit,
        allFilter:allFilter,
        doneFilter: doneFilter,
        todoFilter:todoFilter,
        removeAll:removeAll,
        removeAllDone:removeAllDone,
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;