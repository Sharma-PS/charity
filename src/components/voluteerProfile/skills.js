import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, ListItemIcon, Typography } from '@material-ui/core';
import { Col } from 'reactstrap';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  headingTxt:{
    fontWeight:500,
    color:"#d0d4da"
  }
}));

export default function Skills({skills}) {
  const classes = useStyles();
  const Skills = skills.map((ele,index) =>{
    return (
      <div key= {index}>
        <ListItem>
            <ListItemIcon style={{color:"whitesmoke"}}>
            <StarIcon />
            </ListItemIcon>
          <ListItemText primary={ele} secondary={index+1} className="listItemTextColor"/>
        </ListItem>
      </div>
    )
  })
  return (
    <Col md="3" sm="11" lg="3" className="eventGroup">
      <List >
      <Typography gutterBottom variant="h4" component="h2" align="center" className={classes.headingTxt}> My Skills </Typography>
      <Divider style={{backgroundColor:" #8b949e"}}/>
        {Skills}
      </List>
    </Col>
  );
}
