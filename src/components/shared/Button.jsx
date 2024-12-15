export function Button({ children, type, onClick }) {
  
  return (
		<button type={type} className="button" onClick={onClick}>{children}</button>
  )
}