<script>

function UploadFile() {
    var uploadButton = document.getElementById('upload-button');
    uploadButton.onclick = function () {
        var formData = new FormData();

        // sending to this location
        //var action = '/result';
        var action = form.getAttribute('action')
        
        var fileInput = document.getElementById('csv-select');
        
        var file = fileInput.files[0];
        
        formData.append('csv-file', file);

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

</script>
