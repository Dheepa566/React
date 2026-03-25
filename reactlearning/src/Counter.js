//rafce ---> react arrow function component with export
//import React, { useState } from 'react'

const Counter = ({ num, increment, decrement }) => {

    return ( <
        div >
        <
        h1 > { num } < /h1> <
        button onClick = { increment } > Increment < /button> <
        button onClick = { decrement } > Decrement < /button> <
        /div>
    )
}

export default Counter