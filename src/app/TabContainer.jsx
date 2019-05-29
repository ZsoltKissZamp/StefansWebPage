import React from 'react'
import PropTypes from 'prop-types'

import ImageContent from './ImageContent'
import SecondMenu from './SecondMenu'

const randomBild = arr => arr[Math.floor(Math.random() * arr.length)]

class TabContainer extends React.Component {
  state = {
    src: null,
    value: 0,
    onSecondMenu: true,
  }

  static getDerivedStateFromProps(props, state) {
    if (state.src === null && props.children.bilder) {
      state.src = randomBild(props.children.bilder)
    }

    if (
      props.children.name === 'Klick' ||
      props.children.name === 'Impressum'
    ) {
      state.onSecondMenu = false
    }

    return state
  }

  handleChange = (event, value) => this.setState({value})

  changeSource = tile => this.setState({src: tile})

  render() {
    const {src, value, onSecondMenu} = this.state
    const {children} = this.props
    const {bilder, projekte} = children
    return (
      <div
        style={{
          position: 'fixed',
          height: `calc(100% - ${onSecondMenu ? '19.4rem' : '16.4rem'})`,
          width: '100%',
        }}
      >
        {src ? (
          <ImageContent
            image={src}
            tileData={bilder}
            changeSource={this.changeSource}
            onSecondMenu={onSecondMenu}
          />
        ) : (
          <SecondMenu
            projekte={projekte}
            value={value}
            handleChange={this.handleChange}
          />
        )}
      </div>
    )
  }
}

TabContainer.propTypes = {
  children: PropTypes.object.isRequired,
}

export default TabContainer
