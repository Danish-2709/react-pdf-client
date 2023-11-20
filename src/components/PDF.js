import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

export default function PDF() {
    const firebaseConfig = {
        apiKey: "AIzaSyBGr3sp5HaXF2LAQ68q8wPPs_H1tbQoX_o",
        authDomain: "bulkuploadfile-1cbe9.firebaseapp.com",
        projectId: "bulkuploadfile-1cbe9",
        storageBucket: "bulkuploadfile-1cbe9.appspot.com",
        messagingSenderId: "388740189346",
        appId: "1:388740189346:web:b13cc3c3aba0572f8fdbfb",
        measurementId: "G-MQ0YG3VBEZ"
      };

    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);

    const [upldFile, setUpldFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const removeSuccessMessage = () => {
        setSuccessMessage('');
        setShowModal(false);
    };

    const handleupldTcChange = (e) => {
        const selectedPdf = e.target.files[0];
        if (selectedPdf) {
            setUpldFile(selectedPdf);

            const reader = new FileReader();
            reader.onload = (event) => {
                // Any additional processing you might want to do with the file
            };
            reader.readAsDataURL(selectedPdf);
        } else {
            setUpldFile(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if a file is selected
        if (!upldFile) {
            console.error('No file selected');
            return;
        }

        const storageRef = ref(storage, 'Uploads/' + upldFile.name);

        try {
            // Upload the file
            await uploadBytes(storageRef, upldFile);

            setUpldFile(null); // Clear the uploaded file after successful upload

            setSuccessMessage('File uploaded successfully.');
            setShowModal(true);
            setTimeout(() => {
                removeSuccessMessage();
            }, 2000);
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error message or display error to the user
        }
    };

    return (
        <>
            {showModal && <div className="modal-backdrop show"></div>}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="modal-header">
                            <h5 className="modal-title">Success Message</h5>
                        </div>
                        <div className="modal-body">
                            {successMessage && <p className='text-success'>{successMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='shadow-sm p-3 mb-3 bg-body-tertiary rounded my-5 mx-5'>
                <h5 className='text-center mb-4'>Upload Bulk File</h5>
                <form>
                    <div className='row'>
                        <div className='col-md-12 mb-3'>
                            <div>
                                <label className='form-label' htmlFor="title">Upload File:</label>
                                <input className='form-input' type="file" multiple='multiple' onChange={handleupldTcChange} accept=".pdf" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='text-center'>
                                <button className='btn btn-info btn-custom ' onClick={handleSubmit}>save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
