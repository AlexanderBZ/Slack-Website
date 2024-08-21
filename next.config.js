/** @type {import('next').NextConfig} */
const intercept = require("intercept-stdout");

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "kickback-photos.s3.amazonaws.com"],
  },
  env: {
    TokenSecret: "R})XP;F#Bw$N?3L",
  },
};

module.exports = nextConfig;
