import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  max-width: 960px;
  height: 80%;
  position: relative;
  display: block;
  justify-content: space-beetween;
  padding: 10px 20px;
`;

export const ContainerHomeDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: auto;
  padding-bottom: 15px;
  @media screen and (max-width: 768px) {
    display: block;
    padding-left: 30px;
  }
`;

export const DetailInfoDiv = styled.div`
  position: absolute;
  bottom: 10px;
  background-color: white;
  right: 60px;
  padding: 5px 25px;
  @media screen and (max-width: 768px) {
    position: relative;
    padding-left: 80px;
  }
  @media screen and (max-width: 490px) {
    width: 45%;
  }
`;

export const SubTitle = styled.div`
  text-transform: uppercase !important;
  color: #d12a2f;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 22%;
  padding: 10px 5px;
  @media screen and (max-width: 768px) {
    width: 31%;
  }
  @media screen and (max-width: 490px) {
    width: 45%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 107px;
  cursor: pointer;
  margin: 15px 0px 10px;
  &.active {
    color: #d12a2f;
  }
  &:hover {
    color: #d12a2f;
  }
`;

export const HomeImg = styled.img`
  width: 95%;
  max-width: 960px;
  cursor: pointer;
  margin: 15px 0px 10px;
`;

export const AuthorText = styled.div`
  color: #d12a2f;
  font-size: 14px;
  margin: 0px 0px 22px;
`;
