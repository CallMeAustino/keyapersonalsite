import React from 'react';
import './About.css';
import Grid from '@material-ui/core/Grid';
import blackcat from '../../images/blackcat.png';


function About() {
    return (
        <>
            <Grid container className='about-container' spacing={10}>
                <Grid item xs={12} sm={6}>
                    <img className='about-img' src={blackcat} alt=""></img>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <h1 className='about-blurb' style={{marginBottom: 40, fontSize: 60}}>About Keya.</h1>
                    <section className='about-blurb-body'>
                    <p className='first-paragraph' style={{marginBottom: 10}}>I always had a passion for tech, 
                        but no one, especially not my parents, 
                        was surprised when I ended up in recruiting.
                        I played video games growing up (I still do) and
                        the second I found out NYU offered a Game Design major,
                        I immediately applied to switch majors.
                        During college I took a number of computer
                        science courses only to find out that it
                        wasn't for me. Not wanting my technical 
                        knowledge to go to waste, I decided to go into tech recruiting.
                        I had always loved meeting new people and building relationships,
                        so recruiting seemed like the logical choice.
                    </p>
                    <p style={{marginBottom: 10}}>
                    At Viagogo, I was the first hire for the recruitment team. We were 
                    responsible for building out software engineering and data analyst 
                    pipelines at all levels of experience. I went to countless career fairs on university campuses, and created a 
                    number of charts, diagrams, and excel sheets to identify bottlenecks in our recruiting processes.
                    </p>
                    <p style={{marginBottom: 10}}>I then moved to the Princeton Group, a boutique staffing agency that specializes in placing technical people into 
                        roles within the finance industry. After working in recruiting on the internal side, I wanted to gain more experience
                         in the field of recruiting by working on the agency side. 
                    </p>
                    </section>
                </Grid>
            </Grid>
        </>
    )
}

export default About
