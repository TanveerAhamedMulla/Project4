function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form has been Submitted :::")
    let reqBody = {
        theText: formText
    };

    fetch('http://localhost:8082/testing', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('text').innerHTML = res.text
        document.getElementById('polarityconfidende').innerHTML = res.polarity_confidence
        document.getElementById('subjectivityconfidence').innerHTML = res.subjectivity_confidence
        console.log(res);
        alert(dataText);
    })
}

export { handleSubmit }
