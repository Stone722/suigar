"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const List = [
  {
    title: "LootBox",
    url: "/lootBox",
  },
  {
    title: "NFT",
    url: "/nft",
  },
  {
    title: "Token",
    url: "/token",
  },
  {
    title: "Provably Fair",
    url: "/provably",
  },
];

const Social = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"
        />
      </svg>
    ),
    url: "http://www.discord.com",
    title: "Discord",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"
        />
      </svg>
    ),
    url: "http://www.twitter.com",
    title: "Twitter",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"
        />
      </svg>
    ),
    url: "http://www.telegram.org",
    title: "Telegram",
  },
];
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-black-1 absolute left-0 top-0 z-9999 flex h-screen min-w-55 flex-col overflow-y-hidden border-dashed pt-20 text-white duration-200 ease-linear sm:static sm:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex h-full flex-col justify-between overflow-y-auto px-5 py-5 pb-20 duration-300 ease-linear sm:pb-10">
        <nav>
          <ul className="mb-6 flex flex-col gap-1.5">
            {List.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`hover:bg-hover-1 group relative flex items-center gap-2.5 rounded-sm px-5 py-3 font-medium duration-100 ease-in-out ${
                    pathname.includes(item.url) && " bg-hover hover:bg-hover"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex justify-center gap-5">
          {Social.map((item, index) => (
            <li
              key={index}
              title={item.title}
              className="rounded-md duration-150 hover:opacity-70"
            >
              <Link href={item.url} target="_blank">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
