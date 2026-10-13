import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNevi = () => {
    return (
       <div>
            <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center">
                <NavLink to="/use-state">useState</NavLink>
                <NavLink to="/use-reducer1">usereducer1</NavLink>
                <NavLink to="/use-reducer2">usereducer2</NavLink>
                <NavLink to="/use-reducer3">usereducer3</NavLink>
                <NavLink to="/use-context">useCpmtext</NavLink>
            </nav>
        </div>
    );
};

export default TopNevi;