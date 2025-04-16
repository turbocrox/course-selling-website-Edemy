import { createContext } from "react";

// Creating the context object
export const Appcontext = createContext();

// Context provider component
export const AppcontextProvider = (props) => {
    const value = {}; 

    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    );
}
