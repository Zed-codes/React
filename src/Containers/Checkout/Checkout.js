import React, {Component} from "react";
import {Route} from "react-router-dom";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
state={
    ingredients: {
        salad:1,
        meat: 1,
        cheese:1,
        lamb:1
    }
}
componentDidMount (){
    // Takes data from the URL
    const query = new URLSearchParams(this.props.location.search);
const ingredients = {};
for (let param of query.entries()){
    // ["salad","1"], so transform the array to an object
    ingredients[param[0]]= +param[1]
}
this.setState({ingredients:ingredients});
}

checkoutCancelledHandler = ()=>{
this.props.history.goBack();
}
checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
}
    render(){
return (
 
    <div>
        <CheckoutSummary ingredients={this.state.ingredients}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinue={this.checkoutContinuedHandler}/>
<Route path={this.props.match.path + "/contact-data"} component={ContactData}/>
        </div>
)
    }
}

export default Checkout;