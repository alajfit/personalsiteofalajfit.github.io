import React, { useState, useEffect } from 'react';
import { getCode } from '../api';

export const Code = () => {
    const [code, setCode] = useState([])

    useEffect(() => {
        getCode().then(code => console.log(code))
    }, [])

    return (
        <h3>Testing 123</h3>
    )
}
