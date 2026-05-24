import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageView = () => {
  const [images, setImages] = useState([
    {
      _id: 1,
      image:
        "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2025%2F04%2F28%2F19%2F59%2Ffemale-model-9565629_640.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Feditorials%2F&docid=WG5w-7mElK0EvM&tbnid=wQ1s3rPfCRUWGM&vet=12ahUKEwi507LQ1s2UAxVjiK8BHfX0Axg4ChCc8A56BAggEAE..i&w=427&h=640&hcb=2&ved=2ahUKEwi507LQ1s2UAxVjiK8BHfX0Axg4ChCc8A56BAggEAE",
      caption: "Nice one",
    },
  ]);


  async function getImages() {
    const result = await axios
      .get("http://localhost:3000/viewImages")
      .then((res) => {
        setImages(res.data.imageData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getImages();
  }, []);
  console.log(images);


  return (
    <div className="bg-gray-400">
      { images.length > 0 ? (
        images.map((image) => (<div key={image._id}>
            <img src={image.image} alt="picture" />
            <h3>{image.caption}</h3>
          </div>))
      ) : 
        <h3> There is no data available right now.</h3>
      }
    </div>
  );
};

export default ImageView;
