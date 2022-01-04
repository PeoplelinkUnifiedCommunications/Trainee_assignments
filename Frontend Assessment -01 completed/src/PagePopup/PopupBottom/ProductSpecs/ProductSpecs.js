import React from "react";
import Details from "./Details";
import "./ProductSpecs.css"
import Warranty from "./Warranty";
function ProductSpecs(props) {
    return (
    <>
        <div className="productSpecs">
            <h3>
                Dimensions
            </h3>
            <div className="container">
                <div className="dimensions">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    Product Deep (in.)
                                </th>
                                <td >
                                    26
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Product Height(in.)
                                </th>
                                <td>
                                    73.625  
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Product Width(in.)
                                </th>
                                <td>
                                    26
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="left">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    Tank Value Size(in.)
                                </th>
                                <td>
                                    1
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Water Connection Size(in.)
                                </th>
                                <td>
                                    1
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Details />
        <Warranty />
        </>
    )
}
export default ProductSpecs;