import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../style/all-list.css'

export default function AllList() {
    const [taskData, setListData] = useState();
    
    useEffect(() => {
        getListData()
    }, []);

    const getListData = async () => {
        let data = await fetch('http://localhost:3200/list')
        data = await data.json();
        if (data.status) {
            setListData(data.result);
        }
    }
    const deleteList = async (id) => {
        let data = await fetch('http://localhost:3200/delete/' + id, {method:'delete'})
        data = await data.json();
        if (data.status) {
            getListData();
            console.log("List has been Delete Successfully");
        }
    }
    
    return (
        <div className="container">
            <h1>All To do List</h1>
            <table className="tableData">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {taskData?.map((item, index) => (
                        <tr key={item._id}>
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