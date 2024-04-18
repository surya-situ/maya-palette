/* eslint-disable no-unused-vars */
import { useState } from "react";

import { BsGrid1X2 } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiTextTLight } from "react-icons/pi";
import { FaFolderOpen } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Header from "../components/Header";
import TemplateDesign from "../components/TemplateDesign";
import MyImages from "../components/MyImages";
import Projects from "../components/Projects";
import Image from "../components/Image";

const Main = () => {

    const [state, setState] = useState('');

    const [show, setShow ] = useState({
        status: true,
        name: ''
    })

    const setElement = (type, name) => {
        setState(type)
        setShow({
            show: false,
            name: 'design'
        });
    };


  return (
    <div className="h-screen bg-black min-w-screen">
        <Header />

        <div className="flex h-[calc(100%-60px)] w-screen">
            <div  className="w-[80px] bg-[#18191b] z-50 h-full text-gray-400 overflow-y-auto">

                <div 
                    onClick={() => setElement('design', 'design')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'design' ? 'bg-[#2522627]' : ''} `
                    }
                >
                    <span className="text-2xl"> <BsGrid1X2 /> </span>
                    <span className="text-xs font-medium">Design</span>
                </div>

                <div 
                    onClick={() => setElement('shape', 'shape')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'shape' ? 'bg-[#2522627]' : ''}`
                    }
                >
                    <span className="text-2xl"> <FaShapes /> </span>
                    <span className="text-xs font-medium">Shapes</span>
                </div>

                <div 
                    onClick={() => setElement('image', 'uploadImage')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'uploadImage' ? 'bg-[#2522627]' : ''}`
                    }
                >
                    <span className="text-2xl"> <FaCloudUploadAlt /> </span>
                    <span className="text-xs font-medium">Upload</span>
                </div>

                <div 
                    onClick={() => setElement('text', 'text')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'text' ? 'bg-[#2522627]' : ''}`
                    }
                >
                    <span className="text-2xl"> <PiTextTLight /> </span>
                    <span className="text-xs font-medium">Text</span>
                </div>

                <div 
                    onClick={() => setElement('project', 'project')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'project' ? 'bg-[#2522627]' : ''}`
                    }
                >
                    <span className="text-2xl"> <FaFolderOpen /> </span>
                    <span className="text-xs font-medium">Project</span>
                </div>

                <div 
                    onClick={() => setElement('initImage', 'images')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'images' ? 'bg-[#2522627]' : ''}`
                    }
                >
                    <span className="text-2xl"> <FaRegImage /> </span>
                    <span className="text-xs font-medium">Images</span>
                </div>
                
                <div 
                    onClick={() => setElement('background', 'background')} 
                    className={
                        `w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 
                        ${show.name === 'background' ? 'bg-[#2522627]' : ''}`
                    }
                >
                    <span className="text-2xl"> <RxTransparencyGrid /> </span>
                    <span className="text-xs font-medium">Background</span>
                </div>
            </div>

            <div className="h-full w-[calc(100%-75px)]">
                <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                    <div 
                        onClick={()=> setShow({name: '', status: true})}
                        className="flex absolute justify-center items-center bg-[#252627] text-slate-300 w-[20px] -right-2 top-[40%] cursor-pointer h-[100px] rounded-full "
                    >
                        <MdKeyboardArrowLeft />
                    </div>
                    
                    {
                        state === 'design' && <div>
                            <div className="grid grid-cols-2 gap-2">
                                <TemplateDesign />
                            </div>
                        </div>
                    }

                    {
                        state === 'shape' && <div className="grid grid-cols-3 gap-2">
                            <div className="h-[90px] bg-[#3c3c3d] cursor-pointer"></div>
                            <div className="h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"></div>
                            <div style={{clipPath: 'polygon(50% 0, 100% 100%, 0 100%)'}} className="h-[90px] bg-[#3c3c3d] cursor-pointer "></div>
                        </div>
                    }

                    {
                        state === 'image' && <MyImages />
                    }

                    {
                        state === 'text' && <div>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white rounded-md text-xl ">
                                    <h2>Add text</h2>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        state === 'project' && <div>
                            <Projects />
                        </div>
                    }

                    {
                        state === 'initImage' && <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
                            <Image />
                        </div>
                    }

                    {
                        state === 'background' && <div className="h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
                            <div className='grid grid-cols-2 gap-2'>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((img, i) => <div className="w-full h-[90px] overflow-hidden cursor-pointer rounded-sm" key={i}>
                                    <img className="object-fill w-full h-full" src="" alt="upload image"/>
                                </div>)
                            }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main