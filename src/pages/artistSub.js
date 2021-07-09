import React from "react";
import {
  AuthorText,
  ContainerDiv,
  Img,
  Item,
  Items,
  SubTitle,
} from "./subPageStyle";

const data = [
  {
    imgUrl: "../../assets/images/Laylah Ali/01-108x108.jpg",
    author: "Laylah Ali",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/02-108x108.jpg",
    author: "Joaquin Boz",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/03-108x108.jpg",
    author: "Jingze Du",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/04-108x108.jpg",
    author: "Hannah Epstein",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/05-108x108.jpg",
    author: "Kazuhito Kawai",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/06-108x108.jpg",
    author: "Jon Key",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/07-108x108.jpg",
    author: "Kate Klingbeil",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/08-108x108.jpg",
    author: "Luciana Lamothe",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/01-108x108.jpg",
    author: "Laylah Ali",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/02-108x108.jpg",
    author: "Joaquin Boz",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/03-108x108.jpg",
    author: "Jingze Du",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/04-108x108.jpg",
    author: "Hannah Epstein",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/05-108x108.jpg",
    author: "Kazuhito Kawai",
  },
  {
    imgUrl: "../../assets/images/Laylah Ali/06-108x108.jpg",
    author: "Jon Key",
  },
];
const ArtistSubComponent = () => {
  return (
    <ContainerDiv>
      <SubTitle>Artists</SubTitle>
      <Items>
        {data.map((item, key) => (
          <Item>
            <Img src={item.imgUrl} key={key}></Img>
            <AuthorText>{item.author}</AuthorText>
          </Item>
        ))}
      </Items>
    </ContainerDiv>
  );
};

export default ArtistSubComponent;
