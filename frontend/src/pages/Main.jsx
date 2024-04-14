import Header from "../components/Header";

import { BsGrid1X2 } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiTextTLight } from "react-icons/pi";
import { FaFolderOpen } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { RxTransparencyGrid } from "react-icons/rx";

const Main = () => {
  return (
    <div className="h-screen bg-black min-w-screen">
        <Header />

        <div className="flex h-[calc(100%-60px)] w-screen">
            <div className="w-[80px] bg-[#18191b] z-50 h-full text-gray-400 overflow-y-auto">
                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <BsGrid1X2 /> </span>
                    <span className="text-xs font-medium">Design</span>
                </div>

                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <FaShapes /> </span>
                    <span className="text-xs font-medium">Shapes</span>
                </div>

                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <FaCloudUploadAlt /> </span>
                    <span className="text-xs font-medium">Upload</span>
                </div>

                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <PiTextTLight /> </span>
                    <span className="text-xs font-medium">Text</span>
                </div>

                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <FaFolderOpen /> </span>
                    <span className="text-xs font-medium">Project</span>
                </div>

                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <FaRegImage /> </span>
                    <span className="text-xs font-medium">Images</span>
                </div>
                
                <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                    <span className="text-2xl"> <RxTransparencyGrid /> </span>
                    <span className="text-xs font-medium">Background</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main