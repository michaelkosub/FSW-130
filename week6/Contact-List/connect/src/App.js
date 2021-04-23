import React from "react";
import { connect } from "react-redux";
import { addContact, removeContact } from "./Redux/Redux";
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";
import "./App.css";
function App(props) {
  const { payload } = props;

  return (
    <div>
      
      <Form addUser={addContact} />

      <div>
        {payload.length
          ? payload.map((x) => {
              return (
                <Contacts
                  key={x.id}
                  name={x.name}
                  number={x.number}
                  id={x.id}
                  delUser={removeContact}
                />
              );
            })
          : "No Contacts"}
      </div>
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState);
  return {
    payload: globalState,
  };
}
const mapDispatchToProps = {
  addUser: addContact,
  delUser: removeContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);