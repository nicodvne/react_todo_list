import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {


    const [dataArr, setDataArr] = useState([
        {txt: "promener le chien", id: uuidv4()}, //UUIDV4 : assignation d'un uuid unique a chaque élément (utile pour le crud )
        {txt: "promener le chat", id: uuidv4()},
        {txt: "promener le lion", id: uuidv4()},
    ]);


    const [stateInput, setStateInput] = useState()

    // Dans cette méthode, la facon de supprimer l'élément est de créer une nouvelle liste SANS l'élément ciblé
    // Il faut aussi le passer dans les state via la méthode setDataArr pour appliquer la modif dans le state
    const deleteElement = (id) => {
        const filterState = dataArr.filter(item => {
            return item.id !== id;
        })

        setDataArr(filterState);
    }; 

    const linkedInput = elementContent => {
        setStateInput(elementContent);
    }

    const addTodo = e => {
        e.preventDefault();

        const currentArr = [...dataArr]
        const newTodo = {
            txt: stateInput,
            id: uuidv4()
        }

        currentArr.push(newTodo)
        setDataArr(currentArr);

        // permet de réinitialiser le champ input du formulaire ( car lié avec le {value})
        setStateInput('');
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose a faire : </label>
                <input onInput={e => linkedInput(e.target.value)} value={stateInput} type="text" className="form-control"  id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                { dataArr.map(item => {
                    return (
                        <Item 
                        txt={item.txt} // Futur chaine de caractère qui sera dans l'Item
                        key={item.id} // on passe un id unique pour chaqun des éléments ( spécifique à react )
                        id={item.id} // On passe l'id pour pouvoir utiliser le crud via nos méthodes
                        deleteFunction={deleteElement} // Passage d'une méthode via le crud
                        />
                    )
                }) }
            </ul>
        </div>
    )
}