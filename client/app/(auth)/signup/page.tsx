import React from "react";
import classes from './page.module.css'
import Input from "@/components/UI/input/Input";
import emailSVG from '@/public/email.svg'
import passwordSVG from '@/public/password.svg'
import showSVG from '@/public/show.svg'
import Link from "next/link";
import personSVG from '@/public/person.svg'

type Props = {};

function SignupPage({}: Props) {
  return <div className={classes.container}>
  <form className={classes.formContainer}>
  <h1 className={classes.header}>Register</h1>
    <div>
      <Input icon={personSVG} placeholder='Name' type='text' key={'Name'}/>
    </div>
    <div>
      <Input icon={emailSVG} placeholder='Email' type='text' key={'email'}/>
    </div>
    <div>
      <Input icon={passwordSVG} placeholder='Confirm Password' type='password' key={'Confirm Password'} icon2={showSVG} />
    </div>
    <div>
      <Input icon={passwordSVG} placeholder='Password' type='password' key={'password'} icon2={showSVG} />
    </div>
    <div>
      <button className={classes.btn} type='submit'>Register </button>
    </div>
    <Link href={'/login'} className={classes.signupText}>Have an account ?</Link>
    <div>
      <Link href={'/login'}>
      <button className={classes.register} type='submit'>Login</button>
      </Link>
    </div>
  </form>
</div>;
}

export default SignupPage;
