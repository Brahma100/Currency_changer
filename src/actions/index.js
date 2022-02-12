import apiLink from "../Api/Link";

export const actionTypes = {
  FETCH_DATA: "FETCH_DATA",
  MODIFY_CURR: "MODIFY_CURR"
};

export const fetchReqdata = () => async dispatch => {
  const response = await apiLink.get("./products.json");
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: response.data
  });
};
export const fetchRate = (newCurr,curr) => async (dispatch,getState) => {
  const response = await apiLink.get(`https://v6.exchangerate-api.com/v6/730928bca449f3e443711068/latest/${newCurr}`);
  let conversionRates = response.data.conversion_rates
  let rate=conversionRates[curr]
  let products=getState().products.products;
  products=products.map(item=>{
    item.price=item.price/rate;
    return item;
  })
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: products
  });
  dispatch({
    type: actionTypes.MODIFY_CURR,
    payload: newCurr
  });
};
