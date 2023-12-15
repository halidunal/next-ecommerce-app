import React from 'react'

const AuthContainer = ({children} : {children: React.ReactNode}) => {
	return (
		<div className="flex items-center justify-center h-full w-full">{children}</div>
	)
}

export default AuthContainer
