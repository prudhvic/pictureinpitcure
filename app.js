let btn = document.getElementById("start");
let video = document.getElementById("video");
let startMedia = async () => {
  try {
    let media = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = media;
    console.log(media);
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.log(err);
  }
};
startMedia();
btn.addEventListener("click", async () => {
  btn.disabled = !false;
  await video.requestPictureInPicture();
  btn.disabled = !true;
});
