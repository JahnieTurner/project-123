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
    background('#969969A97');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}