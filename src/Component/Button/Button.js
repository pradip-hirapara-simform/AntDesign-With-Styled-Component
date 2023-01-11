 
import { ButtonStyle } from "./Button.style";

export function Button(props) {
  const { children, type,  ...others } = props;
  // const children = label
  console.log(children)
  return (
  <ButtonStyle type={type} {...others} >{children}</ButtonStyle>
  );
}
