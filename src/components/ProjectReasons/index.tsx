import * as S from './styles';

function ProjectReasons() {
  return (
    <S.ContainerProjectReasons>
      <S.ProjectReasonsTitleContainer>
        <S.ProjectReasonsTitle>
          Razões para o desenvolvimento deste projeto:
        </S.ProjectReasonsTitle>
      </S.ProjectReasonsTitleContainer>
      <S.BulletListContainer>
        <S.BulletList>
          <S.LiBulletList>Brasil: grande produtor de proteína animal + previsão de aumento de produção</S.LiBulletList>
          <S.LiBulletList>Risco a continuidade e expansão da atividade devido as mudanças do clima (regime de chuvas)</S.LiBulletList>
          <S.LiBulletList>Necessidade de manejo hídrico para garantia da continuidade e expansão da produção animal</S.LiBulletList>
        </S.BulletList>
      </S.BulletListContainer>
    </S.ContainerProjectReasons>
  )
}

export default ProjectReasons;