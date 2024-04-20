import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div>
      <div className="h-[85vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
            <div className="grid w-full grid-cols-2 gap-2">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((img, i) => <Link className="w-full h-[90px] overflow-hidden cursor-pointer rounded-sm" key={i}>
                        <img className="object-fill w-full h-full" src="" alt="upload image"/>
                    </Link>)
                }
            </div>
        </div>
    </div>
  )
}

export default Projects