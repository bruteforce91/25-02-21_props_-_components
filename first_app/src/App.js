
import './App.css';
import consola from '../node_modules/consola'
import Header from './components/Header'
import Body from './components/Body';


const data = {
  name: 'HappyShoes',
  logo: 'https://logoipsum.com/logo/logo-16.svg',
  company: 'SZH Inc.',
  cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'Welcome to our brand new HappyShoes website!',
  description: 'Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.',
}


const date=new Date();
const getYear=date.getFullYear()


function handleClick(){
  consola.success("Buona giornata!")
}
function App() {
  return (
    <div className="App">
      <Header name={data.name} logo={data.logo}/>
      <Body cover={data.cover} title={data.title} descr={data.description}/>
    </div>
  );
}
export default App;


  {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
      </header>
      <main>
        <h1>First App in React</h1>
        <button onClick={handleClick}>Clicca</button>
      </main>
      <footer>Copyright by me - {getYear}</footer> */}