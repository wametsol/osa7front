import React from 'react'

const notiStyle ={
  textAlign: 'center'
}
const Notification = ({notification}) => {
  if (notification === null) {
    return null
  }

  return (
    <div className={notification.type } style={notiStyle}>
      {notification.message}
    </div>
  )
}

export default Notification