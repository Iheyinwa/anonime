import styled from 'styled-components';

export const PopularContainer = styled.div`
	width: 35%;
	@media (max-width: 870px) {
		width: 100%;
	}
`;

export const PopularMovies = styled.aside`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 20px;
	position: relative;
	width: 100%;

	@media (min-width: 440px) and (max-width: 870px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const PopularCard = styled.div`
	height: 200px;
	padding: 8px;
	width: 150px;
	position: relative;
	border-radius: 12px;
`;
