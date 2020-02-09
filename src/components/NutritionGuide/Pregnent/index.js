import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import FoodProduct from '../../Foods/FoodProduct';

//Material-UI
import List from '@material-ui/core/List';
import styled from "styled-components";
import PregnentData from "../PregnentData";

const DivContainer = styled.div`
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

class Pregnent extends Component {
    render() {
        const { metaData, dateIndex } = this.props;
        return (

            <List style={{ width: "100%"}}>
                <DivContainer>
                    <h3 style={{fontStyle:''}}>Food for pregnant women</h3>
                </DivContainer>
                { metaData.data_pregnent[dateIndex].pregnent_list.map((data, idx) =>
                    <PregnentData key={idx} data={data} />
                )}
                <DivContainer>
                    <h3>Food for weight gain</h3>
                </DivContainer>
                { metaData.data_weight_gain[dateIndex].weight_list_gain.map((data, idx) =>
                    <PregnentData key={idx} data={data} />
                )}
                <DivContainer>
                    <h3>Food for weight loss</h3>
                </DivContainer>
                { metaData.data_weight_loss[dateIndex].weight_list_loss.map((data, idx) =>
                    <PregnentData key={idx} data={data} />
                )}
            </List>
        )
    }
}

const mapStateToProps = state => ({
    metaData: state.metaData,
    dateIndex: state.dateIndex
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Pregnent);