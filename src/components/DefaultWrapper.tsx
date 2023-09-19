import { Container, VStack } from "@chakra-ui/react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function DefaultWrapper (props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Container maxW={'container.sm'} marginTop="4" marginBottom="16">
        <VStack>
          {children}
        </VStack>
      </Container>
    </>
  );
}
