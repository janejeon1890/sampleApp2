import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";


let counter = 0;
function createData(date, day, timeslot, address, location) {
  return { id: counter, date, day, timeslot, address, location };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc" ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "date", numeric: false, disablePadding: true, label: "Date" },
  { id: "day", numeric: true, disablePadding: false, label: "Day" },
  { id: "timeslot", numeric: true, disablePadding: false, label: "Timeline" },
  { id: "address", numeric: true, disablePadding: false, label: "Address" },
  { id: "poi", numeric: true, disablePadding: false, label: "poi" },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: "auto",
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "day",
    selected: [],
    data: [
      createData("2019-03-01", "Monday", "00:00 ~ 01:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Monday", "01:00 ~ 02:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Monday", "02:00 ~ 03:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Monday", "03:00 ~ 04:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "Sports Complex"),
      createData("2019-03-01", "Monday", "04:00 ~ 05:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Monday", "05:00 ~ 06:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Monday", "00:00 ~ 01:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Tuesday", "01:00 ~ 02:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Tuesday", "02:00 ~ 03:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-01", "Tuesday", "03:00 ~ 04:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "Sports Complex"),
      createData("2019-03-02", "Tuesday", "04:00 ~ 05:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-02", "Tuesday", "05:00 ~ 06:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-02", "Wendnesday", "00:00 ~ 01:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-02", "Wendnesday", "01:00 ~ 02:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-02", "Wendnesday", "02:00 ~ 03:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-02", "Wendnesday", "03:00 ~ 04:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "Department Store"),
      createData("2019-03-03", "Wendnesday", "04:00 ~ 05:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-03", "Wendnesday", "05:00 ~ 06:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-03", "Friday", "00:00 ~ 01:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-03", "Friday", "01:00 ~ 02:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-03", "Friday", "02:00 ~ 03:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-03", "Friday", "03:00 ~ 04:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "Department Store"),
      createData("2019-03-04", "Friday", "04:00 ~ 05:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-"),
      createData("2019-03-04", "Friday", "05:00 ~ 06:00", "Gyounggi-do Seongnam-si Bundang-gu Sampyung-dong", "-")
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Grid className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow hover>
                      <TableCell component="th" scope="row" padding="none">
                        {n.date}
                      </TableCell>
                      <TableCell align="right">{n.day}</TableCell>
                      <TableCell align="right">{n.timeslot}</TableCell>
                      <TableCell align="right">{n.address}</TableCell>
                      <TableCell align="right">{n.location}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page",
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Grid>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);


