import * as React from 'react';
import CardBoard from '../cardBoard/cardBoard';
import { Grid } from '@material-ui/core';
class DashboardSection extends React.Component {
    render() {
        return (
            <Grid container={true} direction="row">
                <Grid item={true}  md={6}>
                    <CardBoard header="What went well"/>
                </Grid>
                <Grid item={true} md={6}>
                    <CardBoard header="What can be improved"/>
                </Grid>
                <Grid item={true} md={6}>
                    <CardBoard header="Start doing"/>
                </Grid>
                <Grid item={true} md={6}>
                    <CardBoard header="Action Items"/>
                </Grid>                                                
            </Grid>
        );
    }
}

export default DashboardSection;
