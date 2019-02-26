import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ResponsiveIcon from '../img/ResponsiveIcon.png';
import ReactIcon from '../img/ReactIcon.png';
import FastIcon from '../img/FastIcon.png';

const styles = theme => ({
    Main: {
        height: "100vh"
    },

    AboutIcons: {
        height: "100%",
        width: "100%",
        maxHeight: 200,
        maxWidth: 200
    },
    
    CustomGrid: {
        paddingLeft: 20,
        paddingRight: 20
    }
})

function About(props) {
    const { classes } = props;
    return (
        <div className={classes.height}>
            <Grid container alignContent="space-around" alignItems="center" spacing={16} className={classes.CustomGrid}>
                <Grid item xs={12}>
                    <h3>Mis proyectos poseen...</h3>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <img src={ResponsiveIcon} alt="Icono de diseño adaptable" className={classes.AboutIcons} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <p><strong>Diseño adaptable</strong>, para que tus clientes disfruten tu máximo potencial en sus dispositivos de preferencia.</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <img src={ReactIcon} alt="Icono de React/diseño reactivo" className={classes.AboutIcons} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <p><strong>Reactividad</strong>, para que no solo tus usuarios interactúen con tu página, sino que tu página interactúe con ellos también.</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <img src={FastIcon} alt="Icono de React/diseño reactivo" className={classes.AboutIcons} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <p><strong>Velocidad</strong>, para que la experiencia de usuario sea simple e intuitiva.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(About);

