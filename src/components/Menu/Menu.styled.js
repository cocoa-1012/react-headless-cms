import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => "#efefef"};
  opacity: 0.9;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  padding-top: 60px;
  padding-left: 10vw;
  padding-right: 20vw;
  position: absolute;
  top: -10px;
  left: 0;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  display: block;
  justify-content: space-between;
`;

export const SymbolDiv = styled.div`
  text-transform: lowercase !important;
  border-bottom: solid 1px gray;
  letter-spacing: 2px;
  color: #000;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  height: 50px;
  font-size: 16px !important;
  font-weight: 600;
  cursor: pointer;
  &.active {
    color: #d12a2f;
  }
`;

export const DropDownList = styled.ul`
  margin-top: 20px;
  padding-left: 5vw;
  letter-spacing: 2px;
  color: #000;
  text-decoration: none;
  font-size: 12px !important;
  &.active {
    color: #d12a2f;
  }
  width: 65vw;
`;

export const DropDownListContainer = styled.div`
  right: 10px;
  top: 30px;
`;

export const ListItem = styled.nav`
  width: 100%;
  margin-top: 20px;
`;

export const SubLink = styled(Link)`
  color: #000;
  padding: 1px 8px;
  text-decoration: none;
  display: block;
  font-size: 12px !important;
  cursor: pointer;
  &.active {
    color: #d12a2f;
    border-bottom: solid 1px #d12a2f;
  }
`;

export const SubLink1 = styled(Link)`
  color: #000;
  padding: 1px 8px;
  text-decoration: none;
  display: block;
  font-size: 12px !important;
  cursor: pointer;
  &.active {
    color: #000;
    font-size: 18px;
    font-weight: 800;
  }
`;

export const NavLink = styled(Link)`
  text-transform: lowercase !important;
  border-bottom: solid 1px gray;
  letter-spacing: 2px;
  color: #000;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  height: 50px;
  font-size: 16px !important;
  font-weight: 600;
  cursor: pointer;
  &.active {
    color: #d12a2f;
  }
`;
