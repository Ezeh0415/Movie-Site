import { createContext ,useState,useEffect } from "react";
import useFetch from "../useFetch/useFetch"
import useLocalStorage from 'use-local-storage';

export const contextProp = createContext()

const UseContext = ({children}) => {
    // movie api fetching
    const {data,isPending,error} = useFetch("https://yts.mx/api/v2/list_movies.json")
  //dark theme function with useLocal storage
        const [darkMood,setDarkMood] = useLocalStorage("darkMoo","light")
        const [iconSwitch,setIconSwitch] = useState(false)


        const TOGGLE1 = () => {
        const newDarkMood = "light" ? "dark" : "light";
        setDarkMood(newDarkMood)
        setIconSwitch(false)
        }
        const TOGGLE2 = () => {
        const newDarkMood = "dark" ? "light" : "dark";
        setDarkMood(newDarkMood)
        setIconSwitch(true)
        }

        useEffect(() => {
        if (darkMood === "dark") {
            setIconSwitch(true)
        }else {
            setIconSwitch(false)
        }
        },[darkMood])

// end of dark theme function 

    return(
        <div>
            
                <contextProp.Provider value={{
                    data,
                    isPending,
                    error,

                    darkMood,
                    iconSwitch,
                    TOGGLE1,
                    TOGGLE2
                    }}>
                    {children}
                </contextProp.Provider>

        </div>
    )
}

export default UseContext;