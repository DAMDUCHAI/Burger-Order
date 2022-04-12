import { React, Fragment } from "react";
import { useDispatch } from "react-redux";
import { handleQuantity } from "../redux/actions/burgerOderActions";
export default function ItemMenu(props) {
  const { ingredient } = props;
  const dispatch = useDispatch();
  return (
    <Fragment>
      <tr>
        <th>{ingredient.id}</th>
        <th>{ingredient.price} $</th>
        <th>
          <div className="control-menu">
            <button
              className="btn-control plus "
              onClick={() => {
                dispatch(handleQuantity(ingredient, true));
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
            <p className="quantity">{ingredient.quantity}</p>
            <button
              className="btn-control  minus"
              onClick={() => {
                dispatch(handleQuantity(ingredient, false));
              }}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </th>
        <th>{ingredient.price * ingredient.quantity} $</th>
      </tr>
    </Fragment>
  );
}
