import { BACKGROUND } from "../const/canvas";
import { REPOSITORY_URL, SITE_NAME } from "../const/page";
import { Box, Container, HStack, Heading, Link, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box color={"black"} bgColor={BACKGROUND}>
      <Container maxW="container.lg">
        <HStack h={14}>
          <Heading as='h1' fontSize="2xl" cursor="pointer">
            <Link href="/" _hover={{ textDecoration: "none" }}>
              {SITE_NAME}
            </Link>
          </Heading>
          <Spacer />
          <Link href={REPOSITORY_URL} _hover={{ color: "green.900" }}>
            GitHub
          </Link>
        </HStack>
      </Container>
    </Box>
  )
}
