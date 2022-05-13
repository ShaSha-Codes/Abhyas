import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


function AskQuestionCard(props) {
    const [value, setValue] = React.useState('');
    const {setQuestionContent} = props
    function handleChange(event){
        setValue(event.target.value);
        setQuestionContent(prev=>
            prev.map((item,index)=>{
                if(index===props.num){
                    item.userAns=event.target.value
                }
                return item
            }
        ))
    }

    


  return (
  
        <Box p={1}>
            <Paper elevation={12} sx={{borderRadius:"20px", width:"600px"}}>
                <Box p={4}>
                    <Typography variant="p" component="p">
                        Question {props.num+1}
                    </Typography>
                    <Typography variant="h5" component="p">
                        {props.question.question}
                    </Typography>
                    <hr/>
                    <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="data"
                        onChange={handleChange}
                     >
                        <FormControlLabel
                            value={props.question.option1}
                            control={<Radio />}
                            label={
                                <Typography variant="h5" component="p">
                                    {props.question.option1}
                                </Typography>} 
                        />
                        
                        <FormControlLabel
                            value={props.question.option2}
                            control={<Radio />}
                            label={
                                <Typography variant="h5" component="p">
                                    {props.question.option2}
                                </Typography>} 
                        />

                        <FormControlLabel
                            value={props.question.option3}
                            control={<Radio />}
                            label={
                                <Typography variant="h5" component="p">
                                    {props.question.option3}
                                </Typography>} 
                        />

                        <FormControlLabel
                            value={props.question.option4}
                            control={<Radio />}
                            label={
                                <Typography variant="h5" component="p">
                                    {props.question.option4}
                                </Typography>} 
                        />

                        </RadioGroup>
                    </FormControl>
                </Box>
            </Paper>
        </Box>
 
  )
}

export default AskQuestionCard