import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardLayout from "../../../components/Card/CardLayout";

import dashboardStyle from "../../../assets/styles/dashboardStyle";

class BodyProfile extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div>
            <GridContainer grid>
            <CardLayout cardlayout>
              <GridItem gridlefttitle>
                <textTitle className={classes.textTitle}>USER PROFILE</textTitle>
              </GridItem>
              <GridItem gridleftcontents>
                <div className={classes.profileContents}>Explanation of User Profile</div>
              </GridItem>
            </CardLayout>
            </GridContainer>
        </div>

        )
  }

}

BodyProfile.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyProfile);