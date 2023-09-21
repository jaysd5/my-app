import styled from 'styled-components';
import Image from './symbol-scatter-haikei.svg';

export const StyledNav = styled.nav`
  background-image: url(${Image});
  background-size: cover ;
  background-position: center ;
  display: flex ;
  justify-content: space-around ;
  align-items: center ;
  height: auto ;
  width: 100% ;
  top: 0 ;
  left: 0 ;
  z-index: 1 ;
`;

export const StyledH1 = styled.h1`
  font-size: 30px;
  color: white ;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px grey;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const StyledSearch = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 2px 2px 4px grey;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  ::placeholder {
    text-align: center;
  } 
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px  solid black ;
  border-radius: 50%;
  background: grey ;
`;

export default StyledNav;