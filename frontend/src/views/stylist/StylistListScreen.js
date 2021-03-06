import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const StylistListScreen = () => {
    const [stylistList, setStylistList] = useState([]);
    const getFetch = () => {
        fetch('http://mobile-salon/controllers/StylistApiController.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log('response')
                setStylistList(response.stylistList)
            });
    }

    useEffect(() => {
        getFetch();
    }, []);

    return (
        <div className="container-stylist-list-screen">
            <div className="column-stylist-filter">

                <select className="form-control" >
                    <option value="">Wszystkie miasta</option>
                    {stylistList && stylistList.map((item, index) => <option key={index} value={item.city}>{item.city}</option>)}
                </select>


            </div>
            <div className="column-stylist-result">

            </div>
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
    );
}

export default StylistListScreen;





