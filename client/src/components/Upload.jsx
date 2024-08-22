import { IKContext, IKUpload } from 'imagekitio-react';
import { useRef, useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Import an upload icon

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY; 

const authenticator = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/upload');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = ({ setImg }) => { 
    const ikUploadRef = useRef(null);
    const [uploadStatus, setUploadStatus] = useState(''); // 'success' or 'error'
    const [isUploading, setIsUploading] = useState(false);

    const onError = (err) => {
        console.log("Error", err);
        setUploadStatus('error');
        setIsUploading(false);
    };
      
    const onSuccess = res => {
        console.log("Success", res); // can see all the detail of img file uploaded
        setImg((prev) => ({ ...prev, isLoading: false, dbData: res }));
        setUploadStatus('success');
        setIsUploading(false);
    };
    
    const onUploadProgress = progress => {
        console.log("Progress", progress);
        setIsUploading(true);
    };

    return (
        <IKContext
            urlEndpoint={urlEndpoint}
            publicKey={publicKey}
            authenticator={authenticator}
        >
            <IKUpload
                fileName="test-upload.png"
                onError={onError}
                onSuccess={onSuccess}
                onUploadProgress={onUploadProgress}
                useUniqueFileName={true}
                style={{ display: "none" }}
                ref={ikUploadRef}
            />

            <div className="sm:col-span-2">
                <label
                    onClick={() => ikUploadRef.current.click()}
                    htmlFor="profileImage"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left cursor-pointer"
                >
                    <div className={`flex items-center justify-center border-2 ${uploadStatus === 'success' ? 'border-green-500' : 'border-dashed border-gray-400'} rounded-lg p-4 hover:border-blue-500 transition-colors`}>
                        <FaUpload className="text-gray-400 mr-2" /> {/* Add an icon to indicate upload */}
                        <span className={`text-gray-500 ${uploadStatus === 'success' ? 'text-green-500' : ''}`}>
                            {uploadStatus === 'success' ? 'Profile uploaded successfully!' : 'Click to upload your profile image'}
                        </span>
                    </div>
                </label>
                <input
                    type="file"
                    name="profileImage"
                    className="hidden"
                />
                {isUploading && (
                    <div className="loading-message">Uploading...</div>
                )}
            </div>

        </IKContext>
    );
};

export default Upload;
