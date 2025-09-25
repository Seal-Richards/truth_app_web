

/**
 * Next.js redirect configuration
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/redirects
 */

const redirects = [
	{
		source: "/old-dashboard",
		destination: "/dashboard",
		permanent: true, // or false if it's temporary
	},
	{
		source: "/old-about",
		destination: "/about-us",
		permanent: false,
	},
];

export default redirects;
