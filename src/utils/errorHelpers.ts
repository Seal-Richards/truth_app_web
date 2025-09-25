// my errorHelpers
export default function getErrorMessage(err: unknown): string {
	if (
		typeof err === "object" &&
		err !== null &&
		"message" in err &&
		typeof (err as Record<string, unknown>).message === "string"
	) {
		return (err as Record<string, unknown>).message as string;
	}
	return "An unexpected error occurred";
}
