window.onload = function(){
    console.log("window.onload");
    UploadFile();
}

function UploadFile() {
    var uploadButton = document.getElementById('upload-button');
    console.log(uploadButton);
    uploadButton.onclick = function () {
        
        var formData = new FormData();
        
        var fileInput = document.getElementById('csv-select');
        
        var file = fileInput.files[0];
        
        console.log("File name >", file.name);
        
        formData.append('csv-file', file);
        
        // sending to location defined in form
        var form = document.getElementById('file-form');
        var action = form.getAttribute('action')
        
        console.log("Sending to >", action);

        sendXHRequest(formData, action);
    }
}

function sendXHRequest(formData, uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', uri, true);
    
    // Send!
    xhr.send(formData);
}
