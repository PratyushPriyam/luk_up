import React, { createContext, useContext, useState } from "react";


const ResultContext = createContext();
const baseUrl = 'https://duckduckgo10.p.rapidapi.com'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('india');

    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4eef22c584mshff6356e11aa9c7cp10c7fcjsn03e14bc4b35b',
                'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
            }
        });

        const data = await response.json()
        // console.log("data : ", data.data)
        setResults(data)
        setIsLoading(false)
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading, setIsLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)