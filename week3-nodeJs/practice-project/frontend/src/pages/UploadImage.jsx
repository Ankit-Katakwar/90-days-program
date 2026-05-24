import React from "react";

import axios from "axios";

const UploadImage = () => {
  async function submitEvent(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    await axios
      .post("http://localhost:3000/uploadImage", formData)
      .then((res) => {
        alert("Image uploaded successfully.");
      })
      .catch((err) => {
        (alert("Image Failed to upload,Try again."), console.log(err));
      });
  }
  return (
    <div>
      <section>
        <h1>Upload Image</h1>

        <form
          onSubmit={submitEvent}
          className="p-10 bg-gray-500 border-transparent border-2 hover:border-black flex flex-col"
        >
          <input className="mb-4" type="file" accept="images/*" name="image" />
          <input
            type="text"
            placeholder="Enter your caption here...."
            name="caption"
          />
          <button  className="bg-blue-200 p-4 rounded w-fit mt-4 active:scale-95">
            Upload
          </button>
        </form>
      </section>
    </div>
  );
};

export default UploadImage;
