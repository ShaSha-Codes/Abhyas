import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

export default function Category(props){
    const Photo = parseInt(props.type);
    const selectForm = props.selectForm;
    return(
        <div className="inline-box">
       <button onClick={()=>selectForm(props.type)} className="category">
           <br/>
            {Photo===1 && <SchoolIcon/>}
            {Photo===2 && <CoPresentIcon/>}
            {Photo===3 && <CardMembershipIcon/>}
           {props.name}</button>
        </div>
          )
        
}