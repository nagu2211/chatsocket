import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
const UploadFile = () => {
  const [archive, setArchive] = useState();
 
  async function uploadArchive() {
    const { value: file } = await Swal.fire({
        title: "Select image",
        input: "file",
        inputAttributes: {
          "accept": "image/*",
          "aria-label": "Upload your profile picture"
        }
      });
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Your uploaded picture",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture"
          });
        };
        reader.readAsDataURL(file);
        setArchive(file)
      }
  }
  return (
    <>
      <button className="btn-archive" type="button" id="btn-archive" onClick={() => uploadArchive()}>
        <i className="bi bi-paperclip"></i>
      </button>
    </>
  );
};

export default UploadFile;
