import Styled from "styled-components";

const TripContainer = Styled.div`
width:350px;
text-align:start;
box-shadow:0 5px 25px 2px rgba(0,0,0,0.11);
border-radius:7px;
padding: 1rem .8rem;
cursor: pointer; 

h4{
  font-size: 1.3em;
padding: .9rem 0.2rem 0;
}
`;
const ImageContainer = Styled.div`
height:200px;
overflow:hidden;
border-radius:7px;
& img {
height:100%;
width:100%;
transition:0.3s ease-in-out;
border-radius:7px;
}
:hover{
  img{
    transform:scale(1.3);
  }
}
`;
const TripsCard = (props) => {
  return (
    <TripContainer>
      <ImageContainer>
        <img src={props.imgUrl} alt="img" />
      </ImageContainer>

      <h4>{props.heading}</h4>
      <p>{props.text.substring(0, 197)}...</p>
    </TripContainer>
  );
};
export default TripsCard;
