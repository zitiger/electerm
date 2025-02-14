/**
 * btns
 */

import { memo } from 'react'
import {
  Icon
} from 'antd'

const { prefix } = window
const m = prefix('menu')

export default memo(props => {
  const {
    isMaximized,
    closeApp
  } = props
  const minimize = () => {
    window.getGlobal('minimize')()
  }
  const maximize = () => {
    window.getGlobal('maximize')()
  }
  const unmaximize = () => {
    window.getGlobal('unmaximize')()
  }
  return (
    <div className='window-controls'>
      <div className='window-control-box window-control-minimize' onClick={minimize}>
        <Icon
          type='minus'
          title={m('minimize')}
          className='iblock font12 widnow-control-icon'
        />
      </div>
      <div className='window-control-box window-control-maximize'
        onClick={
          isMaximized ? unmaximize : maximize
        }>
        <span
          title={
            isMaximized ? m('unmaximize') : m('maximize')
          }
          className={
            'iblock font12 icon-maximize widnow-control-icon ' +
              (isMaximized ? 'is-max' : 'not-max')
          }
        />
      </div>
      <div className='window-control-box window-control-close' onClick={closeApp}>
        <Icon
          type='close'
          title={m('close')}
          className='iblock font12 widnow-control-icon'
        />
      </div>
    </div>
  )
})
