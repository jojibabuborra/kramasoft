import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import styles from './header.module.css'
import classNames from 'classnames'

export default function Header() {
  const { t, lang } = useTranslation()
  const title = t('common:title')

  function changeToEn() {
    Router.push('/', undefined, { locale: 'en' })
  }

  return (
    <>
      <Head>
        <title>
          {title} | ({lang.toUpperCase()})
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classNames(styles.header)}>
        {lang !== 'es' && (
          <Link href="/" locale="es">
            <a> {title} <b class="text-blue-700 p-2">Español</b></a>
          </Link>
        )}
        {lang !== 'en' && (
          <>
            <Link href="/" locale="en">
              <a>{title}<b class="text-blue-700 p-2">English</b></a>
            </Link>
            {/*
            <button onClick={changeToEn}>English</button>
            */}
          </>
        )}
      </header>
    </>
  )
}