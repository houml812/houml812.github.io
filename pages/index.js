import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Card from '../components/Card';
import recime from '../public/recime_cover.png';
import miqueas from '../public/miqueas_cover.png';
import rc from '../public/rc_cover.png';
import rollin from '../public/rollin_cover.png';

export default function Home() {
    const emoticons = Array("(●˙꒳˙●)", "(◍ ´꒳` ◍)b", "(๑´ω`๑)", "〜(꒪꒳꒪)〜", "(（（（o┤｀･ｪ･´├o））））)", ".ﾟ(ﾟ`ω´ ﾟ)ﾟ.", "(｡-人-｡)", "( ´•̥̥̥ω•̥̥̥` )", "٩(๑`^´๑)۶", "Σ(-᷅_-᷄๑)", "┐(´ｰ｀)┌");
    const [emoticon, setEmoticon] = useState("(●˙꒳˙●)");

    const renderEmoticon = () => {
        return emoticons[Math.floor(Math.random() * emoticons.length)];
    }

    useEffect(() => {
        setEmoticon(renderEmoticon());
    }, []);

    const rcDescription = <><i>Adobe x Target Creative Jam Winner</i> <br/>Encouraging young students to learn to recycle while earning rewards at local stores.</>
    
    return (
        <div>
            <Head>
                <title>home | michelle hou</title>
                <meta name="description" content="mich's design portolio!" />
                {/* TODO : change out favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col gap-y-10 mb-36">
                {/* intro */}
                <div className="flex flex-row max-w-md mx-6 my-36 overflow-hidden md:max-w-4xl sm:mx-auto items-center">
                    <div>
                        <p className="font-bold text-4xl mb-6 inline-block cursor-pointer" onMouseEnter={() => setEmoticon(renderEmoticon())}>{emoticon}</p>
                        <h1 className="font-bold text-4xl mb-4">hello there! i’m mich</h1>
                        <p className="text-2xl text-stone-500 leading-relaxed">a budding designer sharpening my skills in UI/UX and graphic design.<br />This site (like me) is a constant work in progress, but thank you for stopping by!</p>
                    </div>
                </div>

                {/* project cards */}
                <Card
                    image={recime}
                    title={"recime"}
                    description={"A time-saving recipe suggestion and pantry app that recommends recipes catered to users’ preferences and optimized for what’s on hand."}
                    buttonLabel={"Read More"}
                    link={"/recime"}
                    alt={"sample of recime's mobile screens"}
                />
                <Card
                    image={miqueas}
                    title={"Miqueas 6.8 IMS"}
                    description={"Streamlining the inventory logging process and clarifying data readability for volunteers at a children’s home in Honduras."}
                    buttonLabel={"Read More"}
                    link={"/miqueas"}
                    alt={"sample of Miqueas app's mobile screens"}
                />
                <Card
                    image={rc}
                    title={"Recycle Heroes"}
                    description={rcDescription}
                    buttonLabel={"View Prototype"}
                    link={"https://xd.adobe.com/view/1b7f4126-5a57-4493-9595-cf211e358f9f-4e2c/"}
                    alt={"sample of recycle heroes's mobile screens"}
                />
                <Card
                    image={rollin}
                    title={"Rollin' On"}
                    description={"A project exploring Roller Derby, LGBTQ+ youth homelessness, and how graphic design can be used to tackle intimidating problems."}
                    buttonLabel={"View Process Book"}
                    link={"https://drive.google.com/file/d/1MPxBCZ-HyShZ5yzTvBTMY81Te6WKHBwq/view?usp=sharing"}
                    alt={"rollin on logo image"}
                />
            </div>
        </div>
    )
}
