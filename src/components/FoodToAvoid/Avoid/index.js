import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import FoodProduct from '../../Foods/FoodProduct';

//Material-UI
import List from '@material-ui/core/List';
import styled from "styled-components";
import AvoidData from "../AvoidData";

const DivContainer = styled.div`
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

class Avoid extends Component {
    render() {
        const { metaData, dateIndex } = this.props;
        return (

            <List style={{ width: "100%"}}>
                <DivContainer>
                    <h3>Food to Avoid for Pregnant Women</h3>
                </DivContainer>
                { metaData.data_avoid[dateIndex].avoid_list.map((data, idx) =>
                    <AvoidData key={idx} data={data} />
                )}
                <DivContainer>
                    <h3>Food to Avoid when you are trying to loose weight</h3>
                </DivContainer>
                { metaData.data_avoid_weight[dateIndex].avoid_list_weight.map((data, idx) =>
                    <AvoidData key={idx} data={data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Avoid);