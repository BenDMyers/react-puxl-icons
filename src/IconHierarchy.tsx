import * as React from 'react'

function SvgIconHierarchy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="hierarchy" aria-labelledby="t-hierarchy d-hierarchy">
        <title id="t-hierarchy">{'Hierarchy'}</title>
        <desc id="d-hierarchy">
          {
            'A relation map with one main square on the middletop, and three smaller descendants connected to the main one'
          }
        </desc>
        <path d="M30 24h-1v-5c0-1.1-.9-2-2-2H17v-5h3c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h3v5H5c-1.1 0-2 .9-2 2v5H2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-5h10v5h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-1v-5h10v5h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM6 25c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h4zm12 0c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1h-4c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h4zm-6-14c-.5 0-1-.5-1-1V2c0-.5.5-1 1-1h8c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1h-8zm19 19c0 .5-.5 1-1 1h-4c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v4z" />
      </g>
    </svg>
  )
}

export default SvgIconHierarchy
