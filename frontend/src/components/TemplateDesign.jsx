

const TemplateDesign = () => {
  return (
    <div>
        {
            [1,2,3,4].map((d, i) => <div className="group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer" key={i}>
                <img className="w-full h-full overflow-hidden rounded-md" src="" alt="designs"/>
            </div>)
        }
    </div>
  )
}

export default TemplateDesign