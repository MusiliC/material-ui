import React from 'react'
import  CardHeader  from '@material-ui/core/CardHeader'
import  CardContent  from '@material-ui/core/CardContent'
import  Card from '@material-ui/core/Card'
import { Avatar, IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { green, purple, red, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar:{
        backgroundColor: (note) => {
            if(note.category === 'work'){
                return yellow[700]
            }
             if(note.category === 'money'){
                return green[700]
            }
             if(note.category === 'todos'){
                return purple[700]
            }
            
                return red[700]
            
        }
    }
})

export default function NoteCard({note, handleDelete}) {

    const classes = useStyles(note)

    return (
        <div>
           <Card elevation={1}>
               <CardHeader

               avatar={
                   <Avatar className={classes.avatar}>
                       {note.category[0].toUpperCase()}
                   </Avatar>
               } 
                   action={
                       <IconButton onClick = { () => handleDelete(note.id )} >
                           <DeleteOutlined/>
                       </IconButton>
                   }
                   title={note.title}
                   subheader={note.category}
               />
               <CardContent>
                   <Typography variant="body2" color='textSecondary'>
                       {note.details}
                   </Typography>
               </CardContent>
           </Card>
        </div>
    )
}
