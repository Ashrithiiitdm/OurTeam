import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Header />
      <div id="card-container">
        {contacts.map((contact) => {
          return (
            <Cards
              name={contact.name}
              img={contact.img}
              position={contact.position}
              email={contact.email}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
