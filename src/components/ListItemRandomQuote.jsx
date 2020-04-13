import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ListItem({ randomQuote }) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <div>
                    <h6>{randomQuote.en}</h6>
                    <h4>{randomQuote.author}</h4>
                </div>


            </ListGroup.Item>
        </ListGroup>
    )
}
export default ListItem;