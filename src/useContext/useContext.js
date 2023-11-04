import { createContext ,useState } from "react";
import useFetch from "../useFetch/useFetch"

export const contextProp = createContext()

const UseContext = ({children}) => {
    // movie api fetching
    const {data,isPending,error} = useFetch("https://yts.mx/api/v2/list_movies.json")

    return(
        <div>
            {data && (
                <contextProp.Provider value={{
                    data,
                    isPending,
                    error
                    }}>
                    {children}
                </contextProp.Provider>
            )}
        </div>
    )
}

export default UseContext;