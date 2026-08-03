import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../style/all-list.css'

export default function AllList() {
    const [taskData, setListData] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);
    
    useEffect(() => {
        getListData()
    }, []);

    const getListData = async () => {
        let data = await fetch('http://localhost:3200/list', {credentials:'include'})
        data = await data.json();
        if (data.status) {
            setListData(data.result);
        }
    }
    const deleteList = async (id) => {
        let data = await fetch('http://localhost:3200/delete/' + id, {method:'delete', credentials:'include'})
        data = await data.json();
        if (data.status) {
            getListData();
            console.log("List has been Delete Successfully");
        }
    }

    // Select All checkbox in table data
    const selectAll = (event) => {
        if (event.target.checked) {
            let items = taskData.map((item) => item._id);
            setSelectedTask(items)
        } else {
           setSelectedTask([]) ;
        }
    }
    const selectSingleList = (id) => {
        if (selectedTask.includes(id)) {
            let items = selectedTask.filter((item)=> item!=id)
            setSelectedTask(items)
        } else {
            setSelectedTask([id, ...selectedTask])
        }
    }
    const deleteMultiple = async () => {
        let data = await fetch('http://localhost:3200/delete-multiple/', 
            {
                method:'delete',
                body: JSON.stringify(selectedTask),
                headers: {
                    'Content-Type': 'Application/Json'
                },
                credentials:'include'
            }
        )
        data = await data.json();
        if (data.status) {
            console.log(data);
            getListData();
            console.log("List has been Delete Successfully");
        }
    }
    return (
        <div className="container">
            <h1>All To do List</h1>
            <div className='ListDelete'>
                <button className='delete-item' style={{width:"150px"}} onClick={deleteMultiple}>
                    Delete List
                </button>
            </div>
            <table className="tableData">
                <thead>
                    <tr>
                        <th><input type="checkbox" onChange={selectAll}/></th>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {taskData?.map((item, index) => (
                        <tr key={item._id}>
                            <td><input type="checkbox"
                            onChange={() => selectSingleList(item._id)}
                              checked={selectedTask.includes(item._id)}/>
                              </td>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <div className='btn-action'>  
                                    <Link to={"/edit/" + item._id} className='edit-btn'>Edit</Link>
                                    <button onClick={() => {deleteList(item._id)}} className="btn-delete">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}