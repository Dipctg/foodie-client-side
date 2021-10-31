import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Card = () => {
    return (
        <div>
            <div class="p-10">

                <div class="max-w rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://img.lovepik.com/photo/40015/5932.jpg_wh300.jpg" alt="" />
                    <img class="w-full" src="https://img.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2021/09/08/food-delivery.jpg?itok=7Guu3SDl" alt="" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Foodie</div>
                        <p class="text-gray-700 text-base">
                            With the demand for food delivery through online purchase growing fast, the government is planning to frame a policy in order to streamline the business and protect interests of all the actors in the chain, including customers and suppliers.

                            The plan comes following pleas from restaurant operators demanding a policy on allegations that food delivery companies charge a high rate of commission to deliver foods.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <Link as={HashLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" to="/packages">Packages</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;