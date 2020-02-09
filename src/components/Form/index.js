import React, {Component} from 'react';
import { appendExtraFood } from '../../store/actions';
import {appendFood, setInspectFocus, setInspectFood} from "../../store/actions";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";

class Form extends Component {
    state = {
        food_name: '',
        serving_qty: '',
        serving_unit: '',
        serving_weight_gram: '',
        nf_calories: '',
        meal_type: ''
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            food_name: '',
            serving_qty: '',
            serving_unit: '',
            serving_weight_gram: '',
            nf_calories: '',
            meal_type: ''
        })
    }

    render() {
        return (

            <form>
                <input name="food_name"
                       placeholder="food_name"
                       value={this.state.food_name}
                       onChange={e => this.change(e)}
                /><br/>
                <input placeholder="serving_qty"
                       name="serving_qty"
                       value={this.state.serving_qty}
                       onChange={e => this.change(e)}
                /><br/>
                <input placeholder="serving_unit"
                       name="serving_unit"
                       value={this.state.serving_unit}
                       onChange={e => this.change(e)}
                /><br/>
                <input placeholder="serving_weight_gram"
                       name="serving_weight_gram"
                       value={this.state.serving_weight_grams}
                       onChange={e => this.change(e)}
                /><br/>
                <input placeholder="nf_calories"
                       name="nf_calories"
                       value={this.state.nf_calories}
                       onChange={e => this.change(e)}
                /><br/>
                <input placeholder="serving_size"
                       name="serving_size"
                       value={this.state.serving_size}
                       onChange={e => this.change(e)}
                /><br/>
                <input placeholder="meal_type"
                       name="meal_type"
                       value={this.state.meal_type}
                       onChange={e => this.change(e)}
                /><br/>
                {/*<button onClick={(e) => this.onSubmit(e)}>Submit</button>*/}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleAddFood()}
                > ADD </Button>
            </form>

        );
    }
    handleAddFood = () => {
        const { appendExtraFood  } = this.props;
        const { food_name, serving_unit, serving_weight_gram, serving_qty, nf_calories, serving_size, meal_type } = this.state;

        //Check and regester errors


        appendExtraFood(food_name, serving_unit, serving_weight_gram, serving_qty, nf_calories, serving_size, meal_type);

    }
}
const mapDispatchToProps = dispatch => ({
    appendExtraFood: (food_name, serving_unit, serving_weight_gram, serving_qty, nf_calories, serving_size, meal_type) => (appendExtraFood(food_name, serving_unit, serving_weight_gram, serving_qty, nf_calories, serving_size, meal_type))
})
export default connect(mapDispatchToProps)(Form);

