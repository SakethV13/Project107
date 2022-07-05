//https://teachablemachine.withgoogle.com/models/bpXSLR9ga/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/QkmqL8jp1/model.json', modelReady);



}

function modelReady(){
    classifier.classify(gotResults);
}