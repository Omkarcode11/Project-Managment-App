import React from 'react'
import welcomeSVG from '@/public/welcome.svg'
import Image from 'next/image'
import classes from './layout.module.css'

type Props = {
    children:React.ReactNode
}

function layout({children}: Props) {
  return (
    <div className={classes.container}>
        <div className={classes.welcomeSVGContainer}>
        <Image src={welcomeSVG} height={100} alt='Welcome Image' className={classes.welcomeSVG}></Image>
        </div>
        {children}
    </div>
  )
}

export default layout