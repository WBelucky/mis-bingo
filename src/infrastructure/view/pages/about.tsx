import React from "react";

type ContainerProps = {};
type Props = {};

const Component: React.FC<Props> = (props) => <p>about</p>;

const Container: React.FC<{}> = (props) => {
  return <Component />;
};

export default Container;
