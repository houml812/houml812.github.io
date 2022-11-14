import React from 'react';
import Link from 'next/link';

const Button = (props) => {

    return (
        <Link href={props.link}>
            <a className="font-medium border-solid border-black border-2 bg-black text-white hover:bg-white hover:text-black py-4 px-12 rounded-lg mt-6">{props.label}</a>
        </Link>
    );

}

export default Button;