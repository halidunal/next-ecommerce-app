import React from 'react'

const AccountContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='p-8'>{children}</div>
	)
}

export default AccountContainer
