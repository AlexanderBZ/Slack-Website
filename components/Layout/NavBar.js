import Link from "components/Base/Link";
import {
  CloseIcon,
  MenuIcon,
  LinkedInIcon,
  BackIcon,
  RestartIcon,
} from "components/Icons";
import PagePadding from "components/PagePadding";
import Image from "next/image";
import Button from "components/Base/Button";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "animation";
import { useState } from "react";

export default function NavBar({ handleBackClick, restartPhone }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <PagePadding className="flex justify-between items-center h-20 mb-[40px]">
        <div className="flex flex-row gap-[20px]">
          <Link href={"/"}>
            <Image
              width={160}
              height={168}
              alt="Slack logo"
              className="w-11 rounded-full"
              src="/SlackLogo.png"
            />
          </Link>
        </div>
        <div className="lg:flex hidden gap-[20px] items-center">
          <div className="navbarButton" onClick={handleBackClick}>
            <BackIcon className="navbarIcon" />
          </div>
          <div className="navbarButton" onClick={restartPhone}>
            <RestartIcon className="navbarIcon" />
          </div>
          <Link
            href={"https://www.linkedin.com/in/alexander-zwerner/"}
            external={true}
          >
            <div className="navbarButton">
              <LinkedInIcon className="navbarIcon" />
            </div>
          </Link>

          <Link
            href={
              "https://docs.google.com/document/d/1oqXsdanyZ0Uv9JFDOzZsH1AMLvtEyhkN1Cyr5cTN4VI/edit?usp=sharing"
            }
            external={true}
          >
            <Button className="px-[15px] bg-white text-black h-[40px]">
              Slack Product Analysis
            </Button>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="text-2xl lg:hidden text-white"
        >
          <MenuIcon />
        </button>

        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-screen h-screen z-50 bg-black fixed lg:hidden inset-0"
            >
              <PagePadding className="flex justify-end h-20 items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="text-2xl text-white"
                >
                  <CloseIcon />
                </button>
              </PagePadding>
              <PagePadding>
                <ul className="mt-10 space-y-4 flex flex-col items-center text-[20px] gap-[40px]">
                  <li className="text-white transition-all">
                    <Link
                      href={"https://www.linkedin.com/in/alexander-zwerner/"}
                      external={true}
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li className="text-white transition-all">
                    <Link
                      href={
                        "https://docs.google.com/document/d/1oqXsdanyZ0Uv9JFDOzZsH1AMLvtEyhkN1Cyr5cTN4VI/edit?usp=sharing"
                      }
                      external={true}
                    >
                      Slack Product Analysis
                    </Link>
                  </li>
                  <li
                    className="text-white transition-all"
                    onClick={handleBackClick}
                  >
                    Back
                  </li>
                  <li
                    className="text-white transition-all"
                    onClick={restartPhone}
                  >
                    Restart
                  </li>
                </ul>
              </PagePadding>
            </motion.div>
          )}
        </AnimatePresence>
      </PagePadding>
    </>
  );
}
