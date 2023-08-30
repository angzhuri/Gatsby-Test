import * as React from "react"

type IconProps = {
  name: string
  width: number
  height: number
  className?: string
}

export default ({ name, width, height, className = '' }: IconProps) => {

  return (
    <img src={`/icons/${name}.svg`} alt="Icon" width={width} height={height} className={className} />
  )
}
