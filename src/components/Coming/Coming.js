import React from 'react';
import './Coming.css'

const Coming = () => {
    return (
        <div>
            <h1 class="coming-heading">This Services Will Be Coming Soon!!!</h1>
            <div class="card-group p-5 gap-4">
                <div class="card bg-dark text-white">
                    <img src="https://i.ibb.co/5GHdm3q/using-fast-delivery-service-2.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">E-Courier</h5>
                        <p class="card-text">eCourier is a courier service based in the United Kingdom. Courier positions are tracked by GPS and an intelligent dispatch system assigns orders in traditional industry. </p>

                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.ibb.co/FgsjG9T/isolated-shot-happy-handsome-male-driver-scooter-with-red-helmet.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">E-bike</h5>
                        <p class="card-text">Basically, an electric bike has fewer components than a typical gas vehicle.  Keeping your e-bike in great condition is fairly easy and very important so don't neglect it.</p>

                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.ibb.co/BGcQxjT/young-african-american-man-doing-laundry.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">E-Laundry</h5>
                        <p class="card-text">It is an online and retail laundry service provider. Be it steam ironing, starching, stain removal, minor alterations, laundry and dry-cleaning.  </p>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Coming;