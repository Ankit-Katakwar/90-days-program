const { ImageKit } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: "private_KlGqp4ZLxTWl5MAiM/SsVf0gL4o=",
});

async function imageUpload(buffer) {
  const response = await client.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return response;
}

module.exports = imageUpload;
