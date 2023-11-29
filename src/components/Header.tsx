import { useState } from "react"
import Uploader from "./Uploader"
const Header = () => {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("No file selected");

    return (
        <div className='border-solid border-t-4 border-indigo-500 rounded-md p-4 mt-3 bg-white'>
            <div className='flex justify-between '>
                <div className="flex flex-col mt-6">
                    <label className="text-gray-700 font-bold">Enter Title</label>
                    <input type="text" className="border-solid border-2 border-gray-200 rounded-md p-2  bg-white w-80" placeholder="Enter Title" />
                </div>
                <div className="">
                    <Uploader image={image} setImage={setImage} fileName={fileName} setFileName={setFileName} />
                </div>
            </div>
        </div>
    );
};

export default Header