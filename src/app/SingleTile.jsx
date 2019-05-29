import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
  card: {
    margin: 'auto 28%',
    padding: '0.3% 0.3% 0.1% 0.3%',
    width: '50%',
  },
  media: {
    margin: 'auto',
    width: '100%',
  },
}

const SingleTile = ({classes, image}) => {
  return (
    <div className={classes.root}>
      <img
        className={classes.media}
        src={`media/${image.img}.jpg`}
        alt={image.title}
      />
    </div>
  )
}

SingleTile.propTypes = {
  image: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SingleTile)
