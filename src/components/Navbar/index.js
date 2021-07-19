import React, { useRef, useState } from "react";
import FocusLock from "react-focus-lock";
// import Burger from "../Burger/index";
// import Menu from "../Menu/index";
import {
  // DropDownContainer,
  // DropDownList,
  // DropDownListContainer,
  GeneralDiv,
  ImgLogo,
  // ListItem,
  Nav,
  NavContainer,
  NavLink,
  NavMenu,
} from "./NavbarElements";

const options1 = ["Lita Albuquerque"];
const options2 = ["Future", "Current"];

const Navbar = () => {
  const [artistIsOpen, setArtistIsOpen] = useState(false);
  const [exhibitionIsOpen, setExhibitionIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

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

  return (
    <>
      <NavContainer>
        <Nav>
          <NavLink to="/">
            <ImgLogo>
              {/* <img src={logoImg} alt="Bond Street" /> */}
              <p>ttt ttt</p>
            </ImgLogo>
          </NavLink>

          <NavMenu>
            {/* <DropDownContainer
              onMouseOver={handleMouseOver1}
              onTouchStart={handleMouseOver1}
              onMouseLeave={handleMouseLeave1}
            >
              <NavLink to="/artists" onClick={onNavLinkClicked}>
                Artists
              </NavLink>
              {artistIsOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options1.map((option, key) => (
                      <ListItem key={key}>
                        <SubLink
                          to={`/artists/${option}`}
                          onClick={onNavLinkClicked}
                        >
                          {option}
                        </SubLink>
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>

            <DropDownContainer
              onMouseOver={handleMouseOver2}
              onTouchStart={handleMouseOver2}
              onMouseLeave={handleMouseLeave2}
            >
              <NavLink to="/exhibitions" onClick={onNavLinkClicked}>
                Exhibitions
              </NavLink>
              {exhibitionIsOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options2.map((option, key) => (
                      <ListItem key={key}>
                        <SubLink
                          to={`/exhibitions/${option}`}
                          onClick={onNavLinkClicked}
                        >
                          {option}
                        </SubLink>
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
            <NavLink to="/gallaryVault">GallaryVault</NavLink>
            <NavLink to="/info">Info</NavLink> */}
          </NavMenu>

          <GeneralDiv ref={node}>
            <FocusLock disabled={!open}>
              {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} /> */}
            </FocusLock>
          </GeneralDiv>
        </Nav>
      </NavContainer>
    </>
  );
};

export default Navbar;
