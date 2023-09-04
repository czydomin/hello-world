import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

type AddTaskModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onAddTask: (title: string, status: string) => void;
};

export function AddTaskModal(props: AddTaskModalProps) {
  const cancelButtonRef = useRef(null);

  const [taskName, setTaskName] = useState("");
  const [isTaskDone, setIsTaskDone] = useState("Incomplete");

  return (
    <Transition.Root show={props.isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={props.onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-slate-300 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-500"
                      >
                        Add Task
                      </Dialog.Title>

                      <div className="mt-2 flex flex-col gap-4">
                        <div className="flex flex-col">
                          <label
                            htmlFor="text"
                            className="text-sm text-gray-500"
                          >
                            Title
                          </label>
                          <input
                            value={taskName}
                            onChange={(event) =>
                              setTaskName(event.target.value)
                            }
                            id="text"
                            type="placeholder"
                            className="w-96 h-10 rounded"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-500">
                            Status
                          </label>
                          <select
                            value={isTaskDone}
                            onChange={(event) =>
                              setIsTaskDone(event.target.value)
                            }
                            className="w-96 h-10 rounded"
                          >
                            <option value="Incomplete">Incomplete</option>
                            <option value="Complete">Complete</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={props.onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-emerald-400 px-8 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      props.onAddTask(taskName, isTaskDone);
                    }}
                    ref={cancelButtonRef}
                  >
                    Add Task
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
