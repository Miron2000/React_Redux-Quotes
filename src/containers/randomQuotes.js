import React from 'react';
import {connect} from 'react-redux';
import {getRandomQuotes} from '../store/actions/postListActions';
import ListItemRandomQuote from "../components/ListItemRandomQuote";

class randomQuote extends React.Component {



componentDidMount(){
this.props.getRandomQuotes();
}


    render(){
       console.log(this.props.randomQuote, "PROPS")
        return(
            <div>
              <ListItemRandomQuote randomQuote={this.props.randomQuote.randomQuote}/>
            </div>

        )
       
    }
}
//функція яка приймає стейт і повертає шматочки стейту
const mapStateToProps = (state) =>{
    console.log(state, 'STATE')
return{
    randomQuote: state.randomQuote
   
}
};
//обєкт який буде містити наші матоди(actions)
const mapDispatchToProps ={
    getRandomQuotes
};
export default connect(mapStateToProps, mapDispatchToProps) (randomQuote);