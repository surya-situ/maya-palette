import { useRef } from "react";
import { useLocation } from "react-router-dom"
import CreateComponent from "./CreateComponent";

const CreateDesign = () => {

    const ref = useRef();

    const { state } = useLocation();
   
    const obj = {
        name: 'main_frame',
        type: 'rectangle',
        id: Math.floor((Math.random() * 100 ) +  1),
        height: state.height,
        width: state.width,
        z_index: 1,
        color: 'black',
        image: '' 
    }

    return (
        <div className="relative flex items-center justify-center w-screen h-screen">
            <div ref={ref} className="relative w-auto h-auto overflow-hidden ">
                <CreateComponent info={obj} current_component={{}} />
            </div>
        </div>
    )
}

export default CreateDesign