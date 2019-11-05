import React from 'react';
import First from './First';
import ClassComponent from './ClassComponent';

//Create a Component with Composition
const Parent = () => {
    return (
        <>
            <First />
            <ClassComponent />
        </>
    )
}

export default Parent