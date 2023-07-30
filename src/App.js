import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


 
export default class App extends Component {
  state={
 progress:0,
 ModeName:"light",
 ModeText:"Dark"
  }
  setMode =()=>{
    if(this.state.ModeName ==="light"){
      this.setState({ModeName:"dark",ModeText:"Light"})
    document.body.style.backgroundColor = "#212F3C";
    }
    if(this.state.ModeName ==="dark"){
      this.setState({ModeName:"light",ModeText:"dark"})
    document.body.style.backgroundColor = "white";
    }
  }
  setProgress =(x)=>{
    this.setState({progress: x})
    
  }

  
  numberOfNews =5;
  api = process.env.REACT_APP_NEWS_API;

 render() {
     
     return (
      <>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />

      <Navbar Mode ={this.setMode} ModeName ={this.state.ModeName} ModeText ={this.state.ModeText}/>

   
      <Routes>
      <Route exact path="/" element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="home" pageSize={this.numberOfNews} country={"in"} category={'general'}ApiKeyy={this.api}/>}/> 
         <Route exact path="/home"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="home" pageSize={this.numberOfNews} country={"in"} category={'general'}ApiKeyy={this.api}/>}/> 
        <Route exact path="/business"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="business" pageSize={this.numberOfNews} country={"in"} category={'business'}ApiKeyy={this.api}/>}/>
        <Route exact path="/entertainment"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="entertainment" pageSize={this.numberOfNews} country={"in"} category={'entertainment'}ApiKeyy={this.api}/>}/>
        <Route exact path="/general"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="general" pageSize={this.numberOfNews} country={"in"} category={'general'}ApiKeyy={this.api}/>}/>
        <Route exact path="/health"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="health" pageSize={this.numberOfNews} country={"in"} category={'health'}ApiKeyy={this.api}/>}/>
        <Route exact path="/science"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress} key="science"pageSize={this.numberOfNews} country={"in"} category={'science'}ApiKeyy={this.api}/>}/>
        <Route exact path="/sports"  element={<News ModeName ={this.state.ModeName} setProgress={this.setProgress}key="sports" pageSize={this.numberOfNews} country={"in"} category={'sports'}ApiKeyy={this.api}/>}/>
        <Route exact path="/technology"  element={<News  ModeName ={this.state.ModeName} setProgress={this.setProgress}key="technology" pageSize={this.numberOfNews} country={"in"} category={'technology'}ApiKeyy={this.api}/>}/>
       
       </Routes>


       </BrowserRouter>
       </>

     )
   }
 }
  
