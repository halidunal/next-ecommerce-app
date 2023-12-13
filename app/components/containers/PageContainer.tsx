import React from 'react'

const PageContainer = ({children} : {children: React.ReactNode}) => {
	return (
		<div className="px-3 md:px-10 flex w-full">{children}</div>
	)
}

export default PageContainer
