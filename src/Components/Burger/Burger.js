import React from "react";
import styled from "react-emotion";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = styled("div")`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type = {igKey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

if (transformedIngredients.length===0){
    transformedIngredients = <p>Please start adding ingredients!</p>
}
    
    return (
    <Burger className={"Burger"}>
       <BurgerIngredient type="bread-top" />
{transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};

export default burger;
