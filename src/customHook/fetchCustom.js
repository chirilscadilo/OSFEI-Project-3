const [items, setItemsList] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchTodosHandler = useCallback( async() => {
    setIsLoading(true);
    setError(null);
    try{ 
        const responce = await fetch('https://react-http-1355a-default-rtdb.firebaseio.com/tasks.json');

        if(!responce.ok){
        throw new Error('Request failed');
        }
        const data = await responce.json();

        const loadedTasks = [];
        for(const key in data){
        loadedTasks.push({
            id: key,
            text: data[key].text
        });
        };

        setItemsList(loadedTasks);
    }catch(err){
        setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false);
    },[]);

    useEffect(() =>{fetchTodosHandler()}, [fetchTodosHandler])

    
    const addingNewTodo = async(todo) =>{
    const responce = await fetch('https://react-http-1355a-default-rtdb.firebaseio.com/tasks.json',
    {
        method:'POST',
        body: JSON.stringify(todo),
        headers:{
        'Content-Type': 'application/json'
        }
    });
    const data = await responce.json();
    setItemsList((prevTodos) => prevTodos.concat(data));

    /*set generated Id provided by FireShip, and delte the id random from InputForm*/
};

//from Task List
// if(props.error){
    //     return (
    //         <div className={classes.error}>
    //             <h2>Something went Wrong.</h2>
    //             <button onClick={props.onFetch}>Try Again</button>
    //         </div>
    //     )
    // }

    // if(props.loading){
    //     return <h2 className={classes['no-items']}>Loading...</h2>
    // };