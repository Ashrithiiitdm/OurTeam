import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  );
}

export default App;
