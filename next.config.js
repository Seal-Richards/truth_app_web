/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-shadow */

import redirects from "./public/redirects.js";
// await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		ignoreBuildErrors: true,
	},

	// wire in your redirects from public/redirects.js
	async redirects() {
		return redirects;
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});

		// 👇 Ignore the "canvas" module (used by pdfjs-dist but not needed in browser)
		config.resolve.fallback = {
			...config.resolve.fallback,
			canvas: false,
		 };

		return config;
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.vercel.com",
				port: "",
				pathname: "/image/upload/**",
			},
			{
				protocol: "https",
				hostname: "flowbite.com",
				port: "",
				pathname: "/docs/images/**",
			},
			{
				protocol: "https",
				hostname: "flowbite.s3.amazonaws.com",
				port: "",
				pathname: "/blocks/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "github.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cloudflare-ipfs.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "api.multiavatar.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "reviewtestbucket.s3.amazonaws.com",
				port: "",
				pathname: "/**",
			 },
			 {
				protocol: "https",
				hostname: "images.dojah.io",
				port: "",
				pathname: "/**",
			 }, 
			 {
				protocol: "https",
				hostname: "store.storeimages.cdn-apple.com",
				port: "",
				pathname: "/**",
			 },
			 {
				protocol: "https",
				hostname: "m.media-amazon.com",
				port: "",
				pathname: "/**",
			 },
			 {
				protocol: "https",
				hostname: "gmedia.playstation.com",
				port: "",
				pathname: "/**",
			 },
			 {
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			 },
		
		],
	},
};

export default config;
