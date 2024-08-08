import React from 'react';
import Swal from 'sweetalert2';

const UploadFile = ({ onFileSend }) => {
  const uploadArchive = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      preConfirm: (file) => {
        return file;
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
          showCancelButton: true,
          confirmButtonText: 'Send',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            onFileSend(file);
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button className="btn-archive" type="button" id="btn-archive" onClick={uploadArchive}>
        <i className="fa-solid fa-image"></i>
      </button>
    </>
  );
};

export default UploadFile;
