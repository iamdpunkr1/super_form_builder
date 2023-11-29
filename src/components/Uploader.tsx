import React from 'react';
import './uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

type UploaderProps = {
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
};

const Uploader: React.FC<UploaderProps> = ({ fileName, setFileName, image, setImage }) => {
  return (
    <main>
      <form
        className='uploadForm'
        onClick={() => {
          const inputElement = document.querySelector('.input-file') as HTMLInputElement;
          inputElement.click();
        }}
      >
        <input
          type='file'
          accept='image/*'
          className='input-file'
          hidden
          onChange={({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
            files && files[0] && setFileName(files[0].name);
            if (files) {
              const file = files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setImage(reader.result as string);
              };
            }
          }}
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color='#1475cf' size={40} />
            <p className='text-xs text-center'>Browse files to upload</p>
          </>
        )}
      </form>
      <div className='flex justify-center mt-2 cursor-pointer'>
      <MdDelete color='#1475cf' size={20}
            onClick={() => {
            //   setFileName('No Selected File');
              setImage(null);
            
            }}
          />
     </div>
      {/* <section className='uploaded-row'>
        <AiFillFileImage color='#1475cf' />
        <span className='upload-content'>
          {fileName}
          <MdDelete
            onClick={() => {
              setFileName('No Selected File');
              setImage(null);
            }}
          />
        </span>
      </section> */}
    </main>
  );
};

export default Uploader;
