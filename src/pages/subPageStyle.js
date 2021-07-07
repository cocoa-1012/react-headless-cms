import styled from 'styled-components';

export const ContainerDiv = styled.div`
width: 100%;
max-width: 960px;
height: 80%;
position: relative;
display: block;
justify-content: space-beetween;
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

export const AuthorText = styled.div`
    color: #d12a2f;
    font-size: 14px;
    margin: 0px 0px 22px;
`;