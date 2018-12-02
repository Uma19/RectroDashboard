import * as React from 'react';
import DashboardCard from '../cards/card';
import { Grid } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

class CardBoard extends React.Component<any, any> {
  anchorStyle = {
    cursor: 'pointer'
  };
  state: any = {
  };
  items: any = [];
  constructor(props: any) {
    super(props);
    this.state = this.props;
  }
  addDashboardCard = () => {
    this.items.push(
    <Grid item={true} md={4} key={this.items.count} >
      <DashboardCard keys={this.items.length} delete={this.deleteDashboardCard} />
    </Grid>);
    this.setState(this.items);
  }

  deleteDashboardCard = (item: any) => {
    console.log(item);
    const index = this.items.indexOf(item);
    if (index !== -1) { 
      this.items.splice(index, 1);
    }
    this.setState(this.items);
  }

  render() {
    return (
      <Grid container={true} direction="row">
        <Grid item={true} md={12}>
          <span> {this.state.header} </span>
          <a style={this.anchorStyle} onClick={this.addDashboardCard}><AddCircle color="error" /></a>
        </Grid>
        <Grid item={true}>
          <Grid container={true} direction="row" wrap="wrap" alignContent="flex-start">
            {this.items}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CardBoard;
