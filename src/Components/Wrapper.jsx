import React, { useState } from 'react';
import MyContext from '../context/MyContext'

import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = (props) => {
    const [name, setName] = useState("")

    return (
        <div>
            <MyContext.Provider value={{ name, setName }}>
                {props.children}
                {/* <Navbar/>
                <FormWrapper/> */}
            </MyContext.Provider>

        </div>
    )
}

export default Wrapper
