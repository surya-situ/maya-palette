import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";

const Layout = () => {

    const [ show, setShow ] = useState(false);
    const { pathname } = useLocation()
    
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
        <div className="bg-[#252627] shadow-md fixed left-0 top-0 w-full z-0">
            <div className="w-[93%] m-auto py-3">
                <div className="flex items-center justify-between">
                    <div className="w-[80px] h-[48px]">
                        <img 
                            className="w-full h-full" 
                            src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" 
                            alt="logo"
                        />
                    </div>

                    <div className="relative flex items-center justify-center gap-4">
                        <button 
                            className="py-2 px-6 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[5px] font-medium hover:bg-[#9553f8] ">
                                Create a design
                        </button>

                        <div className="cursor-pointer">
                            <img 
                                className="w-[45px] h-[45px] rounded-full" 
                                src="https://www.psdgraphics.com/file/user-icon.jpg" 
                                alt="profile"
                                onClick={() => setShow(!show)}
                            />
                        </div>

                        <div className={`absolute top-[60px] right-0 w-[270px] bg-[#313030] p-3 border border-gray-700 transition duration-500 ${show ? 'visible opacity-100 z-50' : 'invisible opacity-30'}`}>

                            <div className="flex items-center justify-start gap-5 px-2 py-2">
                                <img 
                                    className="w-[40px] h-[40px] rounded-full" 
                                    src="https://www.psdgraphics.com/file/user-icon.jpg" 
                                    alt="profile"
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-[#e0dddd] font-bold text-md">Suryakanta Das</span>
                                    <span className="text-[#c4c0c0] font-bold text-md">suryakanta@gmail.com</span>
                                </div>
                            </div>

                            <ul className="text-[#e0dddd] font-semibold">
                                <li>
                                    <Link className="p-2">
                                        <span>Setting</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="p-2 cursor-pointer">
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="flex w-full mt-16">
            <div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed">
                <div className="flex items-center justify-start gap-5 px-2 py-2 mb-3">
                    <img 
                        className="w-[40px] h-[40px] rounded-full" 
                        src="https://www.psdgraphics.com/file/user-icon.jpg" 
                        alt="profile"
                    />
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-[#e0dddd] font-bold text-md">Suryakanta</span>
                        <span className="text-[#c4c0c0] text-sm">Free</span>
                    </div>
                </div>

                <ul className="flex flex-col gap-2 py-4">
                    <li>
                        <Link to='/' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/' ? 'bg-[#3b3b3b]' : ''} rounded-[4px]`}>
                            <span className="text-xl "> <IoHome /> </span>
                            <span className="font-medium"> Home </span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/templates' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/templates' ? 'bg-[#3b3b3b]' : ''} rounded-[4px]`}>
                            <span className="text-xl "> <HiTemplate /> </span>
                            <span className="font-medium"> Template </span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/projects' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/projects' ? 'bg-[#3b3b3b]' : ''} rounded-[4px]`}>
                            <span className="text-xl "> <FaProjectDiagram /> </span>
                            <span className="font-medium"> Project </span>
                        </Link>
                    </li>
                </ul>

            </div>

            <div className="ml-[300px] w-[calc(100%-300px]">
                <div className="py-4 pr-4">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout;