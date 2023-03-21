import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  bottom: 0;
  width: 100%;
  font-family: "Poppins";
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 2px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #06c0c7;
    transition: 200ms ease-in;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  /* margin-top: 10px; */
  margin-bottom: 20px;
  font-size: 40px;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
  div i {
    margin-right: 20px;
  }
  div i:hover {
    color: #06c0c7;
    cursor: pointer;
    transition: 200ms ease-in;
  }
  /* justify-content: center; */
`;

export const Heading = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
  white-space: nowrap;
  color: #fff;
  font-weight: bold;
`;
