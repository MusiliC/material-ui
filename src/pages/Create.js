import  Typography  from "@material-ui/core/Typography";
import  Button  from "@material-ui/core/Button";
import  Container  from "@material-ui/core/Container";
import  SendIcon  from "@material-ui/icons/Send";
import { makeStyles  } from "@material-ui/styles";
import  TextField from "@material-ui/core/TextField";
import { useState } from "react";
import  Radio from "@material-ui/core/Radio";
import  RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";
import  FormControl from "@material-ui/core/FormControl";
import  FormLabel from "@material-ui/core/FormLabel";
import Axios from 'axios';
import { useHistory } from "react-router-dom";

//import { blue } from "@material-ui/core/colors";



const useStyles = makeStyles({

    field: {

        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
 
})


const Create = () => {

    const history = useHistory()
    const handleSubmit = (e) =>{

        e.preventDefault()

        Axios.post("http://localhost:3003/insert", {

            title: title,
            details: details,
            category: category
        })

        history.push('/')
    }

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("")
    const [category, setCategory] = useState("work")

    const classes = useStyles()

    return ( 

        <Container>
            <Typography 
            
            variant="h6"
            color = "textSecondary"
            gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                <TextField
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                className={classes.field}
                label="Note Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                />

                <TextField
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
                className={classes.field}
                label="Details"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                />

                <FormControl className =  {classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={ (e) => {
                    setCategory(e.target.value)
                }}>
                    <FormControlLabel value="money" control={<Radio/>} label="Money" />
                    <FormControlLabel value="todos" control={<Radio/>} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio/>} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio/>} label="Work" />
                </RadioGroup>
                </FormControl>

                <Button
           
             type="submit"
             color="secondary"
             variant="contained"
             endIcon = {< SendIcon/> } 
             >SUBMIT</Button>

            </form>

                
           
        </Container>
     );
}
 
export default Create;