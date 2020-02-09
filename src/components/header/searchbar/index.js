import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { quickSearchFoods, setSearchFocus, setSearchDefocus } from '../../../store/actions';
import styled from 'styled-components';
//Components
import SearchButton from '../../Header/SearchButton';
import Logo from "../../Logo/Logo3.png";
//Material-UI
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const timeoutDuration = 300;

const StyledDivContainer = styled.div`
  display: flex;
  min-height: 70px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

const StyledDivSearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  margin: 10px;
`


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      typing: false,
      typingTimeout: 0
    };
    this.searchBarRef = React.createRef();
  };

  //To focus search bar
  focusSearchBar = () => {
    this.searchBarRef.current.focus();
  }
  
  //To defocus search bar
  defocusSearchBar = () => {
    this.props.setSearchFocus(false);
    this.props.quickSearchFoods('');
    this.setState({typing:false, searchValue:''});
  }

  //Request to send search, searches when timeout or no new changes
  handleSearchChange = (e) => {
    const self = this;
    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }
    self.setState({
       searchValue: e.target.value,
       typing: false,
       typingTimeout: setTimeout(function () {
           self.props.quickSearchFoods(self.state.searchValue);
         }, timeoutDuration)
    });
  }

  render() {
    const { quickSearchData, searchBarFocus, setSearchFocus, setSearchDefocus } = this.props;

    //If grey cover needed
    let cover = false;
    if (searchBarFocus || quickSearchData.common.length > 0 || quickSearchData.branded.length > 0) {
      cover = true;
    }
    
    return(
      <>
        <StyledDivContainer
          style={cover ? {backgroundColor: 'rgba(0,0,0,0.25)'} : {}}
          onClick={() => {if (cover === true) { setSearchDefocus() }}}
        >
          <Link to="/">
            <img src={Logo} alt="Nurture" style={{width:'250px', height:'5%',margin: '0 150px 0 5%'}}/>
          </Link>
          <StyledDivSearchBar>
            <div style={{ margin: '0 5px 0 0'}}>
              <SearchIcon color="secondary" style={{margin: '10px'}}  />
            </div>
            <InputBase
              inputRef={this.searchBarRef}
              placeholder="Search foods…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: 'black', flexGrow: 1 }}
              onChange={(e)=> this.handleSearchChange(e)}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
          </StyledDivSearchBar>
          <Link to="/nutritionguide" style={{textDecoration:'none' }}>
            <h3 style={{color:'white'}}>Nutrition Guide</h3>
          </Link>
          <Link to="/foodtoavoid" style={{textDecoration:'none' }}>
            <h3 style={{color:'white'}}>Food To Avoid</h3>
          </Link>

        </StyledDivContainer>
        <SearchButton
          isFocused={cover}
          focusFunction={this.focusSearchBar}
          defocusFunction={setSearchDefocus}
        />
      </>
    )
  }
}

const mapStateToProps = state => ({
  quickSearchData: state.quickSearchData,
  searchBarFocus: state.searchBarFocus,
})

const mapDispatchToProps = dispatch => ({
  setSearchFocus: (e) => dispatch(setSearchFocus(e)),
  quickSearchFoods: (e) => dispatch(quickSearchFoods(e)),
  setSearchDefocus: () => dispatch(setSearchDefocus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);

