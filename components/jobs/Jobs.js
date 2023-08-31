import { useEffect, useState } from 'react';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const fetchFineTuningJobs = async () => {
    const response = await fetch("/api/fetchAllFineTuningJobs");
    if (response.ok) {
      const jobs = await response.json();
      // Do something with the jobs...
      setJobs(jobs)
      console.log(jobs)
    } else {
      console.error("Failed to fetch fine-tuning jobs.");
    }
  };
  
  useEffect(() => {
    fetchFineTuningJobs();
  }, []);
  
  return (
    <div className="bg-zinc-300 p-4  backdrop-blur-2xl rounded-xl">
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
                    {jobs.map(job => (
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
