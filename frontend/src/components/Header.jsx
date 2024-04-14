import { Link } from "react-router-dom"


const Header = () => {

    const saveImage = () => {};

    const downloadImage = () => {};

    return (
        <div className="h-[60px] bg-gradient-to-t from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
            <div className="flex items-center justify-between h-full px-10 text-gray-300">
                <Link to='/'>
                    <img src="https://rb.gy/qddwnz" />
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