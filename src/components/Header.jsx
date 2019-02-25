import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../api/passport";
import styled from "styled-components";
import { Header, Label, Button, Dropdown } from "semantic-ui-react";

class AppHeader extends Component {
  handleUserDropdown = (e, data) => {
    console.log(data.value);
    if (data.value === "Log Out") {
      this.props.deAuthUser();
    }
  };

  handleLeagueChange = (e, data) => {
    console.log(data.value);
    this.props.changeCurrentLeague(data.value);
  };

  render() {
    const userOptions = [
      {
        key: "Account",
        text: "Account",
        value: "Account"
      },
      {
        key: "Log Out",
        text: "Log Out",
        value: "Log Out"
      }
    ];

    const leagueOptions = [];
    if (this.props.leagues) {
      this.props.leagues.map(league => {
        leagueOptions.push({
          key: league.id,
          text: league.title,
          value: {
            id: league.id,
            title: league.title
          }
        });
        return null;
      });
    }

    return (
      <HeaderContainer>
        <HeaderDiv>
          <Header as="h2">Fumble</Header>
        </HeaderDiv>
        <HeaderDiv>
          {Auth.isUserAuthenticated() ? (
            <Fragment>
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="trophy"
                options={leagueOptions}
                text={
                  this.props.currentLeague
                    ? this.props.currentLeague
                    : "Select League"
                }
                onChange={this.handleLeagueChange}
              />
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="user"
                options={userOptions}
                text={this.props.user}
                onChange={this.handleUserDropdown}
              />
            </Fragment>
          ) : (
            <Redirect to="/login" />
          )}
        </HeaderDiv>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default AppHeader;
