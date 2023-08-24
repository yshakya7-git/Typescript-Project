import { ButtonProps, button } from './variants/button';

export const Button = (props : ButtonProps) => {

  return (
    <button className={button(props)}  type="submit" >{props.children}</button>
  )
}
