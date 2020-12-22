import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Grid from '@material-ui/core/Grid';
import catgirl from '../images/catgirl.png';
import kimono from '../images/kimono.png';
import girlindress from '../images/girlindress.png';
import guy from '../images/guy.png';
import kikicat from '../images/kikicat.png';
import tifa from '../images/tifa.png';
import toothless from '../images/toothless.png';
import vampire from '../images/vampire.png';

function Cards() {
    return (
        <div className='cards'>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} lg={3}>
                    <CardItem src={catgirl}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                    <CardItem src={kimono}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                    <CardItem src={girlindress}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                    <CardItem src={tifa}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                    <CardItem src={kikicat}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                    <CardItem src={toothless}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                    <CardItem src={guy}></CardItem>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <CardItem src={vampire}></CardItem>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
