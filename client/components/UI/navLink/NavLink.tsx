'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classes from './NavLink.module.css'
import Image from 'next/image'

type Props = {
    path: string
    children: React.ReactNode
    icon:string
}

function NavLink({ children, path,icon }: Props) {
    let currentPath = usePathname() // Gets the current path
    
    let isActive = currentPath==path?classes.isActive:classes.link
    let isActiveContainer = currentPath==path ?classes.activeContainer:""
    
    return (
        <div className={`${classes.container} ${isActiveContainer}`}>
        <Image src={icon} alt={path} height={25} width={25} />
        <Link href={path} className={isActive} >
            {children}
        </Link>
        </div>
    )
}

export default NavLink
