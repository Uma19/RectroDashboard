import * as React from 'react';
import { Button, Card, CardActions, CardContent, TextField, Typography, withStyles } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const styles = {
    card: {
        minWidth: 275,
    },
    anchorStyle: {
        cursor: 'pointer'
    }
};

const DashboardCard = (props: any) => {
    function deleteCard() {
        props.delete(props.keys);
    }
    return (
        <Card>
            <div style={{cursor: 'pointer'}} onClick={deleteCard}><Clear /></div>
            <CardContent>
                <TextField
                    placeholder="please enter"
                    multiline={true}
                    rows={2}
                    rowsMax={4}
                />
            </CardContent>
            <CardActions>
                <Button size="small">Save</Button>
            </CardActions>
        </Card>
    );
};

export default DashboardCard;