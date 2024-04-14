import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Home = () => {

    const [ type, setType ] = useState('')
    const [ show, setShow ] = useState(false);
    const [ state, setState ] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`);
        setState({
            ...state,
            [name]: value
        });
    }

    return (
      <div className="bg-[#18191b] min-h-screen w-full">

        <div className={`w-screen ${show ? 'visible opacity-100': 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>
            <div className="w-[350px] m-auto px-6 py-4 rounded-md relative bg-[#323335]">
                <div onClick={()=> setShow(false)} className="absolute text-xl text-white cursor-pointer right-4 top-4"> <IoCloseSharp /> </div>
                <h2 className="pb-4 text-xl text-center text-white">Login or Sing up in seconds</h2>

                {
                    type === 'login' && <form>
                    <div className="flex flex-col gap-3 mb-3 text-white">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter email" 
                            value={state.email} 
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"    
                        />
                    </div>

                    <div className="flex flex-col gap-3 mb-3 text-white">
                        <label htmlFor="email">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter password" 
                            value={state.password} 
                            onChange={handleChange} 
                            className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"    
                        />
                    </div>

                    <div>
                        <button className="w-full px-3 py-2 text-white rounded-md outline-none bg-gradient-to-r from-blue-500 to-purple-500">Log in</button>
                    </div>

                    <div className="flex items-center justify-between px-3 py-4">
                        <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                        <div className="text-white w-[6%] text-center flex pb-1 pl-1 pr-1">or</div>
                        <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                    </div>

                    <div>
                        <button className="w-full px-3 py-2 mb-3 text-white bg-orange-500 rounded-md">
                            <div className="flex items-center justify-center">
                                <span className="mr-2"> <FaGoogle /> </span>
                                <span>Login in with gmail</span>
                            </div>
                        </button>
                    </div>

                    <div>
                        <button className="w-full px-3 py-2 text-white bg-blue-500 rounded-md ">
                        <div className="flex items-center justify-center">
                                <span className="mr-2"> <FaFacebookF /> </span>
                                <span>Login in with facebook</span>
                            </div>
                        </button>
                    </div>

                </form>
                }

                {
                    type === 'signup' && <form>
                    <div className="flex flex-col gap-3 mb-3 text-white">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter email" 
                            value={state.email} 
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"    
                        />
                    </div>

                    <div className="flex flex-col gap-3 mb-3 text-white">
                        <label htmlFor="email">Name</label>
                        <input 
                            type="name" 
                            name="name" 
                            id="name" 
                            placeholder="Enter name" 
                            value={state.name} 
                            onChange={handleChange}
                            className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"    
                        />
                    </div>

                    <div className="flex flex-col gap-3 mb-3 text-white">
                        <label htmlFor="email">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter password" 
                            value={state.password} 
                            onChange={handleChange} 
                            className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"    
                        />
                    </div>

                    <div>
                        <button className="w-full px-3 py-2 text-white rounded-md outline-none bg-gradient-to-r from-blue-500 to-purple-500">Sign up</button>
                    </div>

                    <div className="flex items-center justify-between px-3 py-4">
                        <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                        <div className="text-white w-[6%] text-center flex pb-1 pl-1 pr-1">or</div>
                        <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                    </div>

                    <div>
                        <button className="w-full px-3 py-2 mb-3 text-white bg-orange-500 rounded-md">
                            <div className="flex items-center justify-center">
                                <span className="mr-2"> <FaGoogle /> </span>
                                <span>Login in with gmail</span>
                            </div>
                        </button>
                    </div>

                    <div>
                        <button className="w-full px-3 py-2 text-white bg-blue-500 rounded-md ">
                        <div className="flex items-center justify-center">
                                <span className="mr-2"> <FaFacebookF /> </span>
                                <span>Login in with facebook</span>
                            </div>
                        </button>
                    </div>

                </form>
                }

                
            </div>
        </div>

        <div className="bg-[#252627] shadow-md">
            <div className="w-[93%] m-auto py-3">
                <div className="flex items-center justify-between">
                    <div className="w-[120px] h-[48px] text-white">
                        <img className="w-full h-full" src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="logo"/>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={()=> { setType('login'); setShow(true)}} className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">Log in</button>
                        <button onClick={()=> { setType('signup'); setShow(true)}} className="py-2 w-[80px] text-center bg-purple-500 text-white transition-all focus:bg-purple-600 rounded-[5px] font-medium">Sign up</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-full text-center">
            <div className="py-[168px] flex justify-center items-center flex-col gap-6">
                <h2 className="text-5xl text-[#c7c5c5] font-bold">What will you design today ?</h2>
                <span className="text-[#aca9a9] text-2xl font-medium">Canva makes it eay to create and share professional design.</span>
                <button onClick={()=> { setType('signup'); setShow(true)}} className="py-2 w-[200px] text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-[5px] font-medium">Sing up for free</button>
            </div>
          </div>
      </div>
    )
  }
  
  export default Home