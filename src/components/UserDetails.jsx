import React from "react";
import "../App.css";

const UserDetails = ({ todos }) => {
  return (
    <div>
      {todos.map((td) => {
        return (
          <div key={td.id}>
            <table border="1">
              <thead>
                <tr>
                  <th colSpan="2">Personal Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> Name </th> <td align="center"> {td.text1} </td>
                </tr>
                <tr>
                  <th> DOB </th> <td align="center"> {td.text2} </td>
                </tr>
                <tr>
                  <th> Gender </th> <td align="center"> {td.text3} </td>
                </tr>
                <tr>
                  <th> Mobile </th> <td align="center"> {td.text4} </td>
                </tr>
                <tr>
                  <th rowSpan="2"> Govt Issued ID </th>
                  <td align="center"> {td.text5} </td>
                </tr>
                <tr>
                  <td align="center"> {td.text6} </td>
                </tr>
                <tr>
                  <th colSpan="2">Contact Details</th>
                </tr>
                <tr>
                  <th rowSpan="2"> Guardian Details </th>
                  <td align="center"> {td.text7} </td>
                </tr>
                <tr>
                  <td align="center"> {td.text8} </td>
                </tr>
                <tr>
                  <th> Email </th> <td align="center"> {td.text9} </td>
                </tr>
                <tr>
                  <th> Emergency contact </th>
                  <td align="center"> {td.text10} </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan="2">Address Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> Address </th> <td align="center"> {td.text11} </td>
                </tr>
                <tr>
                  <th> state </th> <td align="center"> {td.text12} </td>
                </tr>
                <tr>
                  <th> City </th> <td align="center"> {td.text13} </td>
                </tr>
                <tr>
                  <th> Countrt </th> <td align="center"> {td.text14} </td>
                </tr>
                <tr>
                  <th> Pincode </th> <td align="center"> {td.text15} </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan="2">Other Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> Occupation </th> <td align="center"> {td.text16} </td>
                </tr>
                <tr>
                  <th> Religion </th> <td align="center"> {td.text17} </td>
                </tr>
                <tr>
                  <th> Marital Status </th>
                  <td align="center"> {td.text18} </td>
                </tr>
                <tr>
                  <th> Blood Group </th> <td align="center"> {td.text19} </td>
                </tr>
                <tr>
                  <th> Nationality </th> <td align="center"> {td.text20} </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
