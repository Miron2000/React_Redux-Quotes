import React from 'react';
import {connect} from 'react-redux';
import {getAllQuotes} from '../store/actions/postListActions';
import ListItemAllQuote from "../components/ListItemAllQuote";

class allQuote extends React.Component {



componentDidMount(){
this.props.getAllQuotes();
}


    render(){
        return(
            <div>
{this.props.allQuotes.quotes && this.props.allQuotes.quotes.map(item => <ListItemAllQuote quote={item}/>)}
            </div>

        )
    }
}
//функція яка приймає стейт і повертає шматочки стейту
const mapStateToProps = (state) =>{
return{
    allQuotes: state.postList
}
};
//обєкт який буде містити наші матоди(actions)
const mapDispatchToProps ={
    getAllQuotes
};
export default connect(mapStateToProps, mapDispatchToProps) (allQuote);