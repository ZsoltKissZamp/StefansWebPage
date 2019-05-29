import React from 'react'
import PropTypes from 'prop-types'
import {createMuiTheme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {withStyles, ThemeProvider} from '@material-ui/styles'

import Header from './Header'
import TabContainer from './TabContainer'
import FooterMenu from './FooterMenu'

import Inhalt from '../Inhalt'

const MuiTheme = {
  //Farben
  palette: {
    primary: {main: '#e0e0e0'},
    secondary: {main: '#00838f'},
  },
  //Fonts
  typography: {
    useNextVariants: true,
  },
}

const theme = createMuiTheme(MuiTheme)

const styles = {
  root: {},
}

class App extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => this.setState({value})

  render() {
    const {classes} = this.props
    const {value} = this.state

    return (
      <ThemeProvider theme={theme}>
        <div className={`${classes.root}`}>
          <CssBaseline />
          <Header text={Inhalt.tabs[value].text.title} />
          {Inhalt.tabs.map(
            (tab, index) =>
              value === index && <TabContainer key={index}>{tab}</TabContainer>,
          )}
          <FooterMenu value={value} handleChange={this.handleChange} />
        </div>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
