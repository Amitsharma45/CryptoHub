import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import config from '../Config/Config';
import axios from 'axios';
import CoinTable from '../CoinTable/CoinTable';

function Home({ itemsPerPage }) {
  useEffect(() => {
    async function getCoin() {
      const resp = await axios.get(config.coinlist);
      // console.log('hi',resp)
      setmainItem(resp.data);
      setItems(resp.data)
    }
    getCoin();
  }, [])
  const [mainItem, setmainItem] = useState([]);
  const [searchitem, setsearchitem] = useState('');
  const [items, setItems] = useState([]);
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
    setItemOffset(newOffset);
  };
  function findCoin(coin) {
    var newItem = mainItem.filter((e) => e.name.toLowerCase().includes(coin.trim().toLowerCase()) === true);
    setItems(newItem)
    setsearchitem(coin)

  }

  return (
    <>
      <h1 className='text-center my-4' >Top Crypto Currency</h1>
      <div class="input-group mb-3 search-box" >
        <input onChange={(e) => findCoin(e.target.value)} type="text" className="form-control seacrh_input" placeholder="Search Coin By Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      </div>
      {
        items !== null && items.length > 0 ? (
          
            <>
              <CoinTable currentItems={currentItems} />
              <div style={{ padding: '10px 0px' }} >
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
              </div>
            </>

        ) : (
          <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px', color: 'yellow' }}>404 Not Found </div>
        )
      }

    </>
  );
}

export default Home;