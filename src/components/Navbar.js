import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <>
        <div className="from- bg-gradient-to-r from-indigo-400 to-sky-100 sticky top-0 z-50 space-x-2 p-1">
          <TopbarLocalLink link="/" text="Etusivu"/>        
          <TopbarLink link="https://github.com/Lounley" text="Github"/>    
          <TopbarLink link="https://www.linkedin.com/in/juho-suomela-1b698b194/" text="Linkedin"/>   
          <TopbarLocalLink link="/projects" text="Projects"/>           
          <TopbarLink link="https://www.instagram.com/juhd0/" text="Instagram"/> 
          <TopbarLink link="https://www.youtube.com/@vaasanlaskuvarjokerho1110" text="Skydive"/>
          <TopbarLocalLink link="/about" text="About me"/>

        </div>
      </>
  
    );
  }
  
  const TopbarLink = (props) => {
    return (
      <a href={props.link} className="text-4xl bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 rounded text-transparent font-bold no-underline font-bold px-1">{props.text}</a>
    )
  }
  
  const TopbarLocalLink = (props) => {
    return (
      <Link to={props.link} className="text-4xl bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 rounded text-transparent font-bold no-underline font-bold px-1">{props.text}</Link>
    )
  }
  
  
  
  export default Navbar;