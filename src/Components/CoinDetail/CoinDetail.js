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
    const [ data, setData ] = useState([]);
    useEffect(() => {
        async function getData(){
            // console.log('name',name)
            const {data} =await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`);
            // console.log(data)
            setData(data);
        }
        getData();
    },[]);
    return (
        <div className='mt-3'>
            <Container>
                <Link to='/' style={{textDecoration : 'none'}}  >
                    <div className='back'>
                        <img src={'https://cdn-icons-png.flaticon.com/512/786/786399.png'} style={{ width: '20px', height: '20px' }} />
                        &nbsp;Back
                    </div>
                </Link>
                <Row className='mt-4'>
                    <Col xs={12} sm={5}>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h1>{data?.name}</h1>
                            <img src={data?.image?.large} id='coin-icon'/>
                            <h4>Current Price : &#8377;{data?.market_data?.current_price?.inr.toLocaleString()} </h4>
                            <h4>Market  Cap : &#8377;{data?.market_data?.market_cap?.inr.toLocaleString().slice(0,-6)} M </h4>
                        </div>
                    </Col>
                    <Col xs={12} sm={7}>
                        <CoinGraph data={data}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
