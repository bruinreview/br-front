import React, { useState, useRef, useEffect } from 'react'
import './Article.css'
import p1 from '../resources/play.png'
import example from './example.mp3'

export default function AudioPage() {
  const ref = useRef(null)
  const [hoverPos, setHoverPos] = useState(0)
  const [curTime, setCurTime] = useState("00:00")
  const [totalTime, setTotalTime] = useState("00:00")
  const [progressBarWidth, setProgressBarWidth] = useState("0%")
  const [inProgressBar, setInProgressBar] = useState(false)
  const [playing, setPlaying] = useState(false)
  const getPos = e => {
    if (ref.current && inProgressBar) {
      const bounds = ref.current.getBoundingClientRect()
      const percentage = (e.clientX - bounds.left) / (bounds.right - bounds.left)
      setHoverPos(percentage)
    }
  }
  const calcTotalTime = () => {
    const dur = Math.round(document.getElementById('audio').duration)
    let min = Math.floor(dur / 60)
    if (min < 10) {
      min = `0${min}`
    }
    let sec = dur % 60
    if (sec < 10) {
      sec = `0${sec}`
    }
    setTotalTime(`${min}:${sec}`)
  }
  const updateProgressBar = () => {
    const ta = document.getElementById('audio')
    const cur = Math.round(document.getElementById('audio').currentTime)
    let min = Math.floor(cur / 60)
    if (min < 10) {
      min = `0${min}`
    }
    let sec = cur % 60
    if (sec < 10) {
      sec = `0${sec}`
    }
    setCurTime(`${min}:${sec}`)
    setProgressBarWidth(`${(ta.currentTime / ta.duration) * 100}%`)
  }
  const assignProgress = () => {
    setProgressBarWidth(`min(${hoverPos*100}%, 100%)`)
    document.getElementById('audio').currentTime = hoverPos * document.getElementById('audio').duration
  }
  const switchPlayState = () => {
    const ta = document.getElementById('audio')
    if (playing) {
      ta.pause()
    } else {
      ta.play()
    }
    setPlaying(!playing)
  }

  useEffect(() => {
    window.addEventListener('mousemove', getPos)
    document.getElementById('audio').addEventListener('loadeddata', calcTotalTime)
    document.getElementById('audio').addEventListener('timeupdate', updateProgressBar)
    document.getElementById('audioNavBar').addEventListener('click', assignProgress)
    document.getElementById('progressBar').addEventListener('click', assignProgress)
    document.getElementById('pausePlayBtn').addEventListener('click', switchPlayState)
  })
  return (
    <div className="card">
      <h3 id="article-title" className="pv3">
        Break Room: 5th episode
      </h3>
      <div className="pt3 pb5 flex justify-start items-center">
        <img id="pausePlayBtn" src={p1} className="pr3" style={{ height: '30px' }} />
        <div ref={ref} style={{ width: '90%', position: 'relative', height: '20px' }}>
          <audio id="audio" src={example}></audio>
          <div
            id="audioNavBar"
            onMouseOut={() => {
              setHoverPos(0)
              setInProgressBar(!inProgressBar)
            }}
            onMouseOver={() => {
              setInProgressBar(!inProgressBar)
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
            id="progressBar"
            style={{
              height: '20px',
              width: `${progressBarWidth}`,
              backgroundColor: 'var(--blue)',
              position: 'absolute',
              borderRadius: '6px',
            }}
          />
          <div
            style={{
              height: '20px',
              width: `min(${hoverPos*100}%, 100%)`,
              backgroundColor: '#99e4ff',
              opacity: '100%',
              position: 'absolute',
              borderRadius: '6px',
            }}
          />
          <div style={{ left: 0, top: 25, position: 'absolute' }}>{curTime}</div>
          <div style={{ right: 0, top: 25, position: 'absolute' }}>{totalTime}</div>
        </div>
      </div>
      hi The University was once a place of eclectic thought – the gathering of bright minds to encourage the exchange,
      deliberation, and inspection of ideas. Today, the inverse is true. Universities are proxy for a narrow viewpoint
      that is easily predictable and left unquestioned. Ideas are no longer submitted as subjects of observation and
      scrutiny; rather, they are endowed to students as delicacies to be defended at any cost.
    </div>
  )
}
