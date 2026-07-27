import { useEffect, useState } from 'react';
import '../style/add-list.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditList() {
    const [taskList, setListData] =useState({title: '', description: ''});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getListById(id)
    }, []);
    const getListById = async (id) => {
        let list = await fetch('http://localhost:3200/list/' + id)
        list = await list.json();
        if (list.status) {
            setListData(list.result);
        }
    }
    const updateList = async () => {
        let list = await fetch(
            `http://localhost:3200/update-list/${id}`,
            {
                method:"put", body:JSON.stringify(taskList),
                headers: {'Content-Type': 'Application/Json'}
            }
        )
        list = await list.json();
        if (list.status) {
            navigate('/')
        }
    }
    return (
        <div className="container">
            <h1>Update New List</h1>
            <label htmlFor="title">Title</label>
            <input value={taskList.title} type="text" name="title" id="title" placeholder='Enter Your Title' onChange={(event) => setListData({...taskList, title:event.target.value})}/>
            <label htmlFor="description">Description</label>
            <textarea value={taskList.description} name="description" id="description" placeholder="Enter Your Description" rows={5} onChange={(event) => setListData({...taskList, description:event.target.value})}></textarea>
            <button className="submitbtn" id='submitbtn' onClick={updateList}>Update</button>
        </div>
    );
}