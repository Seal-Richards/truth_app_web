import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		NEXTAUTH_SECRET: z.string(),
	},
 
	client: {
		NEXT_PUBLIC_ADMIN_API_BASE_URL: z.string().url(),
	},

	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

		NEXT_PUBLIC_ADMIN_API_BASE_URL: process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL,
	},

	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
});

export default env;
