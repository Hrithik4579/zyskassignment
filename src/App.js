import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Companies from './components/Companies';
import Features from './components/Features';
import Comment from './components/Comment';
import Analytics from './components/Analytics';
import Questions from './components/Questions';
import Blog from './components/Blog';
import Trial from './components/Trial';
import Footer from './components/Footer';
import Extra from './components/Extra';
function App() {
  return (
    <div className="App">
     <Dashboard/>
     <Companies/>
     <Features/>
     <Comment/>
     <Analytics/>
     <Extra/>
     <Questions/>
     <Blog/>
     <Trial/>
     <Footer/>
    </div>
  );
}

export default App;
