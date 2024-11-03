import React from 'react'
import classes from './page.module.css'
import Input from '@/components/UI/input/Input'
import emailSVG from '@/public/email.svg'
import passwordSVG from '@/public/password.svg'
import showSVG from '@/public/show.svg'
import Link from 'next/link'


type Props = {}

function LoginPage({}: Props) {
  return (
    <div className={classes.container}>
        <form className={classes.formContainer}>
        <h1 className={classes.header}>Login</h1>
          <div>
            <Input icon={emailSVG} placeholder='Email' type='text' key={'email'}/>
          </div>
          <div>
            <Input icon={passwordSVG} placeholder='Password' type='password' key={'password'} icon2={showSVG} />
          </div>
          <div>
            <button className={classes.btn} type='submit'>Log in</button>
          </div>
          <Link href={'/signup'} className={classes.signupText}>Have no account yet?</Link>
          <div>
            <Link href={'/signup'}>
            <button className={classes.register} type='submit'>Register</button>
            </Link>
          </div>
        </form>
    </div>
  )
}

export default LoginPage