import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import FoodProduct from '../Foods/FoodProduct';

//Material-UI
import List from '@material-ui/core/List';
import DateNavigation from "../dateNavigation";
import styled from "styled-components";

const DivContainer = styled.div`
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

class Foods extends Component {
  render() {
    const { metaData, dateIndex } = this.props;
    return (

      <List style={{ width: "100%"}}>
          <DivContainer>
            <DateNavigation/>
          </DivContainer>
        { metaData.data_points[dateIndex].intake_list.map((data, idx) =>
          <FoodProduct key={idx} data={data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Foods);