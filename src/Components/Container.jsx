import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-full px-[80px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container