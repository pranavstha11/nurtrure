import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
//Components
import Header from './components/header';
import Body from './components/Body';
//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import NutritionGuide from "./components/NutritionGuide";
import FoodToAvoid from "./components/FoodToAvoid";
import Form from "./components/Form";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  min-height: 100vh;
`

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#6200ee',
      },
      secondary: {
          main: '#000000',
      },
  },
});


class App extends Component {

  render() {
    return (
      <StyledApp >
        <MuiThemeProvider theme={theme}>
          <Header />
          <Route exact path="/" component={Body}/>
          <Route exact path="/nutritionguide/" component={NutritionGuide}/>
          <Route exact path="/foodtoavoid/" component={FoodToAvoid}/>
          <Route exact path="/form/" component={Form}/>

        </MuiThemeProvider>
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
