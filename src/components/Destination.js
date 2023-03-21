import "./Destination.css";
import image1 from "../assets/images/img1_taalvolcano.jpg";
import image2 from "../assets/images/img2_taalvolcano.jpg";
import image3 from "../assets/images/img1_azore.jpg";
import image4 from "../assets/images/img2_azore.jpg";
import DestinationData from "./DestinationData.js";
import "./Destination.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
      inside a lake inside an island. If you fancy a closer look, the hike up
      to the crater is a mere 45 minutes, and is easy enough for
      beginners. Guides will assist you most of the way, and you'll see
      the peculiar environment found on an active volcano, including
      volcanic rocks and steam vents. The hike can be dusty and hot, so
      plan for an early morning trip, and then unwind with some bulalo
      before heading back home!"
        img1={image1}
        img2={image2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="The Azores, Portugal"
        text="Roughly 900 miles off the coast of Lisbon, this Portuguese archipelago can inspire wanderlust with a single photo. The verdant valleys, steep oceanside cliffs, rows of blue hydrangeas, and scattering of waterfalls make the Azores a paradise worth exploring. Just make sure you visit before everyone you know beats you to it."
        img1={image3}
        img2={image4}
      />
    </div>
  );
};
export default Destination;
