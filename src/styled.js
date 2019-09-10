import styled, { css } from "styled-components";
import {
  space,
  layout,
  border,
  flexbox,
  color,
  typography
} from "styled-system";

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

const Card = styled.div.attrs(() => ({
  minHeight: 300,
  minWidth: 300,
  bg: "card",
  borderRadius: "5%",
  overflow: "hidden"
}))`
  ${layout}
  ${color}
  ${border} 
`;

Card.header = styled.div.attrs(() => ({
  fontSize: 20,
  fontWeight: "bold",
  color: "text",
  textAlign: "center",
  bg: "black",
  width: "100%",
  height: 100,
  display: "flex",
  alignItems: "center",
  pl: 15
}))`
  ${flexbox}
  ${layout}
  ${color}
  ${space}
`;

Card.content = styled.div.attrs(props => ({
  color: props && props.color ? props.color : "text",
  display: "flex",
  height: "100%",
  p: 15
}))`
  ${layout}
  ${space}
  ${typography}
  ${flexbox}
  ${color}
`;
Card.footer = styled.div.attrs(() => ({
  alignSelf: "flex-end"
}))`
  ${layout}
  ${space}
`;

export { StyledAppContainer, Card, Flex, Spacer, Typography };
