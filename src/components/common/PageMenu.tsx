import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface Props {
	intro: boolean
	hide: boolean
}

const Container = styled.div<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	.page_menus_btn {
		width: 110px;
		padding: 5px 0;
		border-radius: 5px;
		font-size: ${({ theme }) => theme.fontSizes.base};
		font-weight: 400;
		font-family: 'Noto Sans KR';
		transition: 0.3s;
		background-color: transparent;
		&:hover {
			background-color: var(--gray);
			color: #eee;
			a {
				color: #eee;
			}
		}
		@media ${({ theme }) => theme.device.mobileL} {
			width: auto;
			padding: 5px 10px;
			display: ${({ hide }) => hide && 'none'};
		}
	}
`

interface Props {
	intro: boolean
	hide: boolean
}

const PageMenu: FC<Props> = ({ intro, hide }) => {
	return (
		<Container intro={intro} hide={hide}>
			<button className="page_menus_btn">
				<Link to="/about">ABOUT</Link>
			</button>
			<button className="page_menus_btn">
				<Link to="/portfolio">PORTFOLIO</Link>
			</button>
		</Container>
	)
}

export default PageMenu
