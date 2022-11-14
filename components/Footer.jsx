import React from 'react';

const Footer = () => {

    return (
        <div style={{ fontFamily: "Space Mono"}} className="w-full h-auto bg-black text-white text-xs ease-in duration-300">
            <div className="mx-6 flex justify-between items-center py-6 md:mx-32">
                <div className="flex flex-col md:flex-row gap-3 md:gap-12">
                    <p>→ houml812@gmail.com</p>
                    <a href='https://www.linkedin.com/in/michelle-hou/' target='_blank'>
                        <p className="underline underline-offset-4 cursor-pointer">→ LinkedIn</p>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <p>handmade by mich</p>
                    {/* TODO : maybe change this to something other than rick lol */}
                    <a className="cursor-help" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>ᕕ( ᐛ )ᕗ</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;