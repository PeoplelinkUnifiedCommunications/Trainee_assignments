import React from "react";
import Cardblueprint from "./Cardblueprint";

const ProjectDB = () => {
  let ProjectDB = [
    {
      id: 1,
      manufacturer_name: "Rheem",
      name: "Pro Prestige 50 LeakGuar",
      ef: "3.4 ef",
      ilogo: "ProjectImages/info-tooltip.svg",
      logo: "ProjectImages/Energy_Star_logo.svg.png",
      main_picture: "ProjectImages/img1.png",
      list1: "ENERGY STAR Certified with an Energy Factor of  3.75 ",
      list2: "Ideal hot water delivery for households with 3 to 5 people",
      list3: "Provides up to $480 annual estimated energy cost savings",
      list4: "Users can control water systems, customize temperature",
      base_price: "...............................$ 1,799",
      Available_Incentives:
        "....................................$ 1,300",
      Equipment_cost: "...................$ 499",
      your_annual_saving_is: "$120",
    },
    {
      id: 2,
      manufacturer_name: "A.O Smith",
      name: "Elite Master 56",
      ef: "3.4 ef",
      ilogo: "ProjectImages/info-tooltip.svg",
      logo: "ProjectImages/Energy_Star_logo.svg.png",
      main_picture: "ProjectImages/img2.png",
      list1: "ENERGY STAR Certified with an Energy Factor of  3.75 ",
      list2: "Ideal hot water delivery for households with 3 to 5 people",
      list3: "Provides up to $480 annual estimated energy cost savings",
      list4: "Users can control water systems, customize temperature",
      base_price: ".................................$ 1,899",
      Available_Incentives:
        "....................................$ 1,100",
      Equipment_cost: ".....................$ 399",
      your_annual_saving_is: "$120",
    },
    {
      id: 3,
      manufacturer_name: "Stiebel Eltron",
      name: "Hybrid Electric 50",
      ef: "3.4 ef",
      ilogo: "ProjectImages/info-tooltip.svg",
      logo: "ProjectImages/Energy_Star_logo.svg.png",
      main_picture: "ProjectImages/img3.png",
      list1: "ENERGY STAR Certified with an Energy Factor of  3.75 ",
      list2: "Ideal hot water delivery for households with 3 to 5 people",
      list3: "Provides up to $480 annual estimated energy cost savings",
      list4: "Users can control water systems, customize temperature",
      base_price: ".................................$ 2,199",
      Available_Incentives:
        ".....................................$ 1000",
      Equipment_cost: ".......................$ 599",
      your_annual_saving_is: "$120",
    },
  ];

  return (
    <>
      {ProjectDB.map((figure, key) => {
        return <Cardblueprint key={key} {...figure} />;
      })}
    </>
  );
};

export default ProjectDB;
