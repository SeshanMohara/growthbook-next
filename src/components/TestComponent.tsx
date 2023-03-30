import { useFeatureIsOn } from "@growthbook/growthbook-react";

const TestComponent = () => {
  const enabled = useFeatureIsOn("new-homepage");

  if (enabled) {
    return <div>On!</div>;
  } else {
    return <div>Off!</div>;
  }
};

export default TestComponent;
