import * as React from 'react'

function SvgIconPaintbrush(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="paintbrush" aria-labelledby="t-paintbrush d-paintbrush">
        <title id="t-paintbrush">{'Paintbrush'}</title>
        <desc id="d-paintbrush">{'A paintbrush'}</desc>
        <path d="M32 32v-1H12c-7.6-2.2-3.6-2.7-4.6-6.8l17.7-19c1.2-1.3 1.2-3.1 0-4.3C23.9-.3 22-.3 20.9.9L4.4 21.5C1.6 21.8 0 24.6 0 27c0 2.6 1.4 5 6 5h26zM6.7 23.5l-1.5-1.3L9 17.5l1.9 1.6-4.2 4.4zM24.4 4.4L11.5 18.3l-1.9-1.7 12-15.1c.801-.8 2-.8 2.801 0 .799.9.799 2.1-.001 2.9z" />
      </g>
    </svg>
  )
}

export default SvgIconPaintbrush
