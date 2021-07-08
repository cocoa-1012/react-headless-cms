import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: block;
  align-items: center;
  max-width: 960px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TitleText = styled.div`
  color: #d12a2f;
  text-transform: uppercase !important;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 20px;
  max-width: 960px;
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

const data = [
  {
    imgUrl: "../../assets/images/home/home-1 - Lean-On-Me_Install-22.jpg",
    author: "John Key",
    title: "Lean on me",
    duration: "May 8-June 19. 2021",
  },
  {
    imgUrl: "../../assets/images/home/home-1 - Lean-On-Me_Install-22.jpg",
    author: "Kiyomi Quinn Taylor",
    title: "A River Gets Wide",
    duration: "May 8-June 19. 2021",
  },
  {
    imgUrl: "../../assets/images/home/home-1 - Lean-On-Me_Install-22.jpg",
    author: "Drew Dodge",
    title: "Wasteland",
    duration: "May 8-June 19. 2021",
  },
];

const Artist = () => {
  const { id } = useParams();

  return (
    <ContainerDiv>
      <TitleText>{id} exhibition</TitleText>
      {data.map((item, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: 960,
            marginBottom: 20,
          }}
        >
          <div style={{ marginRight: 350 }}>
            <DetailText>
              <a href="/" style={{ textDecoration: "none" }}>
                {item.author}
              </a>
            </DetailText>
            <DetailText className="subtitle_head">{item.title}</DetailText>
            <p></p>
            <DetailText>{item.duration}</DetailText>
            <a href="/" style={{ textDecoration: "none" }}>
              <DetailText style={{ color: "#d12a2f" }}>
                Read more&nbsp;&nbsp; &rarr;{" "}
              </DetailText>
            </a>
          </div>
          <a href="/">
            <img
              width="450"
              height="200"
              src={item.imgUrl}
              alt=""
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </a>
        </div>
      ))}
    </ContainerDiv>
  );
};

export default Artist;
