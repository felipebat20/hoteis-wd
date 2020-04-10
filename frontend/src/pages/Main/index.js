import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
export default class Main extends Component {
    state = {
        hoteis: [],
        hoteisInfo: {},
        page: 1,
    }
    componentDidMount() {
        this.loadProduct();
    }
    loadProduct = async (page = 1) => {
        const response = await api.get(`/hoteis?page=${page}`);

        const { docs, ...hotelInfo } = response.data;
        console.log(hotelInfo);
        this.setState({ hoteis: docs, hoteisInfo: hotelInfo, page: page });
    }

    prevPage = () => {
        const { page, hoteisInfo } = this.state;

        if (page === 1 ) return;

        const pageNumber = page - 1;
        this.loadProduct(pageNumber);
    }
    nextPage = () => {
        const { page, hoteisInfo } = this.state;
        console.log(page, hoteisInfo);
        if (page === hoteisInfo.totalPages) return;

        const pageNumber = page + 1;

        this.loadProduct(pageNumber);

    }

    render() {
        const { hoteis, page, hoteisInfo } = this.state;
        return (
            <div className="hotel-list">
                {hoteis.map(hotel => (
                    <article key={hotel._id}>
                        <strong>{hotel.name}</strong>
                        <p>{hotel.city} - {hotel.uf}</p>

                        <a href="">Ver detalhes</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === hoteisInfo.totalPages}onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}