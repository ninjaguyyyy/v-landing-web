import React from 'react'
import classes from './Button.module.scss'
import classNames from 'classnames'

export default function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={classNames(classes['button'], className)}>
      {children}
    </button>
  )
}
