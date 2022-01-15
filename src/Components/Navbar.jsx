import React,{createContext, useContext} from 'react'
import MyContext from './context/MyContext'


const Navbar = () => {
    const context = useContext(MyContext);
    return (
        <div>
            <h1>Hi {context.name} !</h1>
        </div>
    )
}

export default Navbar
