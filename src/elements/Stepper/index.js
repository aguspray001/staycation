import React from "react";
import propTypes from "prop-types";
export default function Stepper(props) {
  const { steps, initialStep } = this.props;
  const stepsKeys = Object.keys(steps);
  const [CurrentStep, setCurrentStep] = useState(stepsKeys.indexOf(initialStep)>-1?initialStep:stepsKeys[0]);
  const totalStep = stepsKeys.length;
  const indexStep = stepKeys.indexOf(CurrentStep);

  function prevStep(){
      if(+indexStep>0) setCurrentStep(stepsKeys[indexStep-1]);
  }


  function nextStep(){
    if(+indexStep<totalStep) setCurrentStep(stepsKeys[indexStep+1]);
}
  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string.isRequired,
};

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";