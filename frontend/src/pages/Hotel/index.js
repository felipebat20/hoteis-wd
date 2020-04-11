import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Hotel extends Component {
    state = {
        hotel: {}
    };
    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/hoteis/${id}`);

        this.setState({ hotel: response.data });
    }


    render() {
        const { hotel } = this.state;
        return (
            <div className="hotel-info">
                <h1>{hotel.name}</h1>
                <p>Endereço: {hotel.street}, {hotel.number} - {hotel.neighborhood}, {hotel.city} - {hotel.uf}, {hotel.cep}</p>

            </div>
        );
    }
}