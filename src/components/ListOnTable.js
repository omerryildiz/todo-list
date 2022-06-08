import React, {useState} from 'react';
import EditTask from '../popups/EditTask';

const ListOnTable = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <>
         <tbody>
                {
                    <tr >
                    <td>{taskObj.Name.toString()}</td>
                    <td>{taskObj.Description.toString()}</td>
                    <td style={{"width":"70px"}}>
                        <button className='btn btn-primary' onClick = {() => setModal(true)}>Düzenle</button>
                        <button className='btn btn-danger' onClick = {handleDelete} >Sil</button>
                    </td>
                </tr>
                }
                
            </tbody>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
       

        </>
       
    );
};

export default ListOnTable;