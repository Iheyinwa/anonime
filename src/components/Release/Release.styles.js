import styled from 'styled-components';
export const MovieContainer = styled.main`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 14px;
	position: relative;
`;
export const MovieCard1 = styled.div`
	height: 284.11px;
	padding: 8px;
	width: 160px;
	position: relative;
	border-radius: 12px;
`;
export const MovieText = styled.div`
	position: absolute;
	top: 88%;
	left: 16px;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
`;
export const DarkText = styled(MovieCard1)`
background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%);
right: 8px;
padding-bottom: 1px;
`;
