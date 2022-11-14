import React from 'react';
import Image from 'next/future/image';

const ProjectHeader = (props) => {
    return (
        <div className="max-w-md mx-auto block md:max-w-4xl">
            {/* max-w-lg mx-auto overflow-hidden md:max-w-4xl sm:mx-auto block */}
            {/* <div className="md:flex"> */}
                <div className="md:shrink-0 mb-8">
                    <Image className="rounded-lg border-solid border-black border-2 md:h-96 md:w-full object-cover" src={props.image} alt={props.alt} />
                </div>
                <div className="mb-8 mx-6 md:mx-0">
                    <h2 className="mb-3 text-4xl font-bold text-black">{props.title}</h2>
                    <h5 className="font-normal text-stone-600">{props.description}</h5>
                </div>
                <div className='flex flex-col mb-24 space-y-4 mx-6 md:space-x-20 md:flex-row md:space-y-0 md:mx-0'>
                    <div>
                        <h5 className="text-xs text-stone-600">TIMELINE</h5>
                        {props.timeline}
                    </div>
                    <div>
                        <h5 className="text-xs text-stone-600">CLIENT</h5>
                        {props.client}
                    </div>
                    <div>
                        <h5 className="text-xs text-stone-600">ROLE</h5>
                        {props.role}
                    </div>
                    <div>
                        <h5 className="text-xs text-stone-600">TEAM</h5>
                        {props.team}
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default ProjectHeader;