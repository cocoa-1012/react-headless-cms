import React, { useState, useCallback, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Carousel from 'react-grid-carousel';


export const ContainerDiv = styled.div`
  display: block;
  align-items: center;
  max-width: 960px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AuthorText = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
  max-width: 960px;
`;

export const ArrowDiv = styled.div`
  display: flex;
  width: 50px;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const ThumbImgDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  padding-bottom: 15px;
  > * {
    padding: 5px;
  }
`;

export const ThumbItem = styled.div`
&:hover {
	opacity: 0.7;
}
`;

export const DetailText = styled.div`
  font-size: 14px;
  text-align: justify;
  color: #333333;
  line-height: 1.5em;
  font-weight: 400;
  margin: 10px 0 !important;
  max-width: 960px;
`;


const data = [{
  originImg: "../../assets/images/Laylah Ali/01.jpg",
  thumbImg: "../../assets/images/Laylah Ali/01-108x108.jpg",
  details: "Laylah Ali. Untitled (Acephalous series-Walking), 2015. Gouache, acrylic, watercolor and pencil on paper, 30 x 40 inches (76.2 x 101.6 cm)",
}, {
  originImg: "../../assets/images/Laylah Ali/02.jpg",
  thumbImg: "../../assets/images/Laylah Ali/02-108x108.jpg",
  details: "Laylah Ali. Untitled (Acephalous series-Walking), 2015. Gouache, acrylic, watercolor and pencil on paper, 30 x 40 inches (76.2 x 101.6 cm)",
}, {
  originImg: "../../assets/images/Laylah Ali/02.jpg",
  thumbImg: "../../assets/images/Laylah Ali/02-108x108.jpg",
  details: "Laylah Ali. Untitled (Acephalous series-Walking), 2015. Gouache, acrylic, watercolor and pencil on paper, 30 x 40 inches (76.2 x 101.6 cm)",
}, {
  originImg: "../../assets/images/Laylah Ali/03.jpg",
  thumbImg: "../../assets/images/Laylah Ali/03-108x108.jpg",
  details: "Laylah Ali. Untitled (Acephalous series), 2015. Gouache, acrylic, watercolor and pencil on paper, 40 x 51 inches (101.6 x 129.5 cm) Detail",
}, {
  originImg: "../../assets/images/Laylah Ali/04.jpg",
  thumbImg: "../../assets/images/Laylah Ali/04-108x108.jpg",
  details: "Laylah Ali. Untitled (Acephalous series), 2015. Gouache, acrylic, watercolor and pencil on paper, 40 x 51 inches (101.6 x 129.5 cm) Detail",
}, {
  originImg: "../../assets/images/Laylah Ali/05.jpg",
  thumbImg: "../../assets/images/Laylah Ali/05-108x108.jpg",
  details: "Laylah Ali. Untitled (Acephalous series), 2015. Gouache, acrylic, watercolor and pencil on paper, 40 x 51 inches (101.6 x 129.5 cm) Detail",
}, {
  originImg: "../../assets/images/Laylah Ali/06.jpg",
  thumbImg: "../../assets/images/Laylah Ali/06-108x108.jpg",
  details: "Laylah Ali. Untitled, 2016. Gouache, acrylic, watercolor and pencil on paper, 14 x 87 inches (35.6 x 221 cm) Detail",
}, {
  originImg: "../../assets/images/Laylah Ali/07.jpg",
  thumbImg: "../../assets/images/Laylah Ali/07-108x108.jpg",
  details: "Laylah Ali. Untitled, 2016. Gouache, acrylic, watercolor and pencil on paper, 14 x 87 inches (35.6 x 221 cm) Detail",
}, {
  originImg: "../../assets/images/Laylah Ali/08.jpg",
  thumbImg: "../../assets/images/Laylah Ali/08-108x108.jpg",
  details: "Laylah Ali. Untitled, 2020. Gouache and acrylic on paper, 10 x 8 inches (25.4 x 20.3 cm)",
}];


const Artist = () => {
  const [currentKey, setCurrentKey] = useState(0);
  const [currentImg, setCurrentImg] = useState(data[0].originImg);
  const [currentDetail, setCurrentDetail] = useState(data[0].details);
  const { id } = useParams();

  const handleThumbClick = (key) => {
    console.log("ThumbImg Clicked", key);
    setCurrentKey(key);
    setCurrentDetail(data[key].details);
    setCurrentImg(data[key].originImg);
  }

  const handleIncreaseClick = () => {
    console.log("click the increase", currentKey);
    if (currentKey < data.length) {
      setCurrentDetail(data[currentKey + 1].details);
      setCurrentImg(data[currentKey + 1].originImg);
      setCurrentKey(currentKey + 1);
    }
  }

  const handleDecreaseClick = () => {
    console.log("click the increase", currentKey);
    if (currentKey > 0) {
      setCurrentDetail(data[currentKey - 1].details);
      setCurrentImg(data[currentKey - 1].originImg);
      setCurrentKey(currentKey - 1);
    }
  }
  return (
    <ContainerDiv>
      <AuthorText>{id}</AuthorText>
      <img src={currentImg} width="75%" />
      <DetailText>{currentDetail}</DetailText>
      <ArrowDiv>
        <div onClick={handleDecreaseClick} style={{ width: 20, borderRadius: "50%", cursor: "pointer" }}>&#10094;</div>
        <div onClick={handleIncreaseClick} style={{ width: 20, borderRadius: "50%", cursor: "pointer" }}>&#10095;</div>
      </ArrowDiv>
      <ThumbImgDiv>
        {
          data.map((item, key) => (
            <ThumbItem onClick={() => handleThumbClick(key)} key={key}>
              <img key={key} src={item.thumbImg} />
            </ThumbItem>
          ))
        }
      </ThumbImgDiv>

    </ContainerDiv>
  );
}

export default Artist;