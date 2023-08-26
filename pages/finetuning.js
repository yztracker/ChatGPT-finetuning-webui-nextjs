import Sidebar from '../components/Sidebar';
import Files from '../components/Files';
import Jobs from '../components/jobs/Jobs';

export default function Finetuning() {
  return (
    <div className="container mx-auto p-4 flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex-1 p-4">
        <div className="grid grid-cols-1 gap-4">
        <Files />

        <Jobs />
            {/* <div className="bg-white p-4 border">Finetuned Models</div> */}
        </div>
        <div className="bg-white p-4 border mt-4">Debug Info</div>
        </div>

      </div>
    </div>
  );
}
