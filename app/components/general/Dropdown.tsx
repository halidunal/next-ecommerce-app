import React from 'react'

interface SelectProps {
	onChange: any
	name?: string
	id: string
	value?: any
	className?: string
	style?: any
	data: any[]
	width?: any
}
const Dropdown: React.FC<SelectProps> = ({ name, id, value, onChange, className, style, data, width }) => {
	return (
		<select
			id={id}
			name={name}
			value={value}
			className={className + " text-sm cursor-pointer border h-8 rounded-md outline-none hover:bg-slate-100 px-2 text-gray-800 w-full "}
			style={width ? { width: width, ...style } : style}
			onChange={onChange}
		>
			{...data.map((item: any, key: any) => (
				<option key={key} value={item} className="" onTouchMove={e => e.preventDefault()}>{item}</option>
			))}
		</select>
	)
}

export default Dropdown
