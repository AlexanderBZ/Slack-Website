import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

export default function ProfileIcon({ username, profilePic, signout }) {
  return (
    <Menu as="div" className="w-11 h-11 relative flex items-center">
      <div className="w-full group">
        <Menu.Button className="flex items-center w-[175px] h-[45px] text-sm font-medium text-white rounded-full bg-[#18181B] gap-[5px]">
          <Image
            src={profilePic}
            alt="profile photo"
            width={50}
            height={50}
            className="rounded-full w-11 h-11 object-cover"
          />
          <p className="w-[80px] overflow-x-hidden">{`@${username}`}</p>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" left-0 w-56 origin-top-right bg-[#1A1A1A] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mt-[150px]">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-white/10"
                  } rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-white cursor-default`}
                >
                  <Link href={"/profile"} className="group flex">
                    <UserIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Profile
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-white/10"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-white cursor-default`}
                  onClick={signout}
                >
                  <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
