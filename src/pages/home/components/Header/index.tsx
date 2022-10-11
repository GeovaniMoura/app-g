import * as S from './styles';
import dropsBackground from '../../../../images/dropsBackground.png';

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
				<S.DivImageHeader>
					<S.DropsImage src={dropsBackground} alt="fundo de gotas" />
				</S.DivImageHeader>
			</div>
		</div>
	);
}

export default Header;
