export default function runAsyncEffect(effect: () => Promise<void>): void {
	effect().catch((err) => {
		console.error("Async effect error:", err);
	});
}
