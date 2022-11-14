import React from 'react';

const Current = (props) => {
    return (
        <div className="flex flex-col md:flex-row gap-3 px-12 py-8 md:items-center md:w-full max-w-md mx-6 rounded-lg border-solid border-black border-2 overflow-hidden md:max-w-4xl sm:mx-auto">
            <div className='block'>{props.icon}</div>
            <h3 className='font-bold text-base'>{props.label}</h3>
            <p className='text-stone-600'>{props.children}</p>
        </div>
    );
}

export default Current;