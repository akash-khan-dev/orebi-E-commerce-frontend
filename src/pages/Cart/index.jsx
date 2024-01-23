import React, { useReducer } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import cardImg from "../../assets/Images/card-prodect.png";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = () => {
  const handleQuantity = (state, action) => {
    switch (action.payload) {
      case "increase": {
        return {
          count: state.count + 1,
        };
      }
      case "decrease": {
        if (state.count > 1) {
          return {
            count: state.count - 1,
          };
        } else {
          return {
            count: (state.count = 1),
          };
        }
      }

      default:
        break;
    }
  };
  const [quantity, setQuantity] = useReducer(handleQuantity, { count: 1 });

  return (
    <>
      <section className="cart pb-10 sm:pb-15 md:pb-20 lg:pb-24">
        <div className="container">
          <div className="bread-crumb">
            <Breadcrumb />
          </div>
          <div className="cart-product">
            <table className="w-full border border-[#F0F0F0] text-left">
              <thead className="bg-[#F5F5F3]">
                <tr>
                  <th className="w-1/4 px-5 py-7 font-primaryFont font-bold text-base text-black">
                    Product
                  </th>
                  <th className="w-1/4 px-5 py-7 font-primaryFont font-bold text-base text-black">
                    Price
                  </th>
                  <th className="w-1/4 px-5 py-7 font-primaryFont font-bold text-base text-black">
                    Quantity
                  </th>
                  <th className="w-1/4 px-5 py-7 font-primaryFont font-bold text-base text-black">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#F0F0F0] text-sm lg:text-base">
                  <td className=" flex flex-col items-center py-7 lg:flex-row lg:gap-7 lg:px-5">
                    <span className="cursor-pointer text-2xl text-black font-bold">
                      &times;
                    </span>
                    <img
                      src={cardImg}
                      className={"h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"}
                      alt="cardProduct"
                    />
                    <span className="font-primaryFont text-xs md:text-sm lg:text-base font-bold text-black">
                      Product Name
                    </span>
                  </td>
                  <td className="px-5 py-7 font-primaryFont font-bold text-xl">
                    $44.00
                  </td>
                  <td className="flex w-1/2 flex-col items-center justify-between border border-[#F0F0F0] px-4 py-1 lg:flex-row">
                    <span
                      className="cursor-pointer text-xl"
                      onClick={() => setQuantity({ payload: "decrease" })}
                    >
                      <FiMinus />
                    </span>

                    <span className="font-primaryFont font-normal text-base text-gray">
                      {quantity.count}
                    </span>
                    <span
                      className="cursor-pointer text-xl text-gray"
                      onClick={() => setQuantity({ payload: "increase" })}
                    >
                      <FiPlus />
                    </span>
                  </td>
                  <td className="px-5 py-7 font-primaryFont font-bold text-xl text-black">
                    $ {quantity.count * 44}.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
