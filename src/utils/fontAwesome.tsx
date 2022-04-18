import React from 'react'

interface props {
    icon: string
    children?: any

}

export const FontAwesome = ({icon}:props) => {
  return (
    <i className={icon}></i>
  )
}
