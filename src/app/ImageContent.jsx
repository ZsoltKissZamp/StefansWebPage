import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'

import SingleTile from './SingleTile'
import SingleLineGridList from './SingleLineGridList'

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
}

const ImageContent = ({
  classes,
  image,
  tileData,
  changeSource,
  onSecondMenu,
}) => {
  return (
    <div className={classes.root}>
      <SingleTile image={image} />
      <SingleLineGridList
        tileData={tileData}
        changeSource={changeSource}
        onSecondMenu={onSecondMenu}
      />
    </div>
  )
}

ImageContent.propTypes = {
  image: PropTypes.object.isRequired,
  tileData: PropTypes.array.isRequired,
  changeSource: PropTypes.func.isRequired,
  onSecondMenu: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImageContent)
