import classNames from 'classnames'
import React from 'react'
type IconInfo = {
	className?: string
	onclick?: () => void
	type: string
}

function Icon({ className, onclick, type }: IconInfo) {
	return (
		<div>
			<svg onClick={onclick} className={classNames('icon', className)} aria-hidden="true">
				<use xlinkHref={'#' + type}></use>
			</svg>
		</div>
	)
}

export default Icon
