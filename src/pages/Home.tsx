import React from "react";

type ContainerProps = {};
type Props = {};

const Component: React.FC<Props> = (props) => <p>home</p>;

const Container: React.FC<{}> = (props) => {
  console.log(props);
  return <Component />;
};

export default Container;
