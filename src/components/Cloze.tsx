import { MdClose, MdDragIndicator } from "react-icons/md"

const Cloze = () => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md p-8 mt-3 bg-white">
        {/* Preview */}
        <div className="flex flex-col mt-2">
            <h5 className="">Preview <span className="font-semibold text-red-500">*</span></h5>
            <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-2  bg-white w-80" placeholder="Preview will be displayed here" readOnly/>
        </div>

        {/* Sentence */}
        <div className="flex flex-col mt-16">
            <h5 className="">Sentence <span className="font-semibold text-red-500">*</span></h5>
            <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-2  bg-white w-80" placeholder="Enter the sentence here" />
        </div>

        <div className="flex flex-col gap-3 mt-2">
                    <div className="flex gap-1">
                         
                        <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/>
                        <input type="checkbox" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-5" /> 
                        <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Item 1" />
                    </div>
                    
                    <div className="flex gap-1">
                        <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/>
                        <input type="checkbox" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-5" /> 
                        <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Item 2" />
                    </div>   
        </div>
    </div>
  )
}

export default Cloze