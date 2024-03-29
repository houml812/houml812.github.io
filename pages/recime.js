import React from "react";
import Head from 'next/head';
import Image from 'next/future/image';
import ExtLink from "../components/ExtLink";
import ProjectHeader from "../components/ProjectHeader";
import ScrollButton from "../components/ScrollButton";
import hero from "../public/recime/recime_hero.png";
import content from "../public/recime/content.json";
import graph1 from "../public/recime/graph_1.png";
import graph2 from "../public/recime/graph_2.png";
import graph3 from "../public/recime/graph_3.png";
import graph4 from "../public/recime/graph_4.png";
import graph5 from "../public/recime/graph_5.png";
import graph6 from "../public/recime/graph_6.png";
import marketResearch from "../public/recime/market.png";
import userFlow from "../public/recime/user_flow.png";
import branding from "../public/recime/branding.png";
import profile from "../public/recime/profile.png";
import pantry from "../public/recime/pantry.png";
import recipeFinder from "../public/recime/recipe_finder.png";

const recime = () => {

    const client = <>Junior Capstone</>;
    const role = <>User Research<br/>Product Design<br/>Brand Design<br/>Frontend Development</>;
    const team = <>Daniel Chen<br/>Ben Choo<br/>Simon Fernandez<br/>Yiyeon Kim<br/>Preethi Narayanan</>;

    return (
        <div>
            <Head>
                <title>recime | michelle hou</title>
                <meta name="description" content="mich's design portfolio! recime case study" />
                {/* TODO : change out favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProjectHeader
                image={hero}
                title={"recime: A Recipe-Recommendation App"}
                description={"A time-saving recipe suggestion and pantry app tailored to your needs."}
                alt={"sample of recime's mobile screens"}
                timeline={"August - May '21"}
                client={client}
                role={role}
                team={team}
            />

            {/* Overview */}
            <div className="bg-[#FAF7F2]">
                <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                    <h1 className="mb-8 text-2xl font-bold text-black">Overview</h1>
                    <p>{content.overview_1}</p>
                    <br />
                    <p>{content.overview_2}</p>
                </div>
            </div>

            {/* User Research */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">User Research</h1>
                <p className="mb-8">{content.user_research_1}</p>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                    <Image className="rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={graph2} alt={"pie chart showing results on a Likert scale regarding the statement that user would prefer to spend less time and energy planning meals"} />
                    <Image className="rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={graph3} alt={"bar graph results of what users do with unused ingredients"} />
                    <Image className="rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={graph4} alt={"bar graph results of the type of food users throw away"} />
                    <Image className="rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={graph1} alt={"pie chart showing results on a Likert scale regarding the statement that planning meals takes a significant portion of time put toward cooking"} />
                    <Image className="rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={graph5} alt={"pie chart of how frequently users throw away unused ingredients"} />
                    <Image className="rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={graph6} alt={"pie chart showing if users would engage with an app that could plan meals"} />
                </div>
            </div>

            {/* Market Research */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Market Research</h1>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={marketResearch} alt={"quadrant market analysis based on search feature effectiveness and user burden"} />
                <p>{content.market_research_1}</p>
                <br />
                <p className="mb-8">{content.market_research_2}</p>
            </div>

            {/* User Flow */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">User Flow</h1>
                <p className="mb-8">{content.user_flow_1}</p>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={userFlow} alt={"proposed user flow diagram for recime"} />
            </div>

            {/* Branding */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Branding</h1>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={branding} alt={"brand guide with colors and typography"} />
            </div>
            
            {/* Features */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Features</h1>
                <p className="mb-4">Click the links below to see more!</p>
                <ul className="list-none mb-8">
                    <li>
                    <ExtLink label={"Figma Prototype"} link={'https://www.figma.com/proto/mmgkjEFCiUfZZZqGrgx34M/jif-0313-(recime)?page-id=1484%3A2988&node-id=1484%3A4317&viewport=241%2C48%2C0.12&scaling=scale-down&starting-point-node-id=1484%3A4317'} />
                    </li>
                    <li>
                        <ExtLink label={"App Live Demo"} link={'https://www.youtube.com/watch?v=NOleIp3dCrc'} />
                    </li>
                </ul>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={profile} alt={"screens showing the profile options: cooking skill level, dietary restrictions, kitchen appliances, liked recipes"} />
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={pantry} alt={"screens showing the virtual pantry"} />
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={recipeFinder} alt={"screens showing the recipe finder, filters, and recipe details"} />
            </div>

            {/* Reflections */}
            <div className="bg-[#FAF7F2]">
                <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                    <h1 className="mb-8 text-2xl font-bold text-black">Reflections</h1>
                    <p>{content.reflections_1}</p>
                    <br />
                    <p>{content.reflections_2}</p>
                </div>
            </div>

            <div className="flex justify-end bg-[#FAF7F2]">
                <div className="mr-6 md:mr-32 mb-24">
                    <ScrollButton />
                </div>
            </div>

        </div>
    )
};

export default recime;