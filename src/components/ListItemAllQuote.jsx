import React from 'react';
import { ListGroup } from 'react-bootstrap';
import LanguageContext from '../languageContext/LanguageContext';
//  import translations from '../languageContext/translation';


function ListItem({ quote }) {
    const translations = {
        titleText: {
              en: quote.en,
              sr: quote.sr
          }
      }
     

    return (
        <ListGroup>
            <ListGroup.Item>
                <div>
                <LanguageContext.Consumer>
                {(value) => translations.titleText[value]}
                </LanguageContext.Consumer>
                    {/* <h6>{quote.en}</h6> */}
                    <h4>{quote.author}</h4>
                </div>


            </ListGroup.Item>
        </ListGroup>
    )
}
export default ListItem;