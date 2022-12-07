import './Main.css'
import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom';

export default function Main(props) {
    // console.log('main',props.currentItems)
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.currentItems)
    }, [props.currentItems])
    // console.log('data', data)
    return (
        <div className='container my-5 table-responsive'>
            <table className="table table-hover ">
                <thead style={{ backgroundColor: 'yellow' }}>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="col">#</th>
                        <th scope="col">Coin</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">24 High</th>
                        <th scope="col">24 Low</th>
                        <th scope="col">24h change %</th>
                        <th scope="col">Market Cap.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data !== null && data.length > 0 ? (

                            data?.map((item) =>
                                <tr style={{ color: 'white', lineHeight: '40px', textAlign: 'right' }} key={item.name} >
                                    <th style={{ textAlign: 'left' }}> {item.market_cap_rank}</th>
                                    <th scope="row" style={{ textAlign: 'left' }}>
                                        <Link to={`/coin-detail/${item.id}`} style={{textDecoration:'none' ,color:'white'}}>
                                            <img id='logo' src={item.image} />
                                            &nbsp; {item.name}
                                        </Link>
                                    </th>
                                    <td>&#8377; {item.current_price.toLocaleString()}</td>
                                    <td>&#8377; {item.high_24h.toLocaleString()}</td>
                                    <td>&#8377; {item.low_24h.toLocaleString()}</td>
                                    <td style={{ color: (item.price_change_percentage_24h > 1 ? 'green' : 'red') }}>{item.price_change_percentage_24h.toLocaleString()} %</td>
                                    <td>&#8377; {item.market_cap.toLocaleString()}</td>
                                </tr>
                            )

                        ) : (
                            <tr>None</tr>
                        )

                    }
                </tbody>
            </table>

        </div>
    )
}
