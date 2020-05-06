import React from "react";
import styled from "styled-components";
import { CellStat } from "../../pages/bingo";
import Link from "next/link";
import "semantic-ui-css/semantic.min.css";

type ContainerProps = CellStat;
type Props = ContainerProps;

const Img = styled.img<{ dark: boolean }>`
  width: auto;
  height: auto;
  max-width: 40px;
  max-height; 40px;
  filter: brightness(${({ dark }) => (dark ? "50%" : "100%")});
`;

const Name = styled.p`
  font-size: auto;
`;

const Component: React.FC<Props> = ({ filled, imageURL, name, id }) => (
  <>
    <Link href={`/users/${id}`}>
      <Name>{name}</Name>
      <Img src={imageURL} dark={!filled} />
    </Link>
  </>
);

const StyledComponent = styled(Component)`

> button {...}
> `;

const Container: React.FC<ContainerProps> = (cellStat) => {
  return <StyledComponent {...cellStat} />;
};

export default Container;