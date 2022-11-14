import React from "react";
import Head from 'next/head';
import Image from 'next/future/image';
import ExtLink from "../components/ExtLink";
import ProjectHeader from "../components/ProjectHeader";
import ScrollButton from "../components/ScrollButton";
import hero from "../public/miqueas/miqueas_hero.png";
import content from "../public/miqueas/content.json";
import userJourney from "../public/miqueas/user_journey.png";
import transactionCurrent from "../public/miqueas/transaction_current.png";
import transactionFlow from "../public/miqueas/transaction_flow.png";
import transactionNew from "../public/miqueas/transaction_new.png";
import logsCurrent from "../public/miqueas/logs_current.png";
import iaCurrent from "../public/miqueas/ia_current.png";
import iaNew from "../public/miqueas/ia_new.png";
import transactionLog from "../public/miqueas/transaction_log_final.png";
import inventoryLog from "../public/miqueas/logs_current.png";


const miqueas = () => {

    const client = <><ExtLink label={"Miqueas 6.8"} link={'https://www.miqueas68.org/'} /><br/>(thru <ExtLink label={"Bits of Good"} link={'https://bitsofgood.org/'} />)</>;
    const role = <>User Research<br/>Product Design</>;
    const team = <>Product Manager,<br/>Engineering Manager,<br/>2 Product Designers,<br/>5 Developers</>;

    return (
        <>
            <Head>
                <title>miqueas | michelle hou</title>
                <meta name="description" content="mich's design portfolio! miqueas 6.8 case study" />
                {/* TODO : change out favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProjectHeader
                image={hero}
                title={"Miqueas 6.8 Inventory Management System"}
                description={"Streamlining the inventory logging process and clarifying data readability for volunteers."}
                alt={"sample of miqueas's mobile screens"}
                timeline={"January - April '20"}
                client={client}
                role={role}
                team={team}
            />

            {/* Overview */}
            <div className="bg-[#ECFBFB]">
                <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                    <h1 className="mb-8 text-2xl font-bold text-black">Overview</h1>
                    <p>{content.overview_1}</p>
                    <br />
                    <p>{content.overview_2}</p>
                </div>
            </div>

            {/* Research */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Research</h1>
                <p className="mb-8">{content.research_1}</p>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={userJourney} alt={"user journey"} />
                <h1 className="mb-8 text-2xl font-bold text-black text-center">{content.research_2}</h1>
            </div>

            {/* Constraints */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Constraints</h1>
                <p className="mb-8">{content.constraints_1}</p>
                <ol className="list-decimal mb-16 mx-4 md:mx-16">
                    <li>
                        <p className="font-bold">{content.constraints_li_1}</p>
                        <p>{content.constraints_li_1p}</p>
                    </li>
                    <li>
                        <p className="font-bold">{content.constraints_li_2}</p>
                        <p>{content.constraints_li_2p}</p>
                    </li>
                    <li>
                        <p className="font-bold">{content.constraints_li_3}</p>
                        <p>{content.constraints_li_3p}</p>
                    </li>
                </ol>
                <hr />
            </div>

            {/* Feature 1 */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Feature 1 : The Transaction Form</h1>
                <p className="mb-8">{content.feature_1_1}</p>
                <ol className="list-decimal mb-8 mx-4 md:mx-16">
                    <li>
                        <p className="font-bold">Transaction Form</p>
                        <p>{content.feature_1_li_1p}</p>
                    </li>
                    <li>
                        <p className="font-bold">Log Tables</p>
                        <p>{content.feature_1_li_2p}</p>
                    </li>
                </ol>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={transactionCurrent} alt={"two screens of the current app's transaction form"} />
                <p className="mb-8">{content.feature_1_2} <b>increased error.</b></p>
                <div className="md:mx-16">
                    <div className="flex flex-row space-x-8 mb-8">
                        <h1 className="text-4xl font-bold">1</h1>
                        <p>{content.feature_1_req_1}</p>
                    </div>
                    <div className="flex flex-row space-x-8 mb-8">
                        <h1 className="text-4xl font-bold">2</h1>
                        <p>{content.feature_1_req_2}</p>
                    </div>
                    <div className="flex flex-row space-x-8 mb-8">
                        <h1 className="text-4xl font-bold">3</h1>
                        <p>{content.feature_1_req_3}</p>
                    </div>
                </div>
            </div>

            {/* Solution 1 */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Solution</h1>
                <p>{content.solution_1_p1_1} <b>reduce the amount of redundancy</b>{content.solution_1_p1_2}</p>
                <br />
                <p className="mb-8">{content.solution_1_p2} <b>duplication of transaction forms</b> and <b>reviewing entries before submitting.</b></p>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={transactionFlow} alt={"proposed user flow chart for transactions"} />
            </div>

            {/* Designs 1 */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Designs</h1>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={transactionNew} alt={"screens of the newly designed transaction form"} />
                <p className="mb-16">{content.designs_1}</p>
                <hr />
            </div>

            {/* Feature 2 */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Feature 2 : The Log Tables</h1>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={logsCurrent} alt={"two screens of the current app's log tables"} />
                <p className="mb-8">{content.feature_2_1}</p>
                <div className="md:mx-16">
                    <div className="flex flex-row space-x-8 mb-8">
                        <h1 className="text-4xl font-bold">1</h1>
                        <p>{content.feature_2_req_1}</p>
                    </div>
                    <div className="flex flex-row space-x-8 mb-8">
                        <h1 className="text-4xl font-bold">2</h1>
                        <p>{content.feature_2_req_2}</p>
                    </div>
                    <div className="flex flex-row space-x-8 mb-8">
                        <h1 className="text-4xl font-bold">3</h1>
                        <p>{content.feature_2_req_3}</p>
                    </div>
                </div>
            </div>

            {/* Solution 2 */}
            <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Solution</h1>
                <p className="mb-8">{content.solution_2_1}</p>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={iaCurrent} alt={"current info architecture of the app"} />
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={iaNew} alt={"proposed info architecture of the app"} />
            </div>

            {/* Designs 2 */}
            <div  className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-black">Designs</h1>
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={transactionLog} alt={"screens of the newly designed transaction log"} />
                <Image className="mb-8 rounded-lg border-solid border-black border-2 md:h-full md:w-full object-cover" src={inventoryLog} alt={"screens of the newly designed inventory log"} />
                <p className="mb-8">{content.designs_2}</p>
            </div>

            {/* Reflections */}
            <div className="bg-[#ECFBFB]">
                <div className="max-w-md block md:max-w-4xl py-14 mx-6 md:mx-auto">
                    <h1 className="mb-8 text-2xl font-bold text-black">Reflections</h1>
                    <p>{content.reflections_p1}</p>
                    <br />
                    <p>{content.reflections_p2} <b>constraints</b> and <b>meeting users where they’re at.</b></p>
                    <br />
                    <p className="mb-8">As a whole, I also learned that <b>less is more.</b> {content.reflections_p3}</p>
                </div>
            </div>


            <div className="flex justify-end bg-[#ECFBFB]">
                <div className="mr-6 md:mr-32 mb-24">
                    <ScrollButton />
                </div>
            </div>
        </>
    )
};

export default miqueas;