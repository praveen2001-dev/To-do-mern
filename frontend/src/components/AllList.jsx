import { useState, useEffect } from 'react';
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

    return (
        <div className="container">
            <h1>All To do List</h1>
            <table className="tableData">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {taskData?.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}