import React from 'react';

const ManageOrder = ({ index, manageOrder, refetch }) => {
    const { toolName, toolImg, email, toolAvailable, toolOrderedQuantity, toolPrice } = manageOrder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><img className='w-20' src={toolImg} alt="" /></td>
            <td>{toolName}</td>
            <td>{toolAvailable}</td>
            <td>{toolOrderedQuantity}</td>
            <td>${toolPrice}</td>
            <td>
                <button className="btn btn-error">Cancel</button>
            </td>
        </tr>
    );
};

export default ManageOrder;