import React from 'react';
import RandomUser from './RandomUser';

const ExternalApiFetcher = () => {
    return (
        <div>
            <h2 className='text-2xl'>외부 서버 통신</h2>
            <RandomUser/>
        </div>
    );
};

export default ExternalApiFetcher;