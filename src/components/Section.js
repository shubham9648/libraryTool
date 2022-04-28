import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Section = () =>{
    return (
        <>
        <div className="main-section">
            <div className="left-align">
                <h2 className="left-align-heading">More Topics</h2>
                <div className="nested-left-align">
                    <h3 className="story-text">Some Stories on this project</h3>
                    <p>I used ReactJS in this project.This is my 2nd project in 
                        ReactJS. Every line of code available on my github repository.
                        This library managment tool is about exploring and saving my favourite Books.
                        Apart from coding, it also teaches a lot more about managing libraries and saving my 
                        favourite books in it. </p>
                </div>
            </div>
            <div className="right-align">
                
                    <h3 className="right-align-h">Please Select from one of the book to Read!</h3>
                 <h2 className="author">About the Author:</h2>
                <div className="about-right">
                <h2>Shubham Tiwari</h2>
                <div className="my-image"></div>
                </div>
                <p className="about-right">Some details about the author as mentioned
                in bio or if reader wants AuthorDescription can change in every topic 
                showing author background on the topic.</p>
                <hr></hr>
                <div className="view-div">
                    <h2>Your View Here:</h2>
                    <form className="view-input">
                     <label for="fName">Name:</label>
                     <input type="text" id="fName"/><br></br>
                     <label for="email">Email:</label>
                     <input type="text" id="email"/><br></br>
                     <label for="opinion">Your Opinion Here:</label>
                     <input type="text" id="opinion"/><br></br>
                     {/* <input type="submit" value="this button do nothing"/> */}
                     <Button variant="contained" color="primary">This Button do Nothing</Button>
                    </form>
                </div>
                <h2>Some Useful Comments!</h2>
                <div className="comment-1">
                   <div className="profile"></div> <span>Shubham Tiwari 2</span>
                </div>
                <div className="comment-1">
                   <div className="profile"></div> <span>Shubham Tiwari 2</span>
                </div>
            </div>
        </div>
        <div className='link-name'>
     {/* <Link to="/" >Home</Link> */}
    <Link to="/about" style= {{textDecoration:"none",display:"inline-block"}}>
        <Button variant="contained" color="primary">About</Button>
    </Link>
    <Link to="/write" style= {{textDecoration:"none",display:"inline-block"}}>
         <Button variant="contained" >
             Write Here</Button></Link>
     <Link to="/about" style= {{textDecoration:"none",display:"inline-block"}}>
        <Button variant="contained" color="primary">About us</Button>
    </Link>        
    </div> 
        </>
    )
}

export default Section;