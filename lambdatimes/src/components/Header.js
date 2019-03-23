import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

//************* STYLED COMPONENTS BELOW ************ */

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
`;

const HeaderdDate = styled.div`
  margin-left: 25px;
  flex: 1;
`;

const HeaderH1 = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderTemp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

class Header extends React.Component {
  state = { date: '' };
  componentDidMount = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    this.setState({ date: `${month}/${date}/${year}` });
  };

  render() {
    return (
      <HeaderDiv>
        <HeaderdDate>{this.state.date}</HeaderdDate>
        <HeaderH1>Lambda Times</HeaderH1>
        <HeaderTemp>78°</HeaderTemp>
      </HeaderDiv>
    );
  }
}

export default Header;
