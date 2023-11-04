import React, { useState } from 'react'
import Header from '../../component/common/header';
import TabOptions from '../../component/common/tabOptions';
import Footer from '../../component/common/footer';
import Delivery from '../../component/delivery';
import Nightlife from '../../component/nightlife';
import DiningOut from '../../component/diningout';
const HomePage = () => {

  const [activeTab, setActiveTab]= useState("Delivery")

  return (
    <div>
        <Header/>
        <TabOptions  activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  );
};

const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "Dining Out":
      return <DiningOut/>
    case "NightLife":
      return <Nightlife/>
      default:
        return <Delivery/>
  }
}

export default HomePage;