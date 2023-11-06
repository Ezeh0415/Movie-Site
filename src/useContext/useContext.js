import { createContext ,useState,useEffect } from "react";
import useFetch from "../useFetch/useFetch"
import useLocalStorage from 'use-local-storage';
import {useParams} from "react-router-dom"

export const contextProp = createContext()

const UseContext = ({children}) => {
    // movie api fetching
    const {data,isPending,error} = useFetch("https://yts.mx/api/v2/list_movies.json")
    // serach api fetching
    //const { search } = useFetch("https://www.omdbapi.com/?apikey=6d0a54e5&t=spider%20man") 
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

// search function 

const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleSearch = () => {
  const filteredResults = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
    );
    if (query === "") {
        setResults([])
    } else {
        setResults(filteredResults);
    }
};

const onSearch = (e) => {
        setQuery(e.target.value)
}



    return(
        <div>
            
                <contextProp.Provider value={{
                    data,
                    isPending,
                    error,

                    darkMood,
                    iconSwitch,
                    TOGGLE1,
                    TOGGLE2,

                    query,
                    results,
                    handleSearch,
                    onSearch,

                    }}>
                    {children}
                </contextProp.Provider>

        </div>
    )
}

export default UseContext;