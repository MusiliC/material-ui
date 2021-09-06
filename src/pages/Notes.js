import { useEffect, useState } from "react";
import Axios from 'axios';
import  Grid from "@material-ui/core/Grid";
//import  Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";



const Notes = () => {

    const [notes, setNotes] = useState([])

    const handleDelete = (id) => {

        Axios.delete(`http://localhost:3003/delete/${id}`).then((response) => {

        setNotes(

            notes.filter((val) =>{

               return val.id !== id
            })
        )
        })


        
    }

    useEffect(()=>{

        Axios.get("http://localhost:3003/select").then((response) => {
            setNotes(response.data);
            console.log(notes);
        })
    }, [notes])

    return ( 

        <Container>
        <Grid  container spacing={3}>

            { notes.map( (val) => {
                return(
                    <Grid key={val.id} xs={12} md={6} lg={4}> 
                    <NoteCard note={val} handleDelete={handleDelete}/>
                    </Grid>
                )
            })}
        </Grid>
            
        </Container>
     );
}
 
export default Notes;