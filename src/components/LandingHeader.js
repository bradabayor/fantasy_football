import React, { Component } from 'react';

import { Grid, Header } from 'semantic-ui-react';

class LandingHeader extends Component {

  render() {
    return (
      <Grid>
        <Grid.Column floated='left' width={5}>
          <Header as="h4">Fantasy Football</Header>
        </Grid.Column>
        <Grid.Column floated='right' width={5} textAlign='right'>
          <p>Log In</p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LandingHeader;