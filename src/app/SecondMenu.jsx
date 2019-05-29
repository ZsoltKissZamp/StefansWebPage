import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

import TabContainer from './TabContainer'

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
  secondMenu: {
    top: 'auto',
    bottom: '4.5rem',
  },
}

const SecondMenu = ({classes, projekte, value, handleChange}) => {
  return (
    <div className={`${classes.root}`}>
      {projekte.map(
        (tab, index) =>
          value === index && <TabContainer key={index}>{tab}</TabContainer>,
      )}
      <AppBar
        position="fixed"
        color="primary"
        className={`${classes.secondMenu}`}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="fullWidth"
        >
          {projekte.map((tab, index) => (
            <Tab key={index} label={tab.name} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  )
}

SecondMenu.propTypes = {
  value: PropTypes.number.isRequired,
  projekte: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SecondMenu)
