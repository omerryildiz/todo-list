import React, {useEffect, useState} from 'react';
import CreateTask from '../popups/CreateTask'
import ListOnTable from './ListOnTable';
const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Yapılacaklar Listesi</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Ekle</button>
            </div>
          
            <div className='container'>
             <table className='table table-bordered'>
             <thead>
                <tr>
                    <th>   Görev</th>
                    <th>   Açıklama</th>
                    <th>   İşlemler</th>          
                </tr>
                
            </thead>
            {taskList && taskList.map((obj , index) =>
             <ListOnTable taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            
             </table>
            
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;