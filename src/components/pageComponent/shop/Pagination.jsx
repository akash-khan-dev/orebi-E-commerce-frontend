import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Product from "../../common/Product";
import src from "../../../assets/Images/New-2.png";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={i} className=" md:w-[49%] lg:w-[32%] pb-12 relative">
            <Product src={src} badgeTile="10%" showBadge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap justify-between">
        <Items currentItems={currentItems} />
      </div>
      <div className="md:flex md:justify-between md:items-center">
        <ReactPaginate
          breakLabel="..."
          breakClassName="font-primaryFont font-normal text-[14px] text-[#767676] mt-5 border-none"
          nextLabel={null}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel={null}
          renderOnZeroPageCount={null}
          previousClassName="hidden"
          nextClassName="hidden"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          pageClassName="inline-block border border-solid border-[#F0F0F0] py-[7p x] md:py-[9px] px-[10px] md:px-[14px] font-primaryFont font-normal text-[14px] text-[#767676]"
          containerClassName="flex flex-wrap gap-3"
          activeClassName="inline-block border border-solid border-[#F0F0F0] py-[9px] px-[14px] font-primaryFont font-normal text-[14px] bg-black text-white"
        />
        <p className="mt-3 md:mt-0 font-primaryFont font-normal text-sm text-gray">
          {`Products from ${itemOffset} to ${itemOffset + itemsPerPage} of
          ${items.length}`}
        </p>
      </div>
    </>
  );
};
export default Pagination;
