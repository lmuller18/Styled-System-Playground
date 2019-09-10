import React from "react";
import styled, { css } from "styled-components";
import { layout, border, flexbox, color, typography } from "styled-system";

const StyledAppContainer = styled.div`
  ${layout}
  ${flexbox}
  ${color}
`;

const Flex = styled.div`
  ${layout}
  ${flexbox}
`;

const Spacer = styled.div`
  ${layout}
`;

const Typography = css`
  ${typography}
  ${color}
  ${layout}
`;

const Styled = css`
  ${layout}
  ${color}
  ${border}
  ${typography}
`;

const Card = styled.div.attrs(() => ({
  minHeight: 300,
  minWidth: 300,
  bg: "card",
  borderRadius: "5%",
  overflow: "hidden"
}))`
  ${Styled}
  ${props => console.log(props)}
`;

Card.header = styled.div.attrs(() => ({
  fontSize: 20,
  fontWeight: "bold",
  color: "text",
  textAlign: "center",
  bg: "black",
  width: "100%"
}))`
  ${Styled}
`;

Card.content = styled.div``;
Card.footer = styled.div``;

export { StyledAppContainer, Card, Flex, Spacer, Typography };
