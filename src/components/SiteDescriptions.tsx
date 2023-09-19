import { Box, Heading, ListItem, Text, UnorderedList, Divider } from "@chakra-ui/react";
import { Tweet } from 'react-twitter-widgets';
import NicovideoPlayer from "./NicovideoPlayer";

export default function SiteDescriptions () {
  return (
    <>
      <Text>
        上にある枠をクリックして画像を選択、または枠にドラッグ＆ドロップするときゅうくらりんのサムネみたいになります。
      </Text>
      <Box w={"100%"}>
        <Tweet tweetId="1638910366435672064" />
      </Box>
      <Divider />
      <Heading as='h4' size='md'>注意点</Heading>
      <UnorderedList>
        <ListItem>iOSに搭載されている被写体切り抜き機能を使って切り抜き、サイトにドラッグ&ドロップする使用法を想定しています。Android等の場合、事前に画像編集ソフトなどで背景透過をする必要があります。</ListItem>
        <ListItem>選択する画像は背景が透過されていないと上手いこと行きません。</ListItem>
        <ListItem>横長の画像だったり、画質の低い画像だと綺麗に作れません。</ListItem>
      </UnorderedList>
      <Divider />
      <Heading as='h4' size='md'>元ネタ</Heading>
      <NicovideoPlayer
        id="sm39257413"
        width={640}
        height={360}
      />
    </>
  );
};
