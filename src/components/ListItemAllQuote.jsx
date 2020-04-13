import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ListItem({ quote }) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <div>
                    <h6>{quote.en}</h6>
                    <h4>{quote.author}</h4>
                </div>


            </ListGroup.Item>
        </ListGroup>
    )
}
export default ListItem;