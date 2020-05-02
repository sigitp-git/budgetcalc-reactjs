import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    const { id, charge, amount} = expense
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="expense">${amount}</span>
            </div>
            <div>
                {/* onClick() can't call directly the handleEdit/handleDelete since it will execute the functions directly without waiting for click, use arrow function to wait for click as callback function */}
                <button className="edit-btn" aria-label="Edit Button" onClick={() => {handleEdit(id)}}><MdEdit /></button>
                <button className="clear-btn" aria-label="Clear Button" onClick={() => {handleDelete(id)}}><MdDelete /></button>
            </div>
        </li>
    )
}
