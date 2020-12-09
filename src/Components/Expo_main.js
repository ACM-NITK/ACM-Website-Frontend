import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../Shared/CSS/Expo_main.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
          transform: 'scale(1.1)',
      },
      boxShadow: 'rgba(144, 191, 255) 0px 1px 6px',
    },
    space: {
      paddingBottom : '5.25%',
    },
  }); 

  function MediaCard({sig}) {
    const classes = useStyles();
  
    return (
    <div className={classes.space}>    
      <Card className={classes.root}>
        <Link to={`/expo/${sig.id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={sig.name}
            height="350"
            image={sig.image}
            title={sig.name}
          /> 
        </CardActionArea>
        </Link>
      </Card>
    </div>
    );
  }



class Expo_main extends Component{

  render () {

      const sigs = this.props.sigs.map((sig) => {
        return (
            <div key={sig.id} className="col-md-4 m-1">
                <MediaCard sig={sig} />
            </div>
        );
        });
  
    return(
        <div className="wrapper">
          <h1 className="Header">PROJECT EXPO</h1>  
            <div className="box">
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
            </div>
            <div className="container">
                <div className="row">
                    {sigs}
                </div>
            </div>
        </div>
    )
  }
}

export default Expo_main;