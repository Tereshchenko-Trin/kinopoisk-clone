export interface IChildProps {
  children: React.ReactNode,
}

export interface IButtonProps {
  children: React.ReactNode,
  type: 'submit' | 'reset' | 'button' | undefined,
  style: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}