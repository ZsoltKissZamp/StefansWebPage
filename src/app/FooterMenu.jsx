import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

import Inhalt from '../Inhalt'

const styles = {
  footerMenu: {
    top: 'auto',
    bottom: 0,
    height: '4.5rem',
  },
  footer: {
    top: 'auto',
    bottom: 0,
    textAlign: 'center',
  },
  footerText: {
    height: '1.5rem',
    backgroundColor: 'black',
    color: 'gray',
  },
}

const FooterMenu = ({classes, value, handleChange}) => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      className={`${classes.footerMenu}`}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        variant="fullWidth"
      >
        {Inhalt.tabs.map((tab, index) => (
          <Tab key={index} label={tab.name} />
        ))}
      </Tabs>
      <AppBar position="static" color="primary" className={`${classes.footer}`}>
        <Typography component="div" className={`${classes.footerText}`}>
          {Inhalt.GlobalText.impressumText}
        </Typography>
      </AppBar>
    </AppBar>
  )
}

FooterMenu.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FooterMenu)
