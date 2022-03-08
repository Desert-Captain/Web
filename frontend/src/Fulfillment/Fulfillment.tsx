import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment(props: any) {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>PAID AT</th>
                            <th>SHIPPED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillment.map(fulfillment => (
                            <tr key={fulfillment._id} className={fulfillment.isShipped ? 'shipped' : 'notShipped'}>
                            <td>{fulfillment._id}</td>
                            <td>{fulfillment.createdAt}</td>
                            <td>{fulfillment.totalPrice}</td>
                            <td>{fulfillment.user.name}</td>
                            <td>{fulfillment.paidAt}</td>
                            <td>{fulfillment.isShipped.toString()}</td>
                            <td>
                                <Link to={"/fulfillment/" + fulfillment._id} className="button secondary" >
                                    Details
                                    </Link>
                            </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
             </div>
        </div>);
};

export default Fulfillment;