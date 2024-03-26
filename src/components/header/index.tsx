import Link from "next/link";
import SoundControl from "./sound-control";
import Image from "next/image";
import { ConnectButton } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <header className="from-black-1 via-black-1 fixed top-0 z-99999 flex h-20 w-full bg-gradient-to-r to-black ">
      <div className="flex h-full flex-grow items-center justify-between px-4 py-1 md:px-10 2xl:px-15">
        <Link className="flex-shrink-0" href="/">
          <Image
            width={75}
            height={75}
            src={"/logo/logo.png"}
            alt="Logo"
            priority
            className="rounded-full"
          />
        </Link>

        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center gap-2 text-white">
            <span className="bg-blue flex h-5 w-5 items-center justify-center rounded-full p-1">
              <Box component={"img"} src="/icon/sui.png" width={10} />
            </span>
            <span className="font-medium text-white">$1.71</span>
          </span>
          <SoundControl />

          <ConnectButton
            style={{
              width: "auto",
              borderRadius: 5,
              background: "#33c3ff",
              padding: "5px",
            }}
            className="inline-flex items-center justify-center gap-2 text-center duration-100 hover:opacity-75"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M18.963 4.188a.5.5 0 0 1 .705-.08l1.08.866L16.799 10h2.544l2.968-3.776l2.504 2.006a.5.5 0 0 1 .066.717L23.973 10h2.614a2.5 2.5 0 0 0-.522-3.331l-5.147-4.122a2.5 2.5 0 0 0-3.522.399L11.809 10h2.551zM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2zM5 24.5V12.83c.313.11.65.17 1 .17h18.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5"
                />
              </svg>
            </span>
            <span className="hidden sm:block">Connect&nbsp;Wallet</span>
          </ConnectButton>
        </div>
      </div>
    </header>
  );
}
