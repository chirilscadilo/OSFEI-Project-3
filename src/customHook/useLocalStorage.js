import { useEffect, useState } from "react";
/*hook that look and retrive and save to local storage.
We need to pass a state*/
const useLocalStorage=(key,initiaValue)=>{
    /*search in local storage for the key passed in from useContext.
    If does not find anything - return initial Value*/
    const [value,setValue] = useState(()=>{
        try{
            const localValue = window.localStorage.getItem(key);
            return localValue ? JSON.parse(localValue):initiaValue;
        }catch(err){
            console.log(err);
            return initiaValue;
        }
    });

    /*setting the local storage to the Key and value has been return from state above.
    Will run if value will change*/
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue];
}
export default useLocalStorage;