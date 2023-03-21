import Styled from "styled-components";
import TripsCard from "./TripsCard";
import TripsData from "./TripsData";
import Carousel from "react-elastic-carousel";

const TripsContainer = Styled.div`
text-align: center;
  font-family: "Poppins", sans-serif;
  margin: 4rem 6rem;

  .TripsBox{
    padding:15px 0px;
  }
  @media screen and (max-width:850px){
    margin: 4rem 2rem;
  }
  `;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 }
];
const Trips = () => {
  return (
    <TripsContainer>
      <h2>Recent Trips</h2>
      <p>Plan trip to discover new destinations</p>
      <div className="TripsBox">
        <Carousel breakPoints={breakPoints}>
          {TripsData.map((Trip) => (
            <TripsCard
              key={Trip.id}
              heading={Trip.heading}
              text={Trip.text}
              imgUrl={Trip.imgUrl}
            />
          ))}
        </Carousel>
      </div>
    </TripsContainer>
  );
};

export default Trips;
