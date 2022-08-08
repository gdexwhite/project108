https://teachablemachine.withgoogle.com/models/fohiFtWDW/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fohiFtWDW/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotresults)
}

function gotresults(error, results){
    if (error) {
        console.error(error)
    }  else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1
        random_number_g = Math.floor(Math.random() * 255) + 1
        random_number_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %"
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"

        img = document.getElementById('result-image')

        if (results[0].label == "Dog") {
            img.src = 'cute_dog_img.jpg'
        }else if (results[0].label == "Cow") {
            img.src = 'cow_img.jpg'
        }else if (results[0].label == "Snake") {
            img.src = 'animals_hero_snakes.jpg'
        } else {
            img.src = 'How-to-draw-a-ear-step-by-step.jpg'
        }
    }
}
