import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"


const Header = () => {

    const saveImage = () => {};

    const downloadImage = () => {};

    return (
        <div className="h-[60px] bg-gradient-to-r from-[#000000] via-[#101010] to-[#242425] w-full">
            <div className="flex items-center justify-between h-full px-8 text-gray-300">
                <Link to='/'>
                    <img className="w-40" src={Logo} alt="Header logo"/>
                </Link>

                <div className="flex items-center justify-center gap-2 text-gray-300 ">
                    <button onChange={ saveImage } className="px-3 py-[6px] outline-none bg-[#252627] rounded-md">save</button>
                    <button onChange={ downloadImage } className="px-3 py-[6px] outline-none bg-[#252627] rounded-md">download</button>
                </div>
            </div>
        </div>
    )
}

export default Header