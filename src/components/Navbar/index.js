import React, { useState } from "react";
import logoImg from "../../assets/images/logo/logo.png";
import {
  DropDownContainer,
  DropDownList,
  DropDownListContainer,
  ImgLogo,
  ListItem,
  Nav,
  NavContainer,
  NavLink,
  NavMenu,
  SubLink,
} from "./NavbarElements";

const options1 = [
  "Laylah Ali",
  "Joaquin Boz",
  "Jingze Du",
  "Hannah Epstein",
  "Kazuhito Kawai",
  "Jon Key",
  "Kate Klingbeil",
  "Luciana Lamothe",
];
const options2 = ["Future", "Current"];

const Navbar = () => {
  const [artistIsOpen, setArtistIsOpen] = useState(false);
  const [exhibitionIsOpen, setExhibitionIsOpen] = useState(false);

  const handleMouseOver1 = () => {
    setArtistIsOpen(true);
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
    setExhibitionIsOpen(true);
  };

  const onNavLinkClicked = () => {
    setArtistIsOpen(false);
    setExhibitionIsOpen(false);
  };

  const onOptionClicked = (value) => () => {
    console.log("clicked");
    setArtistIsOpen(true);
    setExhibitionIsOpen(true);
  };
  return (
    <>
      <NavContainer>
        <Nav>
          <NavLink to="/">
            <ImgLogo>
              <img src={logoImg} alt="Steve Turner" />
            </ImgLogo>
          </NavLink>

          <NavMenu>
            <DropDownContainer
              onMouseOver={handleMouseOver1}
              onMouseLeave={handleMouseLeave1}
            >
              <NavLink to="/" onClick={onNavLinkClicked}>
                Artists
              </NavLink>
              {artistIsOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options1.map((option) => (
                      <ListItem>
                        <SubLink to={`/artists/${option}`}>{option}</SubLink>
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
            <DropDownContainer
              onMouseOver={handleMouseOver2}
              onMouseLeave={handleMouseLeave2}
            >
              <NavLink to="/" onClick={onNavLinkClicked}>
                Exhibitions
              </NavLink>
              {exhibitionIsOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options2.map((option) => (
                      <ListItem
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                      >
                        <SubLink to={`/exhibitions/${option}`}>
                          {option}
                        </SubLink>
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
            <NavLink to="/">GallaryVault</NavLink>
            <NavLink to="/">Info</NavLink>
          </NavMenu>
        </Nav>
      </NavContainer>
    </>
  );
};

export default Navbar;
