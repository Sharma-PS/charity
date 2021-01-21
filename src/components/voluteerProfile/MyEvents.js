import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  headingTxt:{
    fontWeight:500,
    color:"#d0d4da"
  }
}));

export default function MyEvents({events}) {
  const classes = useStyles();
  const Events = events.map(ele =>{
    let color = (ele.currentStatus === "Completed") ? ("#1cf548") : ("#c7a900");
    return (
      <div key= {ele.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={ele.img} alt={ele.img}/>
          </ListItemAvatar>
          <ListItemText primary={ele.title} secondary={ele.position} className="listItemTextColor"/>
          <small style={{color:color}}>{ele.currentStatus}</small>&nbsp;&nbsp;&nbsp;
          <Link to={"/events/"+ele.id} className="aView">View</Link>
        </ListItem>
      </div>
    )
  })
  return (
    <Col md="4" sm="11" lg="4" className="eventGroup">
      <List >
      <Typography gutterBottom variant="h4" component="h2" align="center" className={classes.headingTxt}> My Events </Typography>
      <Divider style={{backgroundColor:" #8b949e"}}/>
        {Events}
      </List>
    </Col>
  );
}
