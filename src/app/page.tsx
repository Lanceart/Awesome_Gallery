'use client';

import Image from 'next/image'
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';
type UploadResult ={
  info:{
    public_id:string
  },
  event:'success',
}


export default function Home() {
  const [ImageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
          onUpload={(result: UploadResult)=>{
            setImageId(result.info.public_id);
          }}
          uploadPreset="dnqh8wkdj" />

    {ImageId &&  <CldImage 
        width="960"
        height="600" 
        alt= "descibe "
        src={ImageId}
        sizes='100vw'      
      /> 
    }
    </main>
  );
}
