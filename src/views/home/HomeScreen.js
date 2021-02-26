import React from 'react';
import slide from '../../images/slider/slide.jpg';
import orderInfo from '../../images/elements/orderinfo.jpg';





const HomeScreen = () => {

    return (
        <div>
            <div className="container container__slider">
                <img src={slide} alt="" className="picture__slide" />
                <div className="box__slider">
                    <h1>Fryzury ślubne i makijaże z dojazdem</h1>
                    <button type="button">Poznaj nasze usługi</button>
                </div>
            </div>

            <div className="container container_orderinfo">
                <h2>Fryzjerki i wizażystki z Mobile Salon czekają na Twoje zamówienia.</h2>
                <h4>Złóż zamównie i bądź piękna wygodnie i profesjonalnie!</h4>
                <img src={orderInfo} alt="Proces przyjcia zamówienia w Mobile Salon" className="picture__orderinfo" />
            </div>

            <div className="container container__services">
                <div className="row row__services">

                    TREŚĆ
                    
                            {/* <?php

                                for ($i = 0; $i < 4; $i++) {
                                    echo "<div className='box box__services'>";
                                    for ($y = 0; $y < 1; $y++) {
                                        echo '<img src="'.$box__services[$i][$y+1].'" alt="'.$box__services[$i][$y].'" className="picture__services">';
                                        echo '<h2>'.$box__services[$i][$y].'</h2>';
                                        echo '<h4>'.$box__services[$i][$y+2].'</h4>';
                                    }
                                    echo '<button type="button">Sprawdź</button>';
                                    echo "</div>";
                                }

                            ?> */}

                </div>
            </div>

            <div className="container container__team">
                <div className="row">
                    <div className="box box__team">
                        <img src="images/team/stylistki-mobile-salon.jpg" alt="Zespół stylistek Mobile Salon" className="picture__team picture__team--left" />
                        <img src="images/team/fryzjerki-mobile-salon.jpg" alt="Zespół fryzjerek Mobile Salon" className="picture__team picture__team--right" />
                    </div>
                    <div className="box box__team">
                        <h2>Zespoł Mobile Salon</h2>
                        <h4><img src="images/icons/icons-team/zespol-mobile-salon-icon.png" alt="Zespoł Mobile Salon to już pnad 25 stylistek" className="icon__team" />Zespoł Mobile Salon to już pnad 25 stylistek</h4>
                        <h4><img src="images/icons/icons-team/covid-mobile-salon-icon.png" alt="Każda stylistka wyszkolona jest z zasad bezpieczeństwa Covid-19" className="icon__team" />Każda stylistka wyszkolona jest z zasad bezpieczeństwa Covid-19</h4>
                        <h4><img src="images/icons/icons-team/zamowienia-mobile-salon-icon.png" alt="Ciągle rośniemy - zrealizowaliśmy juz ponad 3000 usług dla Was!" className="icon__team" />Zrealizowaliśmy juz ponad 3000 usług dla Was!</h4>
                        <h4><img src="images/icons/icons-team/czas-mobile-salon-icon.png" alt="Szczególnie dbamy o terminowość i punktualność" className="icon__team" />Szczególnie dbamy o terminowość i punktualność</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row__orderInfo">
                    <div className="box box__orderInfo"><h4>Zamówienie online</h4></div>
                    <div className="box box__orderInfo">Potwierdzenie zamówienia</div>
                    <div className="box box__orderInfo">Opłacenie zaliczki 50% przelewem</div>
                    <div className="box box__orderInfo">Wykonanie zamówienia i opłacenie pozostałej kwoty</div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen