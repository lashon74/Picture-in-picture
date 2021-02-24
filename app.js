const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Selects a media stream data waiting for uses to select a window to share passing the data to srcObject and when it is loaded the video will play
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
     // Catch error here
        console.log("Whoops, error here:", error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
})
// On Load
selectMediaStream();