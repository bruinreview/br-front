import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

interface Props {
  clickSearch: (e: { target: HTMLDivElement }) => void
}

export default function Header(props: Props): ReactElement {
  const search = (event: React.MouseEvent<HTMLDivElement>) => {
    props.clickSearch({ target: event.target as HTMLDivElement })
  }
  return (
    <div className="flex justify-start container">
      <div className="flex vertical-text">
        <div className="line-bottom"></div>
        <div className="searchIcon" onClick={search} />
        <Link className="no-underline ph3 nav" to="/apply">
          apply
        </Link>
        <Link className="no-underline ph3 nav" to="/info">
          info
        </Link>
        <Link className="no-underline ph3 nav" to="/print">
          print
        </Link>
        <Link className="no-underline ph3 nav" to="/">
          home
        </Link>
        <div className="line-top"></div>
      </div>
    </div>
  )
}
