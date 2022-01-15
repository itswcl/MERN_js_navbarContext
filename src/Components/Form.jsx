import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Form = () => {
    const context = useContext(MyContext)

    return (
        <form class="form-group">

            <p>Your Name:
                <input
                    onChange={(e) => context.setName(e.target.value)}
                    className='form-control'
                    type="text" name='name'
                    value={context.name}
                />
            </p>

        </form>
    )
}

export default Form
