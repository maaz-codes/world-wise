/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:8000"; 

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function() {
        async function getData() {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json();
            setCities(data);
        } catch (err) {
            throw new Error('something went wrong!');
        } finally {
            setIsLoading(false);
        }
        }
        getData();

    }, []);

        async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch (err) {
            throw new Error('something went wrong!');
        } finally {
            setIsLoading(false);
        }
        }

  return (
    <CitiesContext.Provider value={{
        cities, isLoading, currentCity,
    }}>
        {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider')
    return context;
}

export { useCities, CitiesProvider };