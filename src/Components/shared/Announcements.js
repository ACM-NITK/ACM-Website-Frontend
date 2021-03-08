import React from 'react';
import '../../Shared/CSS/home2.css'
import '../../Shared/CSS/main.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';

import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

function Announcements({items}) {

  var lastitem = items[items.length - 1];

  const card = items.map((item) => {
    if(item.name === lastitem.name) {
      return (
        <Card className="announce_card2">
        <CardBody>
          <CardTitle className="announce_card_heading">{item.name} <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
          <Link to={item.link}><CardText className="announce_card_text">{item.description}</CardText></Link>
        </CardBody>
      </Card>
      );
    }
    else return(
        <Card className="announce_card">
          <CardBody>
            <CardTitle className="announce_card_heading">{item.name} <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
            <Link to={item.link}><CardText className="announce_card_text">{item.description}</CardText></Link>
          </CardBody>
        </Card>
      )
  });

  return(
    <CardGroup>    
      {card}
    </CardGroup>
  );
}

export default Announcements;