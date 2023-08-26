import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function CreateJobsModel({isOpen, setIsOpen}) {
    function closeModal() {
        setIsOpen(false)
      }
    const files = [
        {
            "id": "file-abc123",
            "object": "file",
            "bytes": 120000,
            "created_at": 1677610602,
            "filename": "my_file.jsonl",
            "purpose": "fine-tune",
            "format": "fine-tune-chat",
            "status": "uploaded",
            "status_details": null
          },
          {
            "id": "file-abc123",
            "object": "file",
            "bytes": 120000,
            "created_at": 1677610602,
            "filename": "my_file1.jsonl",
            "purpose": "fine-tune",
            "format": "fine-tune-chat",
            "status": "uploaded",
            "status_details": null
          }
        
    ]
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Fine-tuning Job
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      select the file you have uploaded, choose the base model you want to train.
                    </p>
                  </div>
                <label htmlFor="model" className="mt-4">Files:</label>

                  <select id="training_file" name="training_file" className="form-select block w-full mt-1 border-2">
                                        {/* Map over your files here */}
                                        {files.map(file => (
                                            <option value={file.id} key={file.id}>
                                                {file.filename}
                                            </option>
                                        ))}
                                    </select>
                <label htmlFor="model" className="mt-4">Model:</label>
                <select id="model" name="model" className="form-select block w-full mt-1 border-2">
                    <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                    {/* Add other models if necessary */}
                </select>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Start
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default CreateJobsModel