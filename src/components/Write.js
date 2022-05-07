import React,{useState} from "react";
import { Link } from "react-router-dom";
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import Button from '@mui/material/Button';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';


const  Write = () => {
    {/*storing data from input box to state */}
    const [data,setData] = useState(
        {keyword:"",title:""}
        )
    const[keyword,setKeyword] = useState("")    
    const [display,setDisplay]  = useState(false)
    const [displayText,setDisplayText] = useState(false)
    
    const handleClick = () =>{
        //setDisplay(prevdis => !prevdis ? :"")
        setDisplay(!display);  
    }

    const handleClick1 = () =>{
        setDisplayText(!displayText);
    }
    const changeKeyword = () =>{
        setKeyword(keyword)
    } 
//    const checkToggle = () =>{
//        alert
//    }
    const inputChange = (event) =>{
      setData(prev =>{
          return{
              ...prev,
              [event.target.name]: event.target.value
          }
      })
    }
      console.log(data)
    return (
        <>
        <div className="write-left-align"> 
           <div className="header-write">
              <h2 className="create-heading-write">Search a Keyword:</h2>
                 <input type="text"
                    placeholder="search for keyword"
                    className="input-h2"
                    onChange={changeKeyword}
                    />
               {/* for home button */}
               <Link to="/" 
                 style= {{textDecoration:"none",
                 display:"inline-block"
                 }}>
                   <Button
                    variant="contained" 
                    color="primary">
                    Home
                    </Button>
               </Link>
           </div>

           <div className="create-write">
             <div className="create-write1">
               <h2 className="create-heading-write">
                Create
                </h2>
               <CreateNewFolderRoundedIcon
                fontSize="large">
               </CreateNewFolderRoundedIcon>
           </div> 

              <div className="input">
                <input type="text"
                  placeholder="enter the title of book"
                  onChange={inputChange}
                  name="title"
                  value={data.title}
                   />
               <CheckBoxOutlinedIcon fontSize="large"></CheckBoxOutlinedIcon>
              </div>
           </div>

           <div className="pen-down">
               <h2 className="create-heading-write">
                Pen Down
                </h2>
           </div>

           <div className="contents">
           <TextsmsOutlinedIcon
            onClick={handleClick1}>
            </TextsmsOutlinedIcon>
           {
               display ? <input type="file" /> : null
           }
        
           <CollectionsIcon 
           onClick={handleClick}>
           </CollectionsIcon>
           {
            displayText ? <textarea type="input"
             cols="50"
             row="16"
             className="input-para"
             onChange={inputChange}
             name="keyword"
             value={data.keyword}  
              ></textarea> : null
           }
           </div>
           
           <div className="reset-done">
               <DeleteSweepRoundedIcon></DeleteSweepRoundedIcon>
               <FileDownloadDoneOutlinedIcon></FileDownloadDoneOutlinedIcon>
           </div>
         <div className="text-show">
             <h1 className="show-title">{data.title}</h1>
         </div>
        </div>
        </>
    )
}


export default Write;