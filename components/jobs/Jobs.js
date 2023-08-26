import { useState } from 'react';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const fineTuningJobs = [
    // ... 保留原有的fine-tuning job物件並複制4次，每次稍作修改...
    {
      "object": "fine_tuning.job",
      "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
      "model": "davinci-002",
      "created_at": 1692661014,
      "finished_at": 1692661190,
      "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
      "organization_id": "org-123",
      "result_files": [
          "file-abc123"
      ],
      "status": "succeeded",
      "validation_file": null,
      "training_file": "file-abc123",
      "hyperparameters": {
          "n_epochs": 4,
      },
      "trained_tokens": 5768
    },
    {
      "object": "fine_tuning.job",
      "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
      "model": "davinci-002",
      "created_at": 1692661014,
      "finished_at": 1692661190,
      "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
      "organization_id": "org-123",
      "result_files": [
          "file-abc123"
      ],
      "status": "succeeded",
      "validation_file": null,
      "training_file": "file-abc123",
      "hyperparameters": {
          "n_epochs": 4,
      },
      "trained_tokens": 5768
    },
    {
      "object": "fine_tuning.job",
      "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
      "model": "davinci-002",
      "created_at": 1692661014,
      "finished_at": 1692661190,
      "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
      "organization_id": "org-123",
      "result_files": [
          "file-abc123"
      ],
      "status": "succeeded",
      "validation_file": null,
      "training_file": "file-abc123",
      "hyperparameters": {
          "n_epochs": 4,
      },
      "trained_tokens": 5768
    },
    {
      "object": "fine_tuning.job",
      "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
      "model": "davinci-002",
      "created_at": 1692661014,
      "finished_at": 1692661190,
      "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
      "organization_id": "org-123",
      "result_files": [
          "file-abc123"
      ],
      "status": "succeeded",
      "validation_file": null,
      "training_file": "file-abc123",
      "hyperparameters": {
          "n_epochs": 4,
      },
      "trained_tokens": 5768
    },

    // ... 其他四筆測試資料...
  ];
  
  return (
    <div className="bg-white p-4 border">
      <h3 className="text-lg mb-2">Jobs</h3>
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreateJob}>
        Create Fine-Tuning Job
      </button> */}

      <div className="p-4 shadow-md rounded bg-white">
            <h1 className="text-xl font-semibold mb-4">Jobs List</h1>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Model</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                    {fineTuningJobs.map(job => (
                        <tr key={job.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{job.id}</td>
                            <td className="py-2 px-4 border-b">{job.model}</td>
                            <td className="py-2 px-4 border-b">{job.status}</td>
                            <td className="py-2 px-4 border-b">
                                <button 
                                    onClick={() => handleCancelJob(job.id)}
                                    className="text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded"
                                >
                                    Cancel Job
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
