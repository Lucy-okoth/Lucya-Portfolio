
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {


  return (
    <div className="App">
    <Navbar />
     <div className = "content">
    <Home />

     </div> 
     </div>
  );
}

export default App;



// const title = 'Welcome to my Blog';
// const likes = 50;
// const link = 'https://github.com/Lucy-okoth';

/* <h1>{title}</h1>
<p>Liked {likes} times</p>
<p>50</p>
<p>{"hello"}</p>
<p>[1,2,3,4]</p>
<p>{Math.random() *10}</p>

<a href={link}>Github Link</a> */