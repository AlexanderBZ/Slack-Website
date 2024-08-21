import React from "react";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col items-center mb-[40px]">
      <p className="text-white w-full text-center p-4 bg-[#18181B]">
        Welcome 👋, tap on the phone to go to the next page of the prototype.
      </p>
      {children}
    </main>
  );
}
