import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      marginTop: theme.spacing(2),
    },
    justifyContent: "center"
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

export default function ImageAvatars({dp}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={dp} className={classes.large} />
    </div>
  );
}
