/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, NavItem } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import config from '../Config/Config';
import './CoinDetail.css'
import axios from 'axios';
import CoinGraph from './CoinGraph';
export default function CoinDetail() {
    const { name } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            // console.log('name',name)
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`);
            console.log(data)
            setData(data);
        }
        getData();
    }, []);
    return (
        <div className='mt-3'>
            <Container>
                <Link to='/' style={{ textDecoration: 'none' }}  >
                    <div className='back'>
                        <img src={'https://cdn-icons-png.flaticon.com/512/786/786399.png'} style={{ width: '20px', height: '20px' }} />
                        &nbsp;Back
                    </div>
                </Link>
                <h1 className='text-center mb-3'>{data?.name}</h1>

                <Row className='mt-1'>
                    <Col xs={12} sm={4}>
                        <div className='px-4'>
                            <div className='d-flex justify-content-center mb-2'>
                                <img  src={data?.image?.large} id='coin-icon' />
                            </div>
                            <div className='coin-detail'>Coin name : {data?.name}</div>
                            <div className='coin-detail'>Coin Symbol : {data?.symbol} </div>
                            <div className='coin-detail'>Genesis Date {data?.genesis_date}</div>
                            <div className='coin-detail'>Current Price : &#8377;&nbsp;{data?.market_data?.current_price?.inr.toLocaleString()} </div>
                            <div className='coin-detail'>Market  Cap : &#8377;  
                            &nbsp;{data?.market_data?.market_cap?.inr.toLocaleString()} </div>
                            <div className='coin-detail' >Price change % in 24hours  :
                            <span style={{ color: (data?.market_data?.price_change_percentage_24h > 1 ? 'green' : 'red') }}> {data?.market_data?.price_change_percentage_24h} % </span></div>
                            
                        </div>
                    </Col>
                    <Col xs={12} sm={8}>
                        <h3 className='about-coin'>About Coin</h3>
                        <p >{data?.description?.en.split('. ')[0]}. </p>
                    </Col>
                </Row>
                <CoinGraph data={name} />
            </Container>
        </div>
    )
}
