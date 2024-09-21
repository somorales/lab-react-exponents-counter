const ExponentThree = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.contador}³</p>
    <p className="exponent-result">
      {props.contador}*{props.contador}*{props.contador}={" "}
      <span className="total">{props.contador * props.contador* props.contador}</span>
    </p>
  </div>
);

export default ExponentThree;
