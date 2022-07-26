video="";
status1="";

function setup(){
    canvas=createCanvas(380,340);
    canvas.center();
}

function preload(){
    video=createVideo("video.mp4");
    video.hide();

}

function draw(){
    image(video,0,0,340,340);

}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded");
     status1="true";
 video.loop();
 video.speed(1);
 video.volume(0);
}



