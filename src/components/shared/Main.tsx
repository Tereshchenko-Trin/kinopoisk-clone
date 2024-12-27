import { IChildProps } from "@/types/propTypes"

export function Main({ children }: IChildProps) {
	return (
		<main className="main">{children}</main>
	)
}