import '../style/add-list.css'
function AddList() {
    return (
        <div className="container">
            <h1>Add New List</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder='Enter Your Title' />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Enter Your Description" rows={5}></textarea>
                <button className="submitbtn" id='submitbtn'>Add New</button>
            </form>
        </div>
    );
}
export default AddList;