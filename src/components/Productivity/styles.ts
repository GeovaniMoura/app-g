import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductivityContainer = styled.div`
  display: flex;
  height: 40%;
  justify-content: center;
  margin-left: 20px;
  border: 2px solid #CAD5DE;
`

export const WaterProductivityContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 2px solid #CAD5DE;
  width: 50%;
`

export const WaterScarcityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const TitleContainer = styled.div`
  margin-top: 4px;
  height: 20%;
`

export const Title = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`

export const FormulaContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

export const pPH = styled.p`
  margin-bottom: 2px;
  margin-right: 5px;
`

export const HrFormula = styled.hr`
  height: 2px;
  margin: 3px 0;
`

export const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-size: 12px;
`

export const LiBulletList = styled.li`
  margin: 2px 0;
  width: 80%;
`

export const WulcaContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  height: 30%;
  font-size: 12px;
`

export const WulcaImage = styled.img`
  width: 100px;
`

export const FootPrintContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  height: 30%;
  font-size: 12px;
`

export const FootPrintImage = styled.img`
  width: 100px;
`