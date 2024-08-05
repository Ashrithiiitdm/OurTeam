import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <footer>Copyright &copy; {year}</footer>;
}

export default Footer;
