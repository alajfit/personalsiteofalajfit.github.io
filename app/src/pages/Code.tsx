import React, { useState, useEffect } from 'react';
import { ICodeListing } from '../types';
import { getCode } from '../api';

export const Code = () => {
    const [code, setCode] = useState<ICodeListing[]>([])

    useEffect(() => {
        getCode().then(code => console.log(code))
    }, [])

    return (
        <h3>Testing 123</h3>
    )
}
