import * as React from 'react'

function SvgIconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="calendar" aria-labelledby="t-calendar d-calendar">
        <title id="t-calendar">{'Calendar'}</title>
        <desc id="d-calendar">{'Paper calendar with rings on a day 31st'}</desc>
        <path d="M23.875 24.43h-1.424v-9.159c0-.762.023-1.482.07-2.162-.123.123-.271.252-.414.387-.151.135-.854.706-2.092 1.714l-.772-1.002 3.401-2.628h1.229l.002 12.85zM16.141 14.603c0 .82-.23 1.491-.69 2.012-.46.521-1.112.871-1.956 1.047v.07c1.031.129 1.796.457 2.294.979.498.527.747 1.225.747 2.074 0 1.229-.425 2.166-1.274 2.824-.85.654-2.057.979-3.621.979-.68 0-1.302-.053-1.868-.146a5.8 5.8 0 01-1.648-.539V22.51c.557.275 1.15.486 1.78.629.63.146 1.226.217 1.789.217 2.221 0 3.331-.854 3.331-2.604 0-1.562-1.225-2.338-3.674-2.338h-1.266V17.16h1.283c1.002 0 1.796-.221 2.382-.663.586-.442.879-1.057.879-1.842 0-.627-.215-1.119-.646-1.479-.431-.358-1.015-.536-1.753-.536-.562 0-1.093.076-1.591.229-.498.153-1.066.434-1.705.844l-.738-.983c.527-.416 1.135-.743 1.824-.98s1.414-.356 2.175-.356c1.248 0 2.218.286 2.909.857.691.573 1.037 1.356 1.037 2.352z" />
        <path d="M26 4V2a2 2 0 00-4 0v2H10V2a2 2 0 00-4 0v2H0v28h26l6-6V4h-6zm-3-2a1 1 0 012 0v4a1 1 0 01-2 0V2zM7 2c0-.551.449-1 1-1s1 .449 1 1v4c0 .551-.449 1-1 1s-1-.449-1-1V2zm19 28.586V26h4.586L26 30.586zM31 25h-5a1 1 0 00-1 1v5H1V5h5v1a2 2 0 004 0V5h12v1a2 2 0 004 0V5h5v20z" />
      </g>
    </svg>
  )
}

export default SvgIconCalendar
