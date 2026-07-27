import { useEffect, useState } from 'react';
import '../style/add-list.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditList() {
    const [taskList, setListData] =useState({title: '', description: ''});
    const {id} = useParams();
    useEffect(() => {
        getListById(id)
    }, []);
    const getListById = async (id) => {
        let list = await fetch('http://localhost:3200/list/' + id)
        list = await list.json();
        console.log(list);
        if (list.status) {
            setListData(list.result);
        }
    }
    return (
        <div className="container">
            <h1>Update New List</h1>
            <label htmlFor="title">Title</label>
            <input value={taskList.title} type="text" name="title" id="title" placeholder='Enter Your Title' />
            <label htmlFor="description">Description</label>
            <textarea value={taskList.description} name="description" id="description" placeholder="Enter Your Description" rows={5}></textarea>
            <button className="submitbtn" id='submitbtn'>Update</button>
        </div>
    );
}