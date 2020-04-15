import React from 'react';
import {connect} from 'react-redux';
import { Form } from 'react-bootstrap';
import {getAllQuotes} from '../store/actions/postListActions';
import ListItemAllQuote from "../components/ListItemAllQuote";
import LanguageContext from '../languageContext/LanguageContext';
//  import translations from '../languageContext/translation';

class allQuote extends React.Component {
    state = {
        language: this.context //можно і language:'EN'
      }

      languageChange = (event) => {
        console.log(event.target.checked)
        this.setState({
          language: event.target.checked ? 'sr' : 'en'
        })
      }

      static contextType= LanguageContext;


componentDidMount(){
this.props.getAllQuotes();
}
// {this.props.allQuotes.quotes && this.props.allQuotes.quotes.map(item => <ListItemAllQuote quote={item}/>)}

    render(){
        return(
            <LanguageContext.Provider value={this.state.language}>
           
          <div>
            En
        <Form.Check onChange={this.languageChange}
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            SR
      </div>

{this.props.allQuotes.quotes && this.props.allQuotes.quotes.map(item => <ListItemAllQuote quote={item}/>)}

            </LanguageContext.Provider>

        )
    }
}
//функція яка приймає стейт і повертає шматочки стейту
const mapStateToProps = (state) =>{
return{
    allQuotes: state.allQuotes
}
};
//обєкт який буде містити наші матоди(actions)
const mapDispatchToProps ={
    getAllQuotes
};
export default connect(mapStateToProps, mapDispatchToProps) (allQuote);