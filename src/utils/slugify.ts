export default function slugifyName(name: string): string {
	return name.toLowerCase().replace(/\s+/g, "-");
}
