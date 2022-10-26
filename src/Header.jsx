import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h1>Header</h1>
      <h2>{props.name}</h2>
    </header>
  );
};

export default Header;
