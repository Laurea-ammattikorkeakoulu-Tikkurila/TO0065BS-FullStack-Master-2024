/* eslint-disable react/prop-types */
import Kuva from "./Kuva";

const CustomHello = (props) => {
  const kuva = props.image;
  return (
    <div>
      <p className={props.color}>
        {props.greeting} (<strong> {props.author} </strong> )
        <Kuva src={kuva} />
      </p>
    </div>
  );
};

export default CustomHello;
