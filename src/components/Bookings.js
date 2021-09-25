import Search from "./Search";
import SearchResults from "./SearchResults";
//import fakeBookings from "../data/fakeBookings.json";
import React, { useState, useEffect }  from "react";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
   
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    setBookings(filteredBookings);

  };

 useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)

        .then((response) => response.json())
        .then((data) => {console.log(data)
          setBookings(data);
        });
    }, []);

return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
