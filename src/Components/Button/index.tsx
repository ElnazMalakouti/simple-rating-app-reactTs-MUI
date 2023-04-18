import classNames from "classnames"
import { ButtonHTMLAttributes } from "react"
import { ReactElement } from 'react'


interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'greenBlue'
    variant: 'primary' | 'secondary'
    children: ReactElement | string,
    disable?: any,
    className?: string
}

const Button = ({ className, children, variant = 'primary', color = 'greenBlue', disable, ...props }: props) => {

    const btnClasses = classNames(
        'p-[8px] rounded-[20px] text-white text-[14px] disabled:bg-[#E5E5E5] disabled:text-[#CCCCCC] disabled:border-transparent',
        variant === 'primary' && color === 'greenBlue' ? 'bg-[#009CAB]' : '',
        className
    )

    return (
        <button
            disabled={disable}
            className={btnClasses}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button