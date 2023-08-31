import { useEffect, useState, useContext } from 'react';
import { ApiKeyContext } from '../contexts/ApiKeyContext'

export default function Model() {
  const [jobs, setJobs] = useState([]);
  const { apiKey, fileList, setFileList } = useContext(ApiKeyContext);
  const [filters, setFilters] = useState({
    organizationOwner: true,
    openai: true
  });
  const [modelData, setModelData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  console.log(modelData)
  const listModel = {
    "object": "list",
    "data": [
      {
        "id": "model-id-0",
        "object": "model",
        "created": 1686935002,
        "owned_by": "organization-owner"
      },
      {
        "id": "model-id-1",
        "object": "model",
        "created": 1686935002,
        "owned_by": "organization-owner",
      },
      {
        "id": "model-id-2",
        "object": "model",
        "created": 1686935002,
        "owned_by": "openai"
      },
    ],
    "object": "list"
  }
  
  const filteredModels = modelData  ? modelData.filter(model => {
    if (model.owned_by === "organization-owner" && filters.organizationOwner) return true;
    if (model.owned_by === "openai" && filters.openai) return true;
    return false;
}) : [];
  
  const fetcher = (url, apiKey) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ apiKey: apiKey }) 
  }).then((res) => res.json());
  
  

  useEffect(() => {
    if (apiKey) {
        setIsLoading(true);  

        fetcher('/api/listModels', apiKey).then(data => {
            if (data && data.models) {
                setModelData(data.models);
            } else if (data && data.error) {
                console.error(data.error.message); 
            }
            setIsLoading(false);  
        }).catch(error => {
            console.error("API request failed", error);
            setIsLoading(false);  
        });
    }
}, [apiKey]);


const handleDeleteModel = async (modelId) => {
    try {
        const response = await fetch('/api/deleteModel', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                modelId: modelId,
                apiKey: apiKey
            })
        });
  
        const data = await response.json();
  
        if (response.ok) {
            alert("Model delete success !");
        } else {
            alert("error: " + data.error);
        }
    } catch (error) {
        alert("sending request error: " + error.message);
    }
  };
  
  return (
    <div className="bg-white p-4 border">
      <h3 className="text-lg mb-2">Models</h3>
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreateJob}>
        Create Fine-Tuning Job
      </button> */}

      <div className="p-4 shadow-md rounded bg-white">
            <h1 className="text-xl font-semibold mb-4">Model List</h1>
            <div className="mb-4">
            <label>
                Own by
            </label>

            <label className='ml-4'>
                <input
                type="checkbox"
                checked={filters.organizationOwner}
                onChange={(e) => setFilters(prev => ({ ...prev, organizationOwner: e.target.checked }))}
                />
                organization-owner
            </label>

            <label className="ml-4">
                <input
                type="checkbox"
                checked={filters.openai}
                onChange={(e) => setFilters(prev => ({ ...prev, openai: e.target.checked }))}
                />
                openai 
            </label>
    </div>

            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Model</th>
                        <th className="py-2 px-4 border-b">owned_by</th>
                        <th className="py-2 px-4 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                {
    isLoading ? (
        <tr>
                <td colSpan={4} className="py-2 px-4 text-center">
                    Model data is loading...
                </td>
            </tr>
    ) : (
        filteredModels.map(model => (
                        <tr key={model.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{model.id}</td>
                            <td className="py-2 px-4 border-b">{model.object}</td>
                            <td className="py-2 px-4 border-b">{model.owned_by}</td>
                            <td className="py-2 px-4 border-b">
                            {model.owned_by === 'organization-owner' && (
                                <button 
                                    onClick={() => handleDeleteModel(model.id)}
                                    className="text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded"
                                >
                                    Delete Model
                                </button>
                            )}
                            </td>

                            
                        </tr>
                    ))    )
}

                </tbody>
            </table>
        </div>
    </div>
  );
}
