import React, { useReducer } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import cardImg from "../../assets/Images/card-prodect.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../../components/common/Button";

const Cart = () => {
  const size = [
    {
      label: "kjfsdfkje",
      value: "kjfsdfkje",
    },
    {
      label: "fdfsdfkje",
      value: "fdfsdfkje",
    },
  ];
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
          <div className="cart-product ">
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
                <tr className="product border-b border-[#F0F0F0] text-sm lg:text-base">
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
                  <td>
                    <span className="px-5 py-7 font-primaryFont font-bold text-xl">
                      $44.00
                    </span>
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
                <tr className="coupon">
                  <td className="flex flex-col items-center gap-4 py-5 lg:flex-row">
                    <select className="block w-[60%] ml-3 focus:outline-none border border-[#F0F0F0] py-2 font-primaryFont font-normal text-sm text-gray">
                      <option selected>SIZE</option>
                      {/* <option value="US">United States</option> */}
                    </select>
                    <span className="font-primaryFont text-sm font-bold">
                      Apply coupon
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="pr-4 text-right font-primaryFont text-sm font-bold">
                      Update cart
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="total-calculation w-[30%] ml-auto mt-12">
              <div className="total-header text-right pb-4">
                <h5 className="font-primaryFont font-bold text-xl text-black">
                  Cart totals
                </h5>
              </div>
              <div className="total-body ">
                <div className="sub_total flex">
                  <div className="w-2/4 py-2 pl-4 border border-[#F0F0F0]">
                    <h6 className="font-primaryFont font-bold text-base text-black">
                      Subtotal
                    </h6>
                  </div>
                  <div className="w-2/4 py-2 pl-4 border border-[#F0F0F0]">
                    <span className="font-primaryFont font-normal text-base text-gray">
                      389.99 $
                    </span>
                  </div>
                </div>
                <div className="total flex">
                  <div className="w-2/4 py-2 pl-4 border border-[#F0F0F0]">
                    <h6 className="font-primaryFont font-bold text-base text-black">
                      Total
                    </h6>
                  </div>
                  <div className="w-2/4 py-2 pl-4 border border-[#F0F0F0]">
                    <span className="font-primaryFont font-normal text-base text-black">
                      389.99 $
                    </span>
                  </div>
                </div>
                <Button text={"Proceed to Checkout"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
