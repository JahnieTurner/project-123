function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = creteCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('poseNet is initialized!');
}

function draw() {
    background('#6C91C2');
    textSize(difference)
    fill('#FFE787')
    text('jahnie', 50, 400)
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
    }

}