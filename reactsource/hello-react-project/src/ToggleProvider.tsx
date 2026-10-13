import React, { useState, type ReactNode } from 'react';
import { ToggleContext } from './commonContext';

const ToggleProvider = ({children}:ReactNode) => {
    const [isOn, setIsOn] = useState(false)
    const toggle = () => setIsOn((prev) => !prev)
    return (
        <ToggleContext.Provider value={{isOn,toggle}}>{children}</ToggleContext.Provider>
    );
};

export default ToggleProvider;