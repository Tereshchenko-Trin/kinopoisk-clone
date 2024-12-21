export function Button({ children, type, style, onClick }) {
  switch(style) {
    case 'primary':
      return (
        <button type={type} className="button button_primary" onClick={onClick}>{children}</button>
      )

    case 'secondary':
      return (
        <button type={type} className="button button_secondary" onClick={onClick}>{children}</button>
      )
  }
}