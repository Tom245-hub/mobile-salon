import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { showAvailableCities, showAvailableServices } from '../../utils/utils'


const StylistListScreen = () => {
    const [stylistList, setStylistList] = useState([]);

    const getFetch = () => {
        fetch('http://mobile-salon/controllers/StylistApiController', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                setStylistList(response.stylistList)
            });
    }

    useEffect(() => {
        getFetch();
    }, []);


    return (
        <div className="container-stylist-list-screen">
            <div className="column-stylist-filter">

                <select>
                    <option value="">Wszystkie miasta</option>
                    {stylistList && showAvailableCities(stylistList).map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>

                {stylistList && showAvailableServices(stylistList).map((item, index) => <label key={index}><input type="checkbox" value={item} />{item}</label>)}



            </div>
            <div className="column-stylist-result">
                {stylistList &&
                    stylistList.map((stylist, index) =>
                        <Link key={index} to="#">
                            <div className="box-stylist">
                                <div className="box-image-big">
                                    <div className="box-image">
                                        <img src={stylist.image} alt={stylist.name} className="image" />
                                    </div>
                                </div>
                                <h4 className="box-title">{stylist.name}</h4>
                                <p>{stylist.city}</p>
                                <button>Zobacz profil</button>
                            </div>
                        </Link>
                    )}
            </div>
        </div>
    );
}

export default StylistListScreen;





