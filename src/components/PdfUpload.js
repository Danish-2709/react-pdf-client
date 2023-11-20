import React, { useState } from 'react';
import baseURL from './ApiConfig';

export default function PdfUpload() {

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const removeSuccessMessage = () => {
        setSuccessMessage('');
        setShowModal(false);
    };

    const handleFormReset = () => {
        setUploadedFiles([]);
    };  
    
    const handleUploadChange = (e) => {
        const selectedPdfFiles = e.target.files;
        if (selectedPdfFiles) {
            setUploadedFiles([...selectedPdfFiles]);
        } else {
            setUploadedFiles([]);
        }
    };
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setShowModal(true);
      setTimeout(() => {
        removeSuccessMessage();
      }, 1000); 

        const formData = new FormData();
        uploadedFiles.forEach((file) => {
            formData.append(`pdf`, file); 
        });
    
        try {
            const response = await fetch(`${baseURL}/api/File`, {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                setUploadedFiles([]);
                setSuccessMessage('Files uploaded successfully!');
                setShowModal(true); 
            } else {
                setUploadedFiles([]);
            }
        } catch (error) {
            console.error('Error uploading PDF:', error);
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
                                <input className='form-input' type="file" multiple='multiple' value={null} onChange={handleUploadChange} accept=".pdf" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='text-center'>
                                <button className='btn btn-info btn-custom ' onClick={handleFormSubmit}>save</button>
                                <button className='btn btn-warning btn-custom mx-3' onClick={handleFormReset}>reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
