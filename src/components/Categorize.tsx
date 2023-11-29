import { MdAdUnits, MdAdd, MdClose, MdDragIndicator } from "react-icons/md";

const Categorize = () => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md p-4 mt-3 bg-white">
        {/* <h4 className="font-semibold">Categorize</h4> */}
        <div className="flex flex-col mt-2">
            <div className="flex">
            <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer"/>
            Question 1
            </div>
            <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-2  bg-white w-80" placeholder="Enter Question" />
        </div>
       
        {/* Categories */}
        <div className="mt-4">
            <h4 className="font-semibold text-slate-700 mb-4">Categories</h4>
            <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                    <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/>
                    <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Option 1" />
                    <MdClose color='red' size={25} className="cursor-pointer mt-1"/>
                </div>
                
                <div className="flex gap-1">
                    <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/>
                    <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Option 1" />
                    <MdClose color='red' size={25} className="cursor-pointer mt-1"/>
                </div>

                <MdAdd color='black' size={25} className="cursor-pointer mt-1 ml-20"/>
            </div>
        </div>
       
       
       
       <div className="mt-4 flex justify-between w-[480px]">
            {/* Items */}
            <div className="mt-4">
                <h4 className="font-semibold text-slate-700 mb-4">Items</h4>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1">
                        <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/>
                        <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Item 1" />
                        <MdClose color='red' size={25} className="cursor-pointer mt-1"/>
                    </div>
                    
                    <div className="flex gap-1">
                        <MdDragIndicator color='#1475cf' size={25} className="cursor-pointer mt-1"/>
                        <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40" placeholder="Item 2" />
                        <MdClose color='red' size={25} className="cursor-pointer mt-1"/>
                    </div>

                    <MdAdd color='black' size={25} className="cursor-pointer mt-1 ml-20"/>
                </div>
            </div>

        {/* Belongs to */}
        <div className="mt-4">
                <h4 className="font-semibold text-slate-700 mb-4">Belongs to</h4>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1">
                         <select className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40">
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                            <option value="4">Category 4</option>
                        </select>
                    </div>
                    
                    <div className="flex gap-1">
                        <select className="border-solid border-2 border-gray-200 rounded-md p-[2px]  bg-white w-40">
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                            <option value="4">Category 4</option>
                        </select>       
                        
                    </div>

                    
                </div>
            </div>
       </div>
       


    </div>
  )
}

export default Categorize