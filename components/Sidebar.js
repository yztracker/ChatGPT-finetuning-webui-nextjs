import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CreateJobsModel from './jobs/createJobsModel'
import ApiKey from './ApiKey'
export default function Sidebar() {
  let [isOpen, setIsOpen] = useState(false)


  function openModal() {
    setIsOpen(true)
  }


  return (
    <div className="p-4 border-r">
      <h2 className="text-xl mb-4">Settings</h2>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create Job
        </button>
      </div>
    <ApiKey />
    <CreateJobsModel isOpen={isOpen} setIsOpen={setIsOpen}/>
    
    </div>
    
  );
  
}
