import React from 'react'

export default function Item(props) {
  return (
    <div>
        <li className="border justify-content-between align-items-center d-flex p-2 m-2">
            <div className="p-3">{props.txt}</div>
            <button onClick={() => {props.deleteFunction(props.id)}} className="btn btn-danger p-2 h-50">Supprimer</button>
        </li>
    </div>
  )
}
