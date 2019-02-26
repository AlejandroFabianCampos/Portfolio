import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import Background from '../img/Kaboom.gif';
import DownArrow from '../img/DownArrow.gif';
import Me from '../img/datCurriculumCut.jpeg';

const styles = theme => ({
    Principal: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 3em)",
        width: "100%",
        marginTop: "3em"
        
    },

    PersonalImage: {
        height: "35vh",
        width: "35vh",
        borderRadius: "100vw",
        margin: "auto",
        marginTop: "4em"
        
    },

    TitleFontSize: {
        fontSize: "2em",
        color: "white",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 500,
    },

    SubtitleFontSize: {
        fontSize: "2em",
        color: "white",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 500
    },

    DownArrow: {
        width: "10vh",
        height: "10vh",
        position: "absolute",
        left: "calc(50% - 5vh)",
        bottom: 5
    }

})

function Landing(props) {
    const {classes} = props;

    return (
        <div className={classes.Principal}>
            <img src={Me} alt="Foto Personal" className={classes.PersonalImage}/>
            <h1 className={classes.TitleFontSize}>¡Hola! Soy Alejandro Campos.</h1>
            <h1 className={classes.SubtitleFontSize}>Soy un desarrollador Web Front-End.</h1>
            <img src={DownArrow} alt="Flecha hacia abajo" className={classes.DownArrow}/>
        </div>
    )
}

export default withStyles(styles)(Landing);
