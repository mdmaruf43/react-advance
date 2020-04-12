import React from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
import { patientReducer, patientState } from '../../PataintReducer/PataintReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    console.log(state);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1,
        })
        nameRef.current.value = '';
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <h1>Patient Management: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text"/>
            </form>
            {
                state.patients.map(pt => 
                <li 
                    onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                    key={pt.id}
                >
                    {pt.name}
                </li>)
            }
        </div>
    );
};

export default PatientManagement;