import React, { useState, useRef } from 'react';
// import { DataStore, Storage } from 'aws-amplify';
import { uploadData , getUrl} from 'aws-amplify/storage';

import { FormDoc } from "./FormDoc";
import { createAudioRec } from '../graphql/mutations';
import { generateClient } from "aws-amplify/api";
import { Card } from '@aws-amplify/ui-react';
import  "./AudioRec.css";
const client = generateClient()



const AudioRec = () => {
  const [img, setImage] = useState("./dummy.png");
  const [aud, setAudio] = useState(null);
  const [txt, setTxt] = useState('');

  const uploadToS3 = async (file, fType) => {

    try {
        const result = await uploadData({
          key: `${Date.now()}-${file.name}`  , // ${fType}/${file}`
          data: file,
          options: {
            contentType: fType // contentType 
          }
        }).result;
        // fType.startsWith("audio")? setAudio(result["key"]) : setImage(result["key"]);
        //  getUrl({ key: file.name }).then(setImage)
        if (fType.startsWith("audio"))
         setAudio(result["key"]) 
        else setImage(result["key"]);
        // console.log(`${file.type} : `,result["key"]);

      } catch (error) {
        console.log('Error : ', error);
      }
  };

// const signedURL = await getUrl({ key: updatedSong.coverArtKey });



  
  const saveToDataStore = async (imageKey, audioKey) => {
    
   await  client.graphql({
    query: createAudioRec,
    variables: {
        input: {
		"txt": txt,
		"imageUrl": imageKey ,//imageKey.name,
		"audioUrl":  audioKey
	}
    }
})};


//   const handleImageChange = (event) => {

//     setImage(event?.target?.files[0]);
 
//   };

  const handleAudioChange = (event) => {
    setAudio(event.target.files[0]);

  };

  const ref = useRef(null);

  const handleTxtAreaChange = (e) => {
    setTxt(e.target.value)
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const a=  uploadToS3(img, 'image/*' );
    await uploadToS3(aud, 'audio/*');
    console.log(`${img.lastModified}-${img.name}` , a);

    await saveToDataStore(`${img.lastModified}-${img.name}`, `${aud.lastModified}-${aud.name}`);
  
    setImage( "./dummy.png")
    setAudio(null)
    setTxt("")
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        {/* <button>

        <input type="file" accept="image/*" onChange={handleImageChange} />
        </button> */}
        
        <input type="file" accept="audio/*" onChange={handleAudioChange} />
        <Card  className='ft-size'>
        <FormDoc  img={img} setImage={setImage} />
        <textarea style={{width:430}} value={txt}  ref={ref} onChange={handleTxtAreaChange} />
        </Card>  
        <button type="submit">Upload and Save</button>
      </form>

    </div>
  );
};

export default AudioRec;
