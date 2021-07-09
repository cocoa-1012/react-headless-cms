import { bool } from "prop-types";
import React, { useState } from "react";
import {
  DropDownContainer,
  DropDownList,
  DropDownListContainer,
  ListItem,
  NavLink,
  StyledMenu,
  SubLink,
  SubLink1,
  SymbolDiv,
} from "./Menu.styled";

const options1 = ["Lita Albuquerque"];
const options2 = ["Future", "Current"];

const Menu = ({ open, ...props }) => {
  const [artistIsOpen, setArtistIsOpen] = useState(false);
  const [exhibitionIsOpen, setExhibitionIsOpen] = useState(false);

  const handleMouseOver1 = () => {
    setArtistIsOpen(!artistIsOpen);
    setExhibitionIsOpen(false);
  };

  const handleMouseLeave1 = () => {
    setArtistIsOpen(false);
  };

  const handleMouseLeave2 = () => {
    setExhibitionIsOpen(false);
  };

  const handleMouseOver2 = () => {
    setArtistIsOpen(false);
    setExhibitionIsOpen(!exhibitionIsOpen);
  };

  const onNavLinkClicked = () => {
    setArtistIsOpen(false);
    setExhibitionIsOpen(false);
  };

  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <DropDownContainer>
        <SymbolDiv onClick={handleMouseOver1}>Artists</SymbolDiv>
        {artistIsOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <SubLink1 to={`/artists`}>Artists</SubLink1>
              </ListItem>
              {options1.map((option, key) => (
                <ListItem key={key}>
                  <SubLink to={`/artists/${option}`}>{option}</SubLink>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>

      <DropDownContainer>
        <SymbolDiv onClick={handleMouseOver2}>Exhibitions</SymbolDiv>
        {exhibitionIsOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <SubLink1 to={`/exhibitions`}>Exhibitions</SubLink1>
              </ListItem>
              {options2.map((option, key) => (
                <ListItem key={key}>
                  <SubLink to={`/exhibitions/${option}`}>{option}</SubLink>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <NavLink to="/gallaryVault" onClick={onNavLinkClicked}>
        GallaryVault
      </NavLink>
      <NavLink to="/info" onClick={onNavLinkClicked}>
        Info
      </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
