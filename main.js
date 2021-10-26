nX = 0;
nY = 0;

function preload()
{
    m = loadImage("mustache.png")
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Loaded!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nX = results[0].pose.nose.x-15;
        nY = results[0].pose.nose.y;
    }
}


function draw()
{
    image(video, 0, 0, 300, 300);
    image(m, nX, nY, 30, 30);
}

function takeSnapshot()
{
    save("IhaveAmustache!.png");
}

