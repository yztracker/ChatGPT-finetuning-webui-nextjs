import { useEffect, useState, useContext } from 'react';
import useSWR from 'swr';
import { ApiKeyContext } from '../contexts/ApiKeyContext'

export default function Files() {
  const { apiKey, fileList, setFileList } = useContext(ApiKeyContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');
  console.log(fileList)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('purpose', 'fine-tune'); 

    try {
      const response = await fetch('https://api.openai.com/v1/files', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
        body: formData

      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`Upload successful! File ID: ${data.id}`);
        await updateFileList();

      } else {
        setStatus(data.error.message || 'Error uploading file.');
      }
    } catch (error) {
      setStatus('Error uploading file.');
    }
  };

  const updateFileList = async () => {
    if (apiKey) {
      try {
        const data = await fetcher('/api/fetchOpenAIFile', apiKey);
        if (data && data.data) {
          setFileList(data.data);
        } else if (data && data.error) {
          console.error(data.error.message); 
        }
      } catch (error) {
        console.error("API 請求失敗", error);
      }
    }
  }

  useEffect(() => {
  updateFileList();
}, [apiKey]);


  const fetcher = (url, apiKey) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ apiKey: apiKey }) 
  }).then((res) => res.json());
  
  

  useEffect(() => {
    if (apiKey) {
      fetcher('/api/fetchOpenAIFile', apiKey).then(data => {
        if (data && data.files) {
          setFileList(data.files);
        } else if (data && data.error) {
          console.error(data.error.message); // 或者你可以將此錯誤顯示給用戶
        }
      }).catch(error => {
        console.error("API 請求失敗", error);
      });
    }
      }, [apiKey]);

    const deleteFile = async (fileId) => {
      const response = await fetch("/api/deleteFile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fileId: fileId }),
      });
      console.log(response)
      if (response.ok) {
        const result = await response.json();
        await updateFileList();

      } else {
        console.error("Failed to delete the file.");
      }
    };
      
  const handleDeleteFile =(id) => {
    deleteFile(id)
  }
      
  return (
    <div className="bg-zinc-300 p-4  backdrop-blur-2xl rounded-xl">
      <h3 className="text-lg mb-2">Step2. Upload Files</h3>
      <input type="file" onChange={handleFileChange} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpload}>
        Upload
      </button>
      <div className="p-4 shadow-md rounded bg-white">
            <h1 className="text-xl font-semibold mb-4">Files List</h1>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Filename</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                {fileList?.map(file => (
                        <tr key={file.id}>
                            <td>{file.id}</td>
                            <td>{file.filename}</td>
                            <td>{file.status}</td>
                            <td className="py-2 px-4 border-b">
                                <button 
                                    onClick={() => handleDeleteFile(file.id)}
                                    className="text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded"
                                >
                                    Delete File
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
