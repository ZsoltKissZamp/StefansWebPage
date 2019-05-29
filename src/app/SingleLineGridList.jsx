import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    position: 'fixed',
    bottom: props => props.bottom,
    width: '100%',
    height: '8rem',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    position: 'absolute',
    bottom: 0,
    top: 0,
    overflow: 'hidden',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  image: {
    width: '17rem',
  },
  gridListTile: {},
})

const SingleLineGridList = ({onSecondMenu, tileData, changeSource}) => {
  const bottom = onSecondMenu ? '7.5rem' : '4.5rem'
  const classes = useStyles({bottom})

  return (
    <div className={`${classes.root}`}>
      <GridList className={`${classes.gridList}`} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            onClick={() => changeSource(tile)}
            className={`${classes.gridListTile}`}
          >
            <img
              src={`media/${tile.img}.jpg`}
              alt={tile.img}
              className={`${classes.image}`}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

SingleLineGridList.propTypes = {
  tileData: PropTypes.array.isRequired,
  changeSource: PropTypes.func.isRequired,
  onSecondMenu: PropTypes.bool.isRequired,
}

export default SingleLineGridList
