import React from "react";
import SearchButton from "./components/SearchButton";
import Header from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
//import SearchResults from "./components/SearchResults";
import Bookings from "./components/Bookings";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <TouristInfoCards/>
      <Bookings />
      < Restaurant/>
      <Footer
      array={[
        "123 Fake Street, London, E1 4UD",
        "hello@fakehotel.com",
        "0123 456789"
      ]}
      />
      
    </div>
  );
};

export default App;
