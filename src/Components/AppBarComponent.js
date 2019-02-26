import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import Code from '@material-ui/icons/Code';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

//import TemporaryDrawer from './DrawerComponent';

//Definimos los dos títulos para que se adapten al tamaño de la pantalla
const titles = ["Alejandro Fabián Campos", "Alejandro Campos"];

const styles = theme => ({
  CustomInlineBlock: {
    display: "inline-block"
  },
})

function AppBarComponent(props) {
  var title = '';
  const { classes } = props;
  //Preguntamos si el tamaño de la pantalla está por encima de un valor y guardamos el resultado bool en screenSizeSmall
  const screenSizeSmall = useMediaQuery('(max-width:374px)');
  //Ahora vamos a definir el título a usar en base a el tamaño de pantalla
  if (screenSizeSmall){
    title = titles[1];
  } else {
    title = titles[0];
  }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
            
          <IconButton rel="#top" color="inherit" aria-label="Home Icon" className={classes.CustomInlineBlock}>
            <Code /> 
          </IconButton>
          <Typography rel="#top" variant="h6" color="inherit" className={classes.CenterTitle}>
            {title}
          </Typography>
          {/*<TemporaryDrawer />*/}
        </Toolbar>
      </AppBar>
      
    </div>
    
  )
}

export default withStyles(styles)(AppBarComponent);
