import React from 'react';
import './ProductSpecs.css'

function ProductSpecs() {
    return (
        <div className='specsContainer'>
            <p className='title'>Dimensions</p>
            <table>
                <tr>
                    <td>Product Depth (in.)</td>
                    <td>26</td>
                    <td>Tank Value Size (in.)</td>
                    <td>1</td>
                </tr>

                <tr>
                    <td>Product Height (in.)</td>
                    <td>73.625</td>
                    <td>Water Connection Size (in.)</td>
                    <td>1</td>
                </tr>

                <tr>
                    <td>Product Width (in.)</td>
                    <td>26</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>


            <p className='title'>Details</p>
            <table>
                <tr>
                    <td>Appliaction Type</td>
                    <td>Residential</td>
                    <td>Rated Tank Capacity (gallons)</td>
                    <td>80</td>
                </tr>

                <tr>
                    <td>Finish Family</td>
                    <td>White</td>
                    <td>Required Volt Connection</td>
                    <td>240 volt</td>
                </tr>

                <tr>
                    <td>First Hour of Delivery (gallons/hr)</td>
                    <td>74.2</td>
                    <td>Returnable</td>
                    <td>90-Day</td>
                </tr>

                <tr>
                    <td>Fuel Type</td>
                    <td>Hybrid</td>
                    <td>Tank Lining Material</td>
                    <td>Glass</td>
                </tr>

                <tr>
                    <td>Indoor/Outdoor</td>
                    <td>Indoor</td>
                    <td>Tank Warranty</td>
                    <td>10 Year</td>
                </tr>

                <tr>
                    <td>Maximum Temperature (F)</td>
                    <td>140</td>
                    <td>Uniform Energy Factor</td>
                    <td>0</td>
                </tr>

                <tr>
                    <td>Minimum heat Pump Temperature (F)</td>
                    <td>42</td>
                    <td>Water Heater Features</td>
                    <td>Overheat Protection, Self Cleaning, Temperature Pressure Relief Value</td>
                </tr>

                <tr>
                    <td>Minimum Temperature (F)</td>
                    <td>42</td>
                    <td>Water Heater Profile</td>
                    <td>Product Depth (in.)</td>
                </tr>

                <tr>
                    <td>Nominal Tank Capacity (gallons)</td>
                    <td>80</td>
                    <td>Wattage (watts)</td>
                    <td>Product Depth (in.)</td>
                </tr>

                <tr>
                    <td>Product Weight (in.)</td>
                    <td>297.6 lb</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>

            <p className='title'>Warranty/Certifications</p>
            <table>
                <tr>
                    <td>Labor Warranty</td>
                    <td>No Warranty</td>
                    <td>Part Warranty</td>
                    <td>10 Year</td>
                </tr>
            </table>
        </div>)
}

export default ProductSpecs;
