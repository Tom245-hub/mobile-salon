// import React { useState } from 'react';


// const StylistListScreen = () => {

//     const [stylistListCity, setStylistListCity] = useState([]);

//     const getFetch = () => {
//         fetch('http://react-filters/admin/api.php', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(response => response.json())
//             .then(response => {
//                 setStylistList(result(response))
//             });
//     }

//     useEffect(() => {
//         getFetch();
//     }, []);


//     let cities = [];
//     stylistList.map((item, index) => { if (!cities.includes(item.city)) { cities.push(item.city) } })

//     const filteringCity = (e) => {
//         let value = e.target.value
//         setStylistListCity(stylistList.filter(item => item.city === value))
//     }

//     let services = [];
//     stylistList.map((stylist, index) => {
//         Object.keys(stylist.uslugi).map((service, key) => { if (service && !services.includes(service)) { services.push(service) } })
//     })

//     const result = () => {
//         return stylistListCity.map((item, index) => <li key={index}>{item.name}</li>)
//     }

//     return (
//         <>
//             <form >

//                 <div className="row">
//                     <select className="form-control" onChange={filteringCity}>
//                         <option value="">Wszystkie miasta</option>
//                         {cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
//                     </select>
//                 </div>

//                 {services.map((service, index) => <div className="row align-items-center"><input type="checkbox" />{service}</div>)}

//                 <div className="row">
//                     <input placeholder="Wyszukaj..." className="form-control" type="text" />
//                     <button className="btn btn-secondary" type="submit">Wyszukaj</button>
//                 </div>

//             </form>

//             <div className="row">
//                 {result()}
//             </div>


//         </>
//     );
// }


// export default StylistListScreen

