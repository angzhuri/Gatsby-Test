import * as React from "react"
import Icon from "./Icon"

type ButtonProps = {
  icon?: string
  className?: string
  children: string | JSX.Element
}

export default ({ icon, className = '', children }: ButtonProps) => {

  return (
    <a href="#back" className={`text-xss md:text-xs uppercase text-blue/4 font-bold flex items-center gap-1 ` + className}>
      {icon && (
        <Icon name={icon} width={8.57} height={8.57} />
      )}
      <span>{children}</span>
    </a>
  )
}
