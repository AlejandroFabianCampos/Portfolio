import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';

const styles = theme => ({
    CustomAlignRight: {
        position: "absolute",
        right: 10,
        top: 5
    }
})


class TemporaryDrawer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {right: false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = (open) => () => {
        this.setState({
        right: open,
        });
    };


    render() {
        const { classes } = this.props;
        
        return (
            <MediaQuery query="(max-width: 600px)">
                <div>
                    <IconButton onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu Icon" className={classes.CustomAlignRight}>
                        <Menu /> 
                    </IconButton>
                    <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer(false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer(false)}
                            onKeyDown={this.toggleDrawer(false)}
                        >
                            <h1>This is a drawer!</h1>
                        </div>
                    </Drawer>
                </div>
            </MediaQuery>
        );
  }
}


export default withStyles(styles)(TemporaryDrawer);