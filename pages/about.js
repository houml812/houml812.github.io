import React from "react";
import Head from 'next/head';
import Image from 'next/future/image';
import Current from '../components/Current';
import me from '../public/me.jpg'
import { FiBookOpen, FiMusic, FiTv, FiHeart } from 'react-icons/fi';
import { GrGamepad } from 'react-icons/gr';

const about = () => {
    return (
        <div>
            <Head>
                <title>about | michelle hou</title>
                <meta name="description" content="mich's design portfolio! about me" />
                {/* TODO : change out favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col gap-y-16 max-w-sm md:max-w-4xl sm:mx-auto mb-36">
                {/* about me */}
                <div className="flex flex-col md:flex-row gap-8 mt-36 mx-6 md:mx-auto overflow-hidden items-center justify-between">
                    <div>
                        <h1 className="font-bold text-4xl mb-4">about me</h1>
                        <p className="text-lg text-stone-600">
                            I’m currently working as a <b>SWE @ Mastercard in NYC</b>. I recently graduated from Georgia Tech in Fall 2021 with a BS in Computer Science and a minor in Industrial Design.
                            <br /> <br />
                            While my primary focus is product design, I also dabble in graphic design and illustration.
                            <br /> <br />
                            To put it simply, I just want to make life a little better for everyone, and if I can do that through design, then that’s all the better! 
                        </p>
                    </div>
                    <div className="md:shrink-0">
                        <Image className="rounded-lg border-solid border-black border-2 md:h-[412px] md:w-full object-cover" src={me} alt={"picture of mich"} priority={true} />
                    </div>
                </div>

                {/* my currents */}
                <div className="flex flex-col gap-8 mb-36 overflow-hidden justify-between">
                    <div>
                        <h1 className="font-bold text-4xl mb-4 mx-6 md:mx-auto">my currents</h1>
                    </div>
                    <div className="flex flex-col flex-none gap-8">
                        <Current icon={<FiBookOpen size={24} />} label={"Reading"}><i>Homegoing</i> by Yaa Gyasi</Current>
                        <Current icon={<FiMusic size={24} />} label={"Listening to"}><i>Die Another Day</i> by Dance Gavin Dance</Current>
                        <Current icon={<FiTv size={24} />} label={"Watching"}><i>Chainsaw Man</i> &amp;&amp; <i>Mob Psycho</i> Season 3 &amp;&amp; <i>Spy x Family Cour 2</i></Current>
                        <Current icon={<GrGamepad size={24} />} label={"Playing"}>Moonlighter &amp;&amp; Breath of the Wild</Current>
                        <Current icon={<FiHeart size={24} />} label={"Loving (always)"}>Clouds →&nbsp;
                            <a
                                className='underline underline-offset-4'
                                href='https://miniature-day-96e.notion.site/clouds-7ab060423f94430389247318afc244da'
                                target="_blank"
                                rel="noreferrer"
                            >
                                    see here C:
                            </a>
                            &nbsp;&amp;&amp; Buildings →&nbsp;
                            <a
                                className='underline underline-offset-4'
                                href='https://miniature-day-96e.notion.site/buildings-306f3284a0994482a1b057c1f838241c'
                                target="_blank"
                                rel="noreferrer"
                            >
                                    see here :D
                            </a>
                        </Current>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default about;