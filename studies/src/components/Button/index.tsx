import React from 'react'

import style from './Button.module.scss'

/* 
type Props = {
  children: string
  type?: 'button' | 'submit' | 'reset' | undefined
}
*/
class Button extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined
  children: string
}> {
  render(): React.ReactNode {
    return (
      <button type={this.props.type} className={style.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
