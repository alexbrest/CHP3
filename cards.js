import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        textAlign: 'center',
        margin: '10px',
    },
    icon: {
        fontSize: '50px',
        margin: '10px',
    },
    title: {
        fontSize: '20px',
    },
    description: {
        fontSize: '15px',
    },
});

const MyCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Icon className={classes.icon}>{props.icon}</Icon>
                <Typography className={classes.title}>{props.title}</Typography>
                <Typography className={classes.description}>{props.description}</Typography>
            </CardContent>
        </Card>
    );
};

const MyCardsGrid = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <MyCard icon='book' title='Card 1' description='Card 1 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='game' title='Card 2' description='Card 2 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='film' title='Card 3' description='Card 3 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='music' title='Card 4' description='Card 4 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='camera' title='Card 5' description='Card 5 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='food' title='Card 6' description='Card 6 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='computer' title='Card 7' description='Card 7 Description' />
            </Grid>
            <Grid item xs={3}>
                <MyCard icon='car' title='Card 8' description='Card 8 Description' />
            </Grid>
        </Grid>
    );
};

export default MyCardsGrid;