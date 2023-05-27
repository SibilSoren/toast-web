import ToastLogo from "../../assets/to-do-list.png";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const solutions = [
  {
    name: "Profile",
    description: "See you profile",
    href: "##",
    //   icon: IconOne,
  },
  {
    name: "Setting",
    description: "Change your settings",
    // href: "##",
    //   icon: IconTwo,
  },
  {
    name: "Logout",
    description: "Log out from the app",
    href: "##",
    //   icon: IconThree,
  },
];

const NavigationBar = () => {
  return (
    <div className="p-5 flex justify-between item">
      <div
        id="toast-logo"
        className="flex flex-row justify-center items-center"
      >
        <img src={ToastLogo} alt="Toast Logo" className="w-16" />
        <h3 className="font-extrabold text-2xl m-4 tracking-widest">TOAST</h3>
      </div>

      <div>
        {/* darkmode */}

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-full bg-orange-300 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <UserCircleIcon className="h-8" />
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:w-60">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-4 bg-white p-7 lg:grid-cols-1">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          //   href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer"
                        >
                          {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div> */}
                          <div className="ml-1">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      {/* <h1>Hola</h1> */}
    </div>
  );
};

export default NavigationBar;
