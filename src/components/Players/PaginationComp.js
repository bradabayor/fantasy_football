import React, { Component } from "react";

import { Pagination } from "semantic-ui-react";

class PaginationComp extends Component {
  render() {
    return (
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        siblingRange={1}
        totalPages={10}
      />
    );
  }
}

export default PaginationComp;
