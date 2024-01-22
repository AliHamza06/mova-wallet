import React, { useState } from 'react';
import profile from "/src/assets/images/profile.png";
const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(profile);

  const handleImageChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='uploadImageMainDiv'>
      <div className='uploadedImageGroup'>
        <div className='uploadedImageDiv'>
          {selectedImage && <img src={selectedImage} alt="Selected"/>}
        </div>
        <div className='userNameDiv'>
          <h4>Your Avatar</h4>
          <p>Profile picture size: 400px x 400px</p>
        </div>
      </div>
      <div>
          <label htmlFor="imageInput" className='imageImageLabel'>
                Upload new photo
            </label>
            <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }}
            />
      </div>
    </div>
  );
};

export default ImageUpload;
