import React from "react";
import { ContainerHomeDiv, DetailInfoDiv, HomeImg } from "./subPageStyle";

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
// const addressInfo = "6830 Santa Monica Blvd. Los Angeles CA 90038";
// const idInfo = "323.460.6830";
// const mailInfo = "info@steveturner.la";

const Home = () => {
  return (
    <>
      {data.map((item, key) => (
        <ContainerHomeDiv key={key}>
          <HomeImg
            src={item.imgUrl}
            alt=""
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
          <DetailInfoDiv>
            <h2>
              <a href="/" style={{ textDecoration: "none" }}>
                {item.author}
              </a>
            </h2>
            <h4 className="subtitle_head">{item.title}</h4>
            <p></p>
            <p>{item.duration}</p>
          </DetailInfoDiv>
        </ContainerHomeDiv>
      ))}
    </>
  );
};

export default Home;
