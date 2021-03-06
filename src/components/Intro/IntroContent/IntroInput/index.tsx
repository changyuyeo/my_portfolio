import { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FiSearch, FiMic } from 'react-icons/fi'

import { InputContainer } from './style'

const IntroInput = () => {
	const txt = '안녕하세요 성장하는 FE개발자 여찬규 입니다!'
	const [text, setText] = useState('')
	const [count, setCount] = useState(0)

	const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

	const interval = useRef<NodeJS.Timer | null>(null)

	const clearText = useCallback(() => {
		setTimeout(() => {
			setText('')
			setCount(0)
		}, 1500)
	}, [])

	useEffect(() => {
		interval.current = setInterval(() => {
			setText(prev => prev.concat(txt[count]))
			setCount(count + 1)
		}, 100)
		if (count === txt.length) {
			clearInterval(interval.current)
			clearText()
		}
		return () => clearInterval(interval.current as NodeJS.Timeout)
	}, [count])

	return (
		<InputContainer>
			<FiSearch
				className="search__icon"
				size={isMobile ? 15 : 20}
				color="#fff"
			/>
			<div className="input__text">{text}</div>
			<FiMic className="mic__icon" size={isMobile ? 15 : 20} color="#fff" />
		</InputContainer>
	)
}

export default IntroInput
