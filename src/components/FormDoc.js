import { Image } from '@aws-amplify/ui-react';
import React, { useState, useRef } from 'react';

export const  FormDoc = ({img, setImage}) => {
    // const [image, setImage] = useState('https://via.placeholder.com/300'); // Initial image URL
    const fileInputRef = useRef(null);

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }

    function handleImageClick() {
        fileInputRef.current.click();
    }

    return (
        <div style={{ position: 'relative', width: '300px', height: '300px', cursor: 'pointer' }}>
            <Image 
                src={img}
                alt="Upload"
                onClick={handleImageClick}
                style={{ width: '100%', height: '100%' }}
            />
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}

// export default ImageUploader;




// export const FormDoc = ({img}) => {
//   return (
//     <Image
//       width="100%"
//       height="100%"
//       objectFit="cover"
//       objectPosition="50% 50%"
//       src={img}

//       alt="insert an image here "
//     />
//   );
// };
