import React from 'react';
import {WebCamWebAPI} from "@/pages/test/camera";



const CamTest: React.FC = ()=> {
  const filetypes = ['.jpg','.esp']
  return (
    <WebCamWebAPI fileTypes={filetypes}/>
  )
}

export default CamTest;
