function startClassification(){
    //navigator.mediadevices.getUsermedia is to help to check the devices and get permision //can recognize audio or not and get the permission from the user to access the device
navigator.mediaDevices.getUserMedia({
    audio: true
});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/czmiCGi5w/model.json", model_ready);
}

function model_ready(){
    classifier.classify(got_result);
}

function got_result(error, results){
    if(error){
    console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255);
        random_number_g = Math.floor(Math.random() * 255);
        random_number_b = Math.floor(Math.random() * 255);

        document.getElementById('sound').innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById('Accuracy').innerHTML = 'I can hear - ' + (results[0].cofidence * 100).toFixed(2) + '%';

        document.getElementById('sound').style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")" ;
        document.getElementById('Accuracy').style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")" ;

        img = document.getElementById('aliens-01.png')
        img2 = document.getElementById('aliens-02.png')
        img3 = document.getElementById('aliens-03.png')
        img4 = document.getElementById('aliens-04.png')
    }
}