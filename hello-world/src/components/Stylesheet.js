import OurStylesheet from "./OurStylesheet.css";
function Stylesheet(props) {
  //If true, we use primary, if false we use secondary
  //We could check for false with !props.happy instead.
  let className = props.happy ? "primary" : "secondary";

  //   return <div className={className}>CSS Stylesheet</div>;

  //AND we can have other classes too other than the conditional.
  //For this to work we must use template literals
  //with the conditional inside, and add any other classes too.
  return <div className={`${className} bigText`}>CSS Stylesheet</div>;
}

export default Stylesheet;
