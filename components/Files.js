import { useEffect, useState } from 'react';

export default function Files() {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setSelectedFile(null);
  };
  useEffect(() => {
    fetch('/api/mockData')
        .then(response => response.json())
        .then(data => {
            setFileList(data.files);
        });
}, []);

  
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
