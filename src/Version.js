import React from "react";
import styled from "styled-components";

const VersionWrapper = styled.h1`
  color: red;
`;

const Version = ({ version }) => {
  return <VersionWrapper>{version}</VersionWrapper>;
};

export default Version;
