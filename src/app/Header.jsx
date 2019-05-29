import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import StopIcon from '@material-ui/icons/Stop'

import Inhalt from '../Inhalt'

const styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 26,
  },
  title: {
    fontWeight: 600,
  },
}

const Header = ({classes, text}) => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Button disabled={true} className={classes.button}>
          <StopIcon
            filled="true"
            color="secondary"
            className={`${classes.icon}`}
          />
          <Typography
            className={`${classes.title}`}
            color="secondary"
            component="span"
          >
            {Inhalt.GlobalText.name.toUpperCase()}
          </Typography>
        </Button>
        <Typography
          className={`${classes.title}`}
          color="secondary"
          component="span"
        >
          {text.toUpperCase()}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
