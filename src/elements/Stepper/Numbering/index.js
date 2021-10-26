import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";
import "./index.scss";

function Numbering({ style, className, data, current }) {
  const KeysOfdata = Object.keys(data);

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfdata.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfdata.length) {
            isActive = "";
            return null;
          } else {
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>;
          }
        })}
      </ol>
    </Fade>
  );
}

export default Numbering;

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
