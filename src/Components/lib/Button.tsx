import classNames from 'classnames';

interface ButtonProps {
  children?: React.ReactNode;
  primary: boolean;
  danger: boolean;

}

export const Button = ({ children, primary, danger }: ButtonProps) => {

  const classes = classNames("mx-auto px-3 py-1.5 border rounded", {
    "border-blue-900 bg-blue-900 text-white": primary,
    "border-red-500 bg-red-500 text-white": danger,
  });

  return (
    <button className={classes}  type="submit" >{children}</button>
  )
}
