import React, { Component } from 'react';
import propTypes from "prop-types";
import { withStyles } from '@material-ui/core';
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import CardLayout from "../../../components/Card/CardLayout";
import GridItem from "../../../components/Grid/GridItem";
// Tooltip
import Tooltip from '@material-ui/core/Tooltip';
// style
import dashboardStyle from "../../../assets/styles/dashboardStyle"
// icon
import map from "../../../assets/images/map.svg"
import question from "../../../assets/images/question.svg"

import circledeeppurple from "../../../assets/images/circledeeppurple.svg"
import circlegreen from "../../../assets/images/circlegreen.svg"
import circlesoftgreen from "../../../assets/images/circlesoftgreen.svg"
import circlered from "../../../assets/images/circlered.svg"

// map
// import LocationMap from "../../Map/LocationMap/LocationMap"



// Tooltip text
const historytooltip = `
history tooltip
`;
const movetooltip = `
move tooltip
`;
const tabletooltip = `
table tooltip
`;




class BodyLocalProfile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer gridlocation>
        <CardLayout cardlayout>
        <GridItem gridrow>

        <div className={classes.divTitle}>
          <span className={classes.divTitleContents}>
            <img src={map} style={{height: 60}} />
          </span>
          <span className={classes.divTitleContents}>
            User information by region
          </span>
          <span className={classes.divTitleContents}>
            <Tooltip title={historytooltip} placement="top-start">
              <img src={question} style={{height:15}}/>
            </Tooltip>
          </span>
        </div>

        <div className={classes.divLocalHistoryBox}>
          <div className={classes.divHistoryColumnFirst}>
            <div>
              Google Map
            </div>
          </div>

          <div className={classes.divHistoryColumnSecond}>
            <div className={classes.divHistoryContents}>
              <div className={classes.divTitleSubs}>
                <span className={classes.divTitleContents}>
                  Floating population
                </span>
                <span className={classes.divTitleContents}>
                  <Tooltip title={movetooltip} placement="right">
                    <img src={question} style={{height:15}}/>
                  </Tooltip>
                </span>
              </div>

            
              <div className={classes.divSimpleBorder}>
                <ul className={classes.ulLHContents}>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlered} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Date</span>
                    <span className={classes.spanHistoryContents}>date value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlegreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>All</span>
                    <span className={classes.spanHistoryContents}>All values</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlesoftgreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Male</span>
                    <span className={classes.spanHistoryContents}>Male value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlesoftgreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Female</span>
                    <span className={classes.spanHistoryContents}>Female value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circledeeppurple} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Age 15~20</span>
                    <span className={classes.spanHistoryContents}>Age value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circledeeppurple} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Age 21~25</span>
                    <span className={classes.spanHistoryContents}>Age value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circledeeppurple} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Age 26~30</span>
                    <span className={classes.spanHistoryContents}>Age value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circledeeppurple} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Age 31~40</span>
                    <span className={classes.spanHistoryContents}>Age value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circledeeppurple} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Age 41~50</span>
                    <span className={classes.spanHistoryContents}>Age value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circledeeppurple} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>Age 51~70</span>
                    <span className={classes.spanHistoryContents}>Age value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        </GridItem>
        </CardLayout>
      </GridContainer>


    )
  }
}

BodyLocalProfile.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyLocalProfile);