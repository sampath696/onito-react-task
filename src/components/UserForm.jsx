import React, { useReducer } from "react";
import "../App.css";
// import { Formik } from "formik";

const initialState = {
  name: "",
  dob: "",
  gender: "Male",
  mobile: "",
  govt1: "Pan",
  govt2: "",
  guard1: "Neighbour",
  guard2: "",
  email: "",
  emerg: "",
  adrs: "",
  states: "",
  city: "",
  country: "",
  pincode: "",
  occupation: "",
  religion: "Hindu",
  marital: "Married",
  blood: "o+",
  nationality: "",
};
const reducer = (state, action) => {
  if (action.type === "ONCHANGE") {
    return { ...state, name: (state.name = action.payload) };
  } else if (action.type === "ONCHANGE2") {
    return { ...state, dob: (state.dob = action.payload) };
  } else if (action.type === "ONCHANGE3") {
    console.log(state.gender);
    return { ...state, gender: (state.gender = action.payload) };
  } else if (action.type === "ONCHANGE4") {
    return { ...state, mobile: (state.mobile = action.payload) };
  } else if (action.type === "ONCHANGE5") {
    return { ...state, govt1: (state.govt1 = action.payload) };
  } else if (action.type === "ONCHANGE6") {
    return { ...state, govt2: (state.govt2 = action.payload) };
  } else if (action.type === "ONCHANGE7") {
    return { ...state, guard1: (state.guard1 = action.payload) };
  } else if (action.type === "ONCHANGE8") {
    return { ...state, guard2: (state.guard2 = action.payload) };
  } else if (action.type === "ONCHANGE9") {
    return { ...state, email: (state.email = action.payload) };
  } else if (action.type === "ONCHANGE10") {
    return { ...state, emerg: (state.emerg = action.payload) };
  } else if (action.type === "ONCHANGE11") {
    return { ...state, adrs: (state.adrs = action.payload) };
  } else if (action.type === "ONCHANGE12") {
    return { ...state, states: (state.states = action.payload) };
  } else if (action.type === "ONCHANGE13") {
    return { ...state, city: (state.city = action.payload) };
  } else if (action.type === "ONCHANGE14") {
    return { ...state, country: (state.country = action.payload) };
  } else if (action.type === "ONCHANGE15") {
    return { ...state, pincode: (state.pincode = action.payload) };
  } else if (action.type === "ONCHANGE16") {
    return { ...state, occupation: (state.occupation = action.payload) };
  } else if (action.type === "ONCHANGE17") {
    return { ...state, religion: (state.religion = action.payload) };
  } else if (action.type === "ONCHANGE18") {
    return { ...state, marital: (state.marital = action.payload) };
  } else if (action.type === "ONCHANGE19") {
    return { ...state, blood: (state.blood = action.payload) };
  } else if (action.type === "ONCHANGE20") {
    return { ...state, nationality: (state.nationality = action.payload) };
  } else {
    return state;
  }
};

const UserForm = ({ onSubmit }) => {
  const [state, dispath] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      state.name === "" ||
      state.dob === "" ||
      state.gender === "" ||
      state.mobile === "" ||
      state.govt1 === "" ||
      state.govt2 === "" ||
      state.guard1 === "" ||
      state.guard2 === "" ||
      state.email === "" ||
      state.emerg === "" ||
      state.adrs === "" ||
      state.states === "" ||
      state.city === "" ||
      state.country === "" ||
      state.pincode === "" ||
      state.occupation === "" ||
      state.religion === "" ||
      state.marital === "" ||
      state.blood === "" ||
      state.nationality === ""
    ) {
      alert("fields must be filled!");
    } else {
      onSubmit({
        id: Math.random() * 1000,
        text1: state.name,
        text2: state.dob,
        text3: state.gender,
        text4: state.mobile,
        text5: state.govt1,
        text6: state.govt2,
        text7: state.guard1,
        text8: state.guard2,
        text9: state.email,
        text10: state.emerg,
        text11: state.adrs,
        text12: state.states,
        text13: state.city,
        text14: state.country,
        text15: state.pincode,
        text16: state.occupation,
        text17: state.religion,
        text18: state.marital,
        text19: state.blood,
        text20: state.nationality,
      });

      state.name = " ";
      state.dob = " ";
      state.mobile = " ";
      state.govt2 = " ";
      state.guard2 = " ";
      state.email = " ";
      state.emerg = " ";
      state.adrs = " ";
      state.states = " ";
      state.city = " ";
      state.country = " ";
      state.pincode = " ";
      state.occupation = " ";
      state.nationality = " ";
    }
  };

  return (
    <div>
      <form>
        <table border="1">
          <thead>
            <tr>
              <th
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                colSpan="8"
              >
                Personal Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Name : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.name}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE", payload: event.target.value })
                  }
                />
              </td>
              <th> DOB : </th>
              <td align="center">
                <input
                  type="date"
                  value={state.dob}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE2", payload: event.target.value })
                  }
                />
              </td>
              <th> Gender : </th>
              <td align="center">
                <select
                  value={state.gender}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE3", payload: event.target.value })
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <th> Mobile : </th>
              <td align="center">
                <input
                  type="number"
                  value={state.mobile}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE4", payload: event.target.value })
                  }
                />
              </td>
              <th> Govt Issued ID : </th>
              <td align="center">
                <select
                  name=""
                  id=""
                  value={state.govt1}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE5", payload: event.target.value })
                  }
                >
                  <option value="Pan">Pan</option>
                  <option value="Adhar">Adhar</option>
                  <option value="Other">Other</option>
                </select>
              </td>
              <td align="center">
                <input
                  type="text"
                  value={state.govt2}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE6", payload: event.target.value })
                  }
                />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th
                align="left"
                colSpan="8"
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Contact Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Guardian Details : </th>
              <td align="center">
                <select
                  name=""
                  id=""
                  value={state.guard1}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE7", payload: event.target.value })
                  }
                >
                  <option value="Neighbour">Neighbour</option>
                  <option value="Relative">Relative</option>
                </select>
              </td>
              <td align="center">
                <input
                  type="text"
                  value={state.guard2}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE8", payload: event.target.value })
                  }
                />
              </td>
              <th> Email : </th>
              <td align="center">
                <input
                  type="email"
                  value={state.email}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE9", payload: event.target.value })
                  }
                />
              </td>
              <th> Emergency contact : </th>
              <td align="center">
                <input
                  type="number"
                  value={state.emerg}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE10", payload: event.target.value })
                  }
                />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th
                align="left"
                colSpan="8"
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Address Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Address : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.adrs}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE11", payload: event.target.value })
                  }
                />
              </td>
              <th> state : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.states}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE12", payload: event.target.value })
                  }
                />
              </td>
              <th> City : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.city}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE13", payload: event.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <th> Country : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.country}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE14", payload: event.target.value })
                  }
                />
              </td>
              <th> Pincode : </th>
              <td align="center">
                <input
                  type="number"
                  value={state.pincode}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE15", payload: event.target.value })
                  }
                />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th
                align="left"
                colSpan="8"
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Other Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Occupation : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.occupation}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE16", payload: event.target.value })
                  }
                />
              </td>
              <th> Religion : </th>
              <td align="center">
                <select
                  name=""
                  id=""
                  value={state.religion}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE17", payload: event.target.value })
                  }
                >
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Cristian">Cristian</option>
                </select>
              </td>
              <th> Marital Status : </th>
              <td align="center">
                <select
                  name=""
                  id=""
                  value={state.marital}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE18", payload: event.target.value })
                  }
                >
                  <option value="Married">Married</option>
                  <option value="UnMarried">UnMarried</option>
                  <option value="Seperated">Seperated</option>
                </select>
              </td>
              <th> Blood Group : </th>
              <td align="center">
                <select
                  // value={state.blood}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE19", payload: event.target.value })
                  }
                >
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                </select>
              </td>
            </tr>
            <tr>
              <th> Nationality : </th>
              <td align="center">
                <input
                  type="text"
                  value={state.nationality}
                  onChange={(event) =>
                    dispath({ type: "ONCHANGE20", payload: event.target.value })
                  }
                />
              </td>
            </tr>
          </tbody>
          <tr>
            <td colSpan="8">
              <button onClick={handleSubmit}>add</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default UserForm;
