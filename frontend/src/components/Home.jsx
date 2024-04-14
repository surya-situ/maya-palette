import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaTrash } from "react-icons/fa";


const Home = () => {

  const [ show , setShow ] = useState(false);

  const navigate = useNavigate()

  const [ state, setState ] = useState({
    weight: 0,
    height: 0
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value 
    })
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mdTablet: {
      breakpoint: { max: 992, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const create = () => {
    navigate('/design/create', {
      state: {
        type: 'create',
        width: state.width,
        height: state.height
      }
    })
  }

  return (
    <div className="pt-5 ">
      <div className="w-[calc(100vw-350px)] flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden">
        <button onClick={() => setShow(!show)} className="px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[5px] font-medium hover:bg-[#8b3dffd3] absolute top-3 right-3">Custom size</button>

        <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white rounded-md ${show ? 'visible opacity-100' : 'invisible opacity-30'} transition-all duration-500`}>
          <div className="grid grid-cols-2 gap-3 pb-4 ">
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="width">Width</label>
              <input onChange={inputHandle} type="number" name="width" id="height" className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md" />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="height">Height</label>
              <input onChange={inputHandle} type="number" name="height" id="height" className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md" />
            </div>
          </div>

          <button onClick={create} className="w-full px-4 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[5px] font-medium hover:bg-[#8b3dffd3]">Create a design</button>
        </div>

        <div>
          <h2 className="text-3xl pb-[10px] pt-6 text-white font-semibold">What will you design today ?</h2>
        </div>
        
      </div>

      {/* home design part */}
      <div className="w-[calc(100vw-350px)]">
        
        <h2 className="text-2xl pb-[10px] pt-3 text-white font-semibold">Your recent designs</h2>

        <div>
          <Carousel autoPlay={true} infinite={true} responsive={responsive} transitionDuration={500}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => <div className="relative group w-full h-[150px] px-2" key={i}>

                <Link className="w-full h-full block bg-[#ffffff12] p-4 rounded-md">
                  <img className="w-full h-full overflow-hidden rounded-md" src="https://rb.gy/b674nd" alt={`design ${i}`}/>
                </Link>

                <div className="absolute hidden p-2 text-red-500 transition-all duration-500 cursor-pointer top-2 right-2 group-hover:block"><FaTrash /></div>
              </div>)
            }
          </Carousel>
        </div>
        
      </div>

     
    </div>
  )
}

export default Home