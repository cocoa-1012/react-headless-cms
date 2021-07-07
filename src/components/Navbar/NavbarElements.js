import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
	height: 60px;
	z-index: 12;
	border-bottom: 2px solid #d12a2f !important;
	padding-bottom: 0;
	position: relative;
	margin-bottom: 50px;
	display: flex;
	justify-content: center;
`;

export const Nav = styled.nav`
	background: transparent;
	display: flex;
	justify-content: space-between;
	padding-left: 35px;
	width: 100%;
	max-width: 960px;
`;

export const NavLink = styled(Link)`
	text-transform: lowercase !important;
	letter-spacing: 2px;
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	line-height: 1.25;
	font-size: 12px !important;
	cursor: pointer;
	&.active {
		color: #d12a2f;
	}
	&:hover {
		color: #d12a2f;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ImgLogo = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	cursor: pointer;
	img {
		width: auto;
		max-height: 25px;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Main = styled("div")`
	font-family: sans-serif;
	background: #f0f0f0;
	height: 100vh;
`;

export const DropDownContainer = styled("div")`
	position: relative;
`;

export const DropDownHeader = styled("div")`
`;

export const DropDownListContainer = styled("div")`
	position: absolute;
	padding: 0;
`;

export const DropDownList = styled("ul")`
	margin-top: 30px;
	padding-left: 0px;
	background-color: rgba(255, 255, 255, 0.9);
	letter-spacing: 2px;
	color: #000;
	text-decoration: none;
	font-size: 12px !important;
	cursor: pointer;
	&.active {
		color: #d12a2f;
	}
	width: 160px;	
`;

export const ListItem = styled.nav`
	width: 100%;
	border-bottom: 2px solid transparent !important;
	&:hover {
		border-bottom: 2px solid #d12a2f !important;
	}
`;

export const SubLink = styled(Link)`
	letter-spacing: 2px;
	color: #000;
	padding: 5px 8px;
	text-decoration: none;
	display: block;
	line-height: 1.25;
	font-size: 12px !important;
	cursor: pointer;
	&.active {
		color: #fff;
		background-color: #d12a2f;
	}
	&:hover {
		color: #d12a2f;
		background-color: #fff;
	}
`;
