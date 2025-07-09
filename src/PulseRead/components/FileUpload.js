import React, {useState} from 'react';
import axios from 'axios';
import '../stylesheets/fileupload.css';

function FileUpload(){
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) return;

        console.log("Uploading:", file.name);
        setStatus('Uploading...');

        try {
            // Request presigned URL from backend
            const response = await axios.get('https://78uh12wvn2.execute-api.us-west-2.amazonaws.com/prod/get-presigned-url', {
                params: {filename: file.name}
            });

            const uploadURL = response.data.url;

            // Upload file directly to S3
            await axios.put(uploadURL, file, {
                headers: {'Content-Type': 'text/plain'}
            });

            setStatus('Upload complete! Summary will be ready soon.');
        } catch (err) {
            console.error(err);
            setStatus('Upload failed.');
        }
    };

    return (
        <div className='PulseRead-upload-container'>
            <input className='PulseRead-choose-file' type="file" accept='.txt' onChange={handleFileChange} />
            <button className='PulseRead-submit-button' onClick={uploadFile}>Submit</button>
            <p className='PulseRead-upload-status'>{status}</p>
        </div>
    );
}

export default FileUpload;