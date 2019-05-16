import React from 'react';
import { addAction, addActionTen,removeAction,removeActionTen,reset} from './actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CounterContainer extends React.Component {
  
    handleAdd = ()=>{
        this.props.addAction();
    }
    handleAddTen = ()=>{
        this.props.addActionTen();
    }
    handleRemove = ()=>{
        this.props.removeAction();
    }
    handleRemoveTen = ()=>{
        this.props.removeActionTen();
    }
    handleReset = ()=>{
        this.props.reset();
    }
    
    render() {
        return (
            <React.Fragment>
                <p id="render-store"></p>
                <button onClick={this.handleAdd} id="add">+</button>
                <button onClick={this.handleRemove} id="remove">-</button>
                <button onClick={this.handleAddTen} id="add-ten">+10</button>
                <button onClick={this.handleRemoveTen} id="remove-ten">-10</button>
                <button onClick={this.handleReset} id="reset">reset</button>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({addAction,addActionTen,removeAction,removeActionTen,reset},dispatch);

    }


export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
