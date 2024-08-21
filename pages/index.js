import Metadata from "components/Layout/Metadata";
import NavBar from "components/Layout/NavBar";
import Phone from "components/Phone";
import React, { useState, useRef } from "react";

export default function Home() {
  const [tapsRegistered, setTapsRegistered] = useState(0);
  const vidRef = useRef(null);

  const handleClick = () => {
    if (tapsRegistered > 1) {
      console.log("done with app");
    } else {
      setTapsRegistered(tapsRegistered + 1);
    }
  };

  const handleBackClick = () => {
    if (tapsRegistered != 0) {
      setTapsRegistered(tapsRegistered - 1);
    }
  };

  const restartPhone = () => {
    setTapsRegistered(0);
  };

  return (
    <>
      <Metadata
        url={"https://www.alexanderzwerner.com"}
        image={"https://www.alexanderzwerner.com/Cover.png"}
        title={"Alexander Zwerner - Salesforce APM Applicant"}
        description={"Salesforce APM applicant for 2025"}
      />
      <NavBar handleBackClick={handleBackClick} restartPhone={restartPhone} />
      <Phone handleClick={handleClick} tapsRegistered={tapsRegistered} />
    </>
  );
}
