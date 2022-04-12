import { CHANGE_NUMB } from "../types/Types";

const stateDefault = {
  burger: [
    {
      name: "Salad",
      price: 10,
      quantity: 1,
    },
    {
      name: "Cheese",
      price: 20,
      quantity: 1,
    },
    {
      name: "Beef",
      price: 55,
      quantity: 1,
    },
  ],
};

const burgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CHANGE_NUMB:
        let ingredientsArr = [...state.burger];
        let index = ingredientsArr.findIndex((item) => (item.name === action.payload.name));
        if(action.payload.value){
            ingredientsArr[index].quantity +=1;
        }else{
            if(ingredientsArr[index].quantity < 1){
                alert('please choose ingredients again')
            }else{
                ingredientsArr[index].quantity -=1;
            }
        }
        state.burger= ingredientsArr;
      return { ...state };

    default:
      return { ...state };
  }
};
export default burgerReducer;
