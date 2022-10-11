import AsideBar from "./components/AsideBar";
import EvaluetedFarms from "./components/EvaluetedFarms";
import Header from "./components/Header";
import Methodology from "./components/Methodology";
import Productivity from "./components/Productivity";
import ProjectReasons from "./components/ProjectReasons";
import Welcome from "./components/Welcome";
import * as S from './styles';

function Home() {
  return (
    <S.ContainerGeneral>

      <Header />

      <S.ContainerMain>
        <Welcome />

        <S.DivMain>

          <S.ContainerAside>
            <AsideBar />
          </S.ContainerAside>

          <S.ContainerCenter>
            <S.ContainerFarmsAndReasonsAndMethodology>
              <S.ContainerFarmsAndReasons>
                <ProjectReasons />
                <EvaluetedFarms />
              </S.ContainerFarmsAndReasons>

              <Methodology />
            </S.ContainerFarmsAndReasonsAndMethodology>

            <Productivity />
          </S.ContainerCenter>

        </S.DivMain>

      </S.ContainerMain>
      
    </S.ContainerGeneral>
  )
}

export default Home;