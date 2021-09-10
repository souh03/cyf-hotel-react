import React from "react";

const SearchResults = (props) =>{
    return(
<div>
      <table class="table">
        <thead >
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <tr>
            <td scope="col">{props.id}</td>
            <td scope="col">{props.title}</td>
            <td scope="col">{props.firstName}</td>
            <td scope="col">{props.surname}</td>
            <td scope="col">{props.email}</td>
            <td scope="col">{props.roomId}</td>
            <td scope="col">{props.checkInDate}</td>
            <td scope="col">{props.checkOutDate}</td>
          </tr>
          </tr>

        </tbody>
      </table>
    </div>

    );
};

export default SearchResults;