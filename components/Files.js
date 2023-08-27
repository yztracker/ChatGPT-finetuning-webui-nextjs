import { useEffect, useState, useContext } from 'react';
import useSWR from 'swr';
import { ApiKeyContext } from '../contexts/ApiKeyContext'

export default function Files() {
  const { apiKey, fileList, setFileList } = useContext(ApiKeyContext);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setSelectedFile(null);
  };

  const fetcher = (url, apiKey) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ apiKey: apiKey })  // 在請求主體中包含API金鑰
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

  return (
    <div className="bg-white p-4 border">
      <h3 className="text-lg mb-2">Files</h3>
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
                        <th className="py-2 px-4 border-b">Model</th>
                        <th className="py-2 px-4 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                {fileList?.map(file => (
                        <tr key={file.id}>
                            <td>{file.id}</td>
                            <td>{file.filename}</td>
                            <td>{file.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
