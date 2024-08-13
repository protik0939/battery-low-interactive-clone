import { useState } from "react";
import { ImCross } from "react-icons/im";
import About from "../pages/About";
import Service from "../pages/Service";
import Works from "../pages/Works";
import News from "../pages/News";

const Options = () => {

    const [tapped, setTapped] = useState(false);

    const [about, setAbout] = useState(false);
    const [service, setService] = useState(false);
    const [works, setWorks] = useState(false);
    const [news, setNews] = useState(false);


    const collapse = e => {
        setTapped(!tapped);
        if (e == "one") {
            setAbout(!about);
        }
        else if (e == "two") {
            setService(!service);
        }
        else if (e == "three") {
            setWorks(!works);
        }
        else if (e == "four") {
            setNews(!news);
        }
    }

    const resetAll = () => {
        setTapped(false);
        if (about == true) {
            setAbout(false);
        }
        if (service == true) {
            setService(false);
        }
        if (works == true) {
            setWorks(false);
        }
        if (news == true) {
            setNews(false);
        }
    }

    return (
        <div>

            <div className="flex w-full flex-wrap h-screen border-8 border-[#333] rounded-lg items-center justify-center fixed overflow-x-auto">

                <ImCross onClick={resetAll} className={` ${tapped ? 'block' : 'hidden'} fixed top-0 right-0 bg-[#333] text-5xl p-3 text-white z-20 cursor-pointer hover:text-hovercolor ease-in duration-200`}></ImCross>

                <div onClick={() => collapse("one")} className={tapped ? (about ? "absolute top-0 left-0 w-full h-full bg-transparent overflow-hidden flex justify-end items-end cursor-auto ease-in-out duration-200 pointer-events-none" : "absolute top-0 left-0 w-0 h-0 bg-zinc-50 overflow-hidden flex justify-end items-end cursor-pointer hover:bg-hovercolor ease-in-out duration-200") : "relative w-1/2 h-1/2 bg-zinc-50 overflow-hidden flex justify-end items-end cursor-pointer hover:bg-hovercolor ease-in-out duration-200"}>
                    <img className={about ? "w-1/2 left-0 top-0 absolute" : "max-h-full max-w-full object-contain"} src="https://batterylowinteractive.com/assets/images/stock/about.png" alt="" />
                </div>


                <div onClick={() => collapse("two")} className={tapped
                    ? (service
                        ? "absolute top-0 right-0 w-full h-full bg-transparent overflow-hidden flex justify-start items-end cursor-pointer ease-in-out duration-200  pointer-events-none"
                        : "absolute top-0 right-0 w-0 h-0 bg-zinc-200 overflow-hidden flex justify-start items-end cursor-pointer hover:bg-hovercolor ease-in-out duration-200")
                    : "relative w-1/2 h-1/2 bg-zinc-200 overflow-hidden flex justify-start items-end cursor-pointer hover:bg-hovercolor ease-in-out duration-200"}>
                    <img className={service ? "w-1/2 left-0 top-0 absolute" : "max-h-full max-w-full object-contain"} src="https://batterylowinteractive.com/assets/images/stock/service.png" alt="" />
                </div>


                <div onClick={() => collapse("three")} className={tapped ? (works ? "absolute bottom-0 left-0 w-full h-full bg-zinc-200 overflow-hidden flex justify-end items-start cursor-pointer hover:bg-hovercolor ease-in-out duration-200 pointer-events-none" : "absolute bottom-0 left-0 w-0 h-0 bg-zinc-200 overflow-hidden flex justify-end items-start cursor-pointer hover:bg-hovercolor ease-in-out duration-200") : "relative w-1/2 h-1/2 bg-zinc-200 overflow-hidden flex justify-end items-start cursor-pointer hover:bg-hovercolor ease-in-out duration-200"}>
                    <img className={works ? "w-1/2 left-0 top-0 absolute" : "max-h-full max-w-full object-contain"} src="https://batterylowinteractive.com/assets/images/stock/work.png" alt="" />
                </div>


                <div onClick={() => collapse("four")} className={tapped ? (news ? "absolute bottom-0 right-0 w-full h-full bg-zinc-50 overflow-hidden flex justify-end items-end cursor-pointer hover:bg-hovercolor ease-in-out duration-200 pointer-events-none" : "absolute bottom-0 right-0 w-0 h-0 bg-zinc-50 overflow-hidden flex justify-end items-end cursor-pointer hover:bg-hovercolor ease-in-out duration-200") : "relative w-1/2 h-1/2 bg-zinc-50 overflow-hidden flex justify-start items-start cursor-pointer hover:bg-hovercolor ease-in-out duration-200"}>
                    <img className={news ? "w-1/2 left-0 top-0 absolute" : "max-h-full max-w-full object-contain"} src="https://batterylowinteractive.com/assets/images/stock/blog.png" alt="" />
                </div>

                {
                    tapped ? (
                        about ? (
                            <About></About>
                        ) : service ? (
                            <Service></Service>
                        ) : works ? (
                            <Works></Works>
                        ) : news ? (
                            <News></News>
                        ) : null
                    ) : null
                }
                <div
                    className={
                        tapped
                            ? about
                                ? "absolute right-0 bottom-0 w-0 ease-in-out duration-200"
                                : service
                                    ? "absolute left-0 bottom-0 w-0 ease-in-out duration-200"
                                    : works
                                        ? "absolute right-0 top-0 w-0 ease-in-out duration-200"
                                        : news
                                            ? "absolute left-0 top-0 w-0 ease-in-out duration-200"
                                            : null
                            : "border-2 border-[#333] absolute flex bg-zinc-50 rotate-45 w-1/12 ease-in-out duration-200"
                    }
                >

                    <img className="scale-75 -rotate-45" src="https://batterylowinteractive.com/assets/images/logo.png" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Options;