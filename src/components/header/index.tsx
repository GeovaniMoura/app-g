import * as S from './styles';

function Header() {
	return (
		<div>
			<div>
				<S.DivGray>
					<S.ContainerDivsCircle>
						<S.DivCircle></S.DivCircle>
						<S.DivCircle></S.DivCircle>
						<S.DivCircle></S.DivCircle>
					</S.ContainerDivsCircle>
				</S.DivGray>
			</div>
			<div>
				<S.DivImageHeader></S.DivImageHeader>
			</div>
		</div>
	);
}

export default Header;
