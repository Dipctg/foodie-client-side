import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, SetPackages] = useState([]);
    useEffect(() => {
        fetch('https://shocking-castle-07906.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                SetPackages(data)
            })
    }, [])


    return (
        <div>

            <div>
                <h3 style={{
                    backgroundColor: '#584abf',
                    color: "#eed13f",
                    padding: "5px"

                }}>Spacial Packeges</h3>
                <div className="p-4" style={{
                    backgroundColor: '#1E40AF',
                    color: "#eed13f",
                    padding: "5px"

                }}>
                    <Link as={HashLink} className="text-decoration-none p-2" to="/breakfast">Breakfast</Link>
                    <Link as={HashLink} className="text-decoration-none p-2" to="/lunch">Lunch</Link>
                    <Link as={HashLink} className="text-decoration-none p-2" to="/dinner">Dinner</Link>
                    <Link as={HashLink} className="text-decoration-none p-2" to="/desert">Desert</Link>

                </div>
            </div>
            <div>
                <h2>All Packages</h2>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    packages.map(package1 => <Package
                        Key={package1._id} data={package1}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;