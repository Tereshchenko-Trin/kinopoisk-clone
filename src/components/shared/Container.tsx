import { IChildProps } from "@/types/propTypes"

export function Container({ children }: IChildProps) {
  return (
    <div className="container_main">
      {children}
    </div>
  )  
}