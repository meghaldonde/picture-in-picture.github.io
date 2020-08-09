const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promt to select media stream, pass tovideo element then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }

    } catch (error) {
        console.log('Whoops something went wrong: ' + error);
    }
}

button.addEventListener('click', async() => {
        //Disable button
        button.disabled = true;
        //Start Picture in picture
        await videoElement.requestPictureinPicture();
        //reset button
        button.disabled = false;

    })
    //onLoad
selectMediaStream();