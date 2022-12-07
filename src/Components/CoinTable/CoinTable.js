import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import config from '../Config/Config';
import axios from 'axios';
import Main from '../Main/Main';

function CoinTable({ itemsPerPage }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getCoin() {
      const resp = await axios.get(config.coinlist);
      // console.log('hi',resp)
      setItems(resp.data)
    }
    getCoin();
  }, [])
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <h1 className='text-center my-4 ' >Top Crypto Currency</h1>
      <Main currentItems={currentItems} />
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

export default CoinTable;