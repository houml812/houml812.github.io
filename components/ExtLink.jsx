import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";

const ExtLink = (props) => {

    return (
        <>
            <Link href={props.link}>
                <a className="underline underline-offset-4">{props.label}</a>
            </Link>
            <FiArrowUpRight className='inline' />
        </>
    );

}

export default ExtLink;