import './Header.css'

function Header(props) {
  return (
    <header className="Header">
        <h2>{props.name}</h2>
        <img src={props.logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header
