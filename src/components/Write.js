import React,{useState} from "react";
import { Link } from "react-router-dom";
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import Button from '@mui/material/Button';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';

const  Write = ()=> {
    const [data,setData] = useState("hey")
    const [dispay,setDisplay]  = useState()
    const handleClick = () =>{
        setDisplay(<input type="file"/>)

    }
    const inputChange = () =>{
     
    }
    return (
        <>
        <div className="write-left-align"> 
           <div className="header-write">
           <h2 className="create-heading-write">Search a Keyword:</h2>
               <input type="text" placeholder="search for keyword"
               onChange={(event)=>{
                   setData = (event.target.value);
               }}/>
               <Link to="/" style= {{textDecoration:"none",display:"inline-block"}}>
               <Button variant="contained" color="primary">Home</Button>
               </Link>
           </div>
           <div className="create-write">
               <h2 className="create-heading-write">Create</h2>
            <CreateNewFolderRoundedIcon fontSize="large"></CreateNewFolderRoundedIcon>
           </div>   
           <div className="input">
               <input type="text" placeholder="enter the title of book" />
               <CheckBoxOutlinedIcon fontSize="large"></CheckBoxOutlinedIcon>
           </div>
           <div className="pen-down">
               <h2 className="create-heading-write">Pen Down</h2>
           </div>
           <div className="contents">
           <TextsmsOutlinedIcon></TextsmsOutlinedIcon>
           <CollectionsIcon onClick={handleClick}> </CollectionsIcon>
    
           </div>
           <div className="reset-done">
               <DeleteSweepRoundedIcon></DeleteSweepRoundedIcon>
               <FileDownloadDoneOutlinedIcon></FileDownloadDoneOutlinedIcon>
           </div>
        </div>
        </>
    )
}


export default Write;