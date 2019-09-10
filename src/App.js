import React from "react";

import { StyledAppContainer, Spacer, Flex, Card } from "./styled";

function App() {
  return (
    <AppContainer>
      <MyComponent />
    </AppContainer>
  );
}

const AppContainer = ({ children }) => (
  <StyledAppContainer bg="background" height="100vh" overflow="hidden">
    {children}
  </StyledAppContainer>
);

const MyComponent = () => (
  <Flex
    flexDirection="column"
    alignItems="center"
    justifyContent="space-between"
    display="flex"
  >
    <Spacer height={20} />
    <Card>
      <Card.header>Title!</Card.header>
      <Card.content />
      <Card.footer />
    </Card>
  </Flex>
);

export default App;
