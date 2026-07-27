import { useState } from 'react';
import '../style/add-list.css'
function AddList() {
    const [taskList, setListData] = useState();
    const handleAddList = async () => {
        let result = await fetch('http://localhost:3200/add-list',
            {
                method:'post',
                body: JSON.stringify(taskList),
                headers: {
                    'Content-Type': 'Application/Json'
                }
            }
        )
        result = await result.json()
        if (result) {
            console.log("New List Added")
        } else {
            console.log("Something went wrong, error!")
        }
    };
    return (
        <div className="container">
            <h1>Add New List</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder='Enter Your Title' onChange={(event) => setListData({...taskList, title:event.target.value})}/>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" placeholder="Enter Your Description" rows={5} onChange={(event) => setListData({...taskList, description:event.target.value})}></textarea>
            <button onClick={handleAddList} className="submitbtn" id='submitbtn'>Add New</button>
        </div>
    );
}
export default AddList;