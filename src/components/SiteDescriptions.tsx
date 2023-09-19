import { Link, UnorderedList, ListItem, Text, Heading } from "@chakra-ui/react";

export default function SiteDescriptions () {
  return (
    <>
      <Text>
        上にある枠をクリックして画像を選択、または枠にドラッグ＆ドロップするときゅうくらりんのサムネみたいになります。
      </Text>
      <Heading as='h4' size='md'>注意点</Heading>
      <UnorderedList>
        <ListItem>iOSに搭載されている被写体切り抜き機能を使って切り抜き、サイトにドラッグ&ドロップする使用法を想定しています。</ListItem>
        <ListItem>選択する画像は背景が透過されていないと上手いこと行きません。</ListItem>
        <ListItem>横長の画像だったり、画質の低い画像だと綺麗に作れません。</ListItem>
      </UnorderedList>
      <Heading as='h4' size='md'>元ネタ</Heading>
      <Text>
        <Link href="https://www.nicovideo.jp/watch/sm39257413">きゅうくらりん / いよわ feat.可不</Link>
      </Text>
    </>
  );
};
