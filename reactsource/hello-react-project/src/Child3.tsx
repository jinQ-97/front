import React, { useContext } from 'react';
import { ToggleContext } from './commonContext';

const Child4 = () => {
    const context = useContext(ToggleContext)
    if (!context){
        throw new Error("CountContext null")
    }
    
    const { toggle } = context

    return (
        <div>
            <h2 className='text-3xl'>Child2</h2>
            <button className='border px-4' onClick={toggle}> 변경 </button>
        </div>
    );
};

const Child3 = () => {
    const context = useContext(ToggleContext)
    if (!context){
        throw new Error("ToggleContext null")
    }
    
    const { isOn } = context



    return (
        <div>
            <Child4 />
            <h2 className='text-3xl'>Child3</h2>
            <p>{isOn ? "on" : "off"}</p>  
        </div>
    );
};

export default Child3;