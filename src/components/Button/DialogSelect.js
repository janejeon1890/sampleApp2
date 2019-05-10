import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
// core
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchButton from '../Button/SearchButton'
// style
import dialogSelectStyle from './styles/DialogSelectStyle';


class DialogSelect extends React.Component {
  state = {
    open: false,
    do: '',
    city: '',
    gu: '',
    dong: '',
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.dialogContents}>
        <DialogContent >
          {/* <form className={classes.container}> */}

          {/* 도 */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-native-simple"
              style={{color: '#b05fc3'}}
            >
              Do
            </InputLabel>
            <Select
              native
              value={this.state.do}
              onChange={this.handleChange('do')}
              input={
                <OutlinedInput
                  name="do"
                  labelWidth={this.state.labelWidth}
                  id="outlined-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>Gyounggi-do</option>
              <option value={20}>Seoul</option>
            </Select>
          </FormControl>

          {/* 시/도 */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-native-simple"
              style={{color: '#b05fc3'}}
            >
              City
            </InputLabel>
            <Select
              native
              value={this.state.city}
              onChange={this.handleChange('city')}
              input={
                <OutlinedInput
                  name="City"
                  labelWidth={this.state.labelWidth}
                  id="outlined-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>Seoul</option>
              <option value={20}>Gyounggi-do</option>
            </Select>
          </FormControl>

          {/* 구 */}
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-native-simple"
                style={{color: '#b05fc3'}}
              >
                Gu
              </InputLabel>
              <Select
                native
                value={this.state.gu}
                onChange={this.handleChange('gu')}
                input={
                  <OutlinedInput
                    name="Gu"
                    labelWidth={this.state.labelWidth}
                    id="outlined-native-simple"
                  />
                }
              >
                <option value="" />
                <option value={10}>Seocho-gu</option>
                <option value={20}>Gangnam-gu</option>
                <option value={30}>Songpa-gu</option>
              </Select>
            </FormControl>

          {/* 동 */}

          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-native-simple"
                style={{color: '#b05fc3'}}
              >
                Dong
              </InputLabel>
              <Select
                native
                value={this.state.dong}
                onChange={this.handleChange('dong')}
                input={
                  <OutlinedInput
                    name="dong"
                    labelWidth={this.state.labelWidth}
                    id="outlined-native-simple"
                  />
                }
              >
                <option value="" />
                <option value={10}>Jamsil-Dong</option>
                <option value={20}>Bangi-Dong</option>
                <option value={30}>Songpa-Dong</option>
              </Select>
            </FormControl>
          {/* </form> */}
        </DialogContent>
        <DialogActions style={{marginLeft:"30px"}}>
          <Button onClick={this.handleClose} variant="outlined"
          className={classes.dialogButton}
          >
            Daily
          </Button>
          <Button onClick={this.handleClose} variant="outlined"
            className={classes.dialogButton}
          >
            Weekly
          </Button>
          <Button onClick={this.handleClose} variant="outlined"
            className={classes.dialogButton}
          >
            Monthly
          </Button>
          <Button className={classes.searchButton}>SEARCH</Button>
          <hr style={{height: "50px", color: "#cecece"}}/>
          <Button className={classes.randomButton}>RANDOM</Button>
        </DialogActions>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(dialogSelectStyle)(DialogSelect);