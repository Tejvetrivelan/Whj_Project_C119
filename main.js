console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2ElgfpAOL/model.json',modelLoaded);

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
