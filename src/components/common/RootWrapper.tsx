import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@emotion/react'

import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'
import ThemeToggleBtn from './ThemeToggleBtn'

const RootWrapper: FC = ({ children }) => {
	const title = `Changyu's Portfolio`
	const description = '안녕하세요 프론트엔드 개발자 여찬규 입니다!'
	const image = 'https://avatars.githubusercontent.com/u/80776262?v=4'
	const url = 'https://changyu-portfolio.netlify.app/'

	return (
		<>
			<Helmet>
				<title>{title}</title>

				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:url" content={url} />
				<meta property="og:site_name" content={title} />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
				<meta name="twitter:site" content="@사용자이름" />
				<meta name="twitter:creator" content="@사용자이름" />

				<link rel="stylesheet" href="github-markdown.css" />
			</Helmet>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
				<ThemeToggleBtn />
			</ThemeProvider>
		</>
	)
}

export default RootWrapper
