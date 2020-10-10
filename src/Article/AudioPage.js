import React, { useState, useRef, useEffect } from 'react'
import './Article.css'
import p1 from '../resources/play.png'

function AudioPage() {
  const ref = useRef(null)
  const [hoverPos, setHoverPos] = useState(0)
  const [inProgressBar, setInProgressBar] = useState(true)
  const getPos = e => {
    console.log(inProgressBar)
    if (ref.current && inProgressBar) {
      const bounds = ref.current.getBoundingClientRect()
      const percentage = (e.clientX - bounds.left) / (bounds.right - bounds.left)
      setHoverPos(percentage)
    }
  }
  useEffect(() => {
    window.addEventListener('mousemove', getPos)
  })
  return (
    <div className="card">
      <h3 id="article-title" className="pv3">
        Break Room: 5th episode
      </h3>
      <div className="pt3 pb5 flex justify-start items-center">
        <img src={p1} className="pr3" style={{ height: '30px' }} />
        <div ref={ref} style={{ width: '90%', position: 'relative', height: '20px' }}>
          <div
            onMouseLeave={() => {
              setInProgressBar(false)
            }}
            style={{
              height: '20px',
              width: '100%',
              backgroundColor: 'black',
              position: 'absolute',
              borderRadius: '6px',
            }}
          />
          <div
            style={{
              height: '20px',
              width: '70%',
              backgroundColor: 'var(--blue)',
              position: 'absolute',
              borderRadius: '6px',
            }}
          />
          <div style={{ right: 0, top: 25, position: 'absolute' }}> 14:20</div>
        </div>
      </div>
      hi The University was once a place of eclectic thought – the gathering of bright minds to encourage the exchange,
      deliberation, and inspection of ideas. Today, the inverse is true. Universities are proxy for a narrow viewpoint
      that is easily predictable and left unquestioned. Ideas are no longer submitted as subjects of observation and
      scrutiny; rather, they are endowed to students as delicacies to be defended at any cost.
    </div>
  )
}
export default AudioPage
