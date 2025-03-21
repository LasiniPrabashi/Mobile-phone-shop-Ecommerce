import React from 'react'
import CategoryList from "../components/CategoryList";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList/>
        <HorizontalCardProduct category={"earphones"} heading={"Top's Earphones"}/>
        <HorizontalCardProduct category={"USB Drives"} heading={"Popular's USB Drives"}/>

       <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
        <VerticalCardProduct category={"Power Banks"} heading={"Power Banks"}/>
        <VerticalCardProduct category={"Chargers & Cables"} heading={"Chargers & Cables"}/>
    </div>
  )
}

export default Home