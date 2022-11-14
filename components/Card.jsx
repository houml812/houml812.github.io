import React from 'react';
import Image from 'next/future/image';
import Button from './Button';

const Card = (props) => {
    return (
        <div className="max-w-md mx-6 overflow-hidden md:max-w-4xl sm:mx-auto">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="rounded-lg border-solid border-black border-2 md:h-64 md:w-full object-cover" src={props.image} alt={props.alt} />
                </div>
                <div className="px-8 py-6">
                    <h5 className="mb-3 text-2xl font-bold text-black">{props.title}</h5>
                    <p className="font-normal text-stone-600">{props.description}</p>
                    <div className="mt-12">
                        <Button label={props.buttonLabel} link={props.link} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;