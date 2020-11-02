import React, { ReactElement } from 'react'
import './Footer.css'

interface IProps {
  handleFilter: (e: { target: HTMLDivElement }) => void
}

export default function Footer(props: IProps): ReactElement {
  const filter = (event: React.MouseEvent<HTMLDivElement>) => {
    props.handleFilter({ target: event.target as HTMLDivElement })
  }
  return (
    <div className="flex flex-column justify-end footer items-center">
      <div id="audio" className="iconType audioIcon" onClick={filter} />
      <div id="regular" className="iconType regularIcon" onClick={filter} />
      <div id="video" className="iconType videoIcon" onClick={filter} />
      <div className="ft-line-top"></div>
      <div className="iconType profileIcon" />
      <div className="ft-line-bottom"></div>
    </div>
  )
}
