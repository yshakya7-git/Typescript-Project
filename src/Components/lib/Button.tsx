import classNames from 'classnames';

interface ButtonProps {
  children?: React.ReactNode;
  secondary: boolean;

}

export const Button = ({ children, secondary }: ButtonProps) => {
  const classes = classNames("mx-auto px-3 py-1.5 border", {
    "border-blue-900 bg-blue-900 text-white": secondary
  });

  return (
    <button className={classes}  type="submit" >{children}</button>
  )
}
