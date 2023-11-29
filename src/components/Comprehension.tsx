import { MdAdd, MdClose, MdDragIndicator } from "react-icons/md"


const Comprehension = () => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md p-8 mt-3 bg-white">
       <div className="flex flex-col">
          <label className="text-gray-700 font-bold">Passage <span className="font-semibold text-red-500">*</span></label>
          <textarea className="border-solid border-2 border-gray-200 rounded-md p-2  bg-white w-3/4 h-40" placeholder="Enter the passage here" />
       </div>

        {/* Questions */}
        <div className="mt-4">
            <h4 className="font-semibold text-slate-700 mb-4">Questions</h4>
            <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                    {/* <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/> */}
                    <input type="radio" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-5" />
                    <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Question 1" />
                    <MdClose color='red' size={25} className="cursor-pointer mt-1"/>
                </div>
                
                <div className="flex gap-1">
                    {/* <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/> */}
                    <input type="radio" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-5" />
                    <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Question 2" />
                    <MdClose color='red' size={25} className="cursor-pointer mt-1"/>
                </div>

                <MdAdd color='black' size={25} className="cursor-pointer mt-1 ml-20"/>
            </div>
        </div>       
    </div>
  )
}

export default Comprehension