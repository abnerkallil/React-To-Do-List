import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"



function App (){
    const [notes, setNotes] = useState([]);
    function addItem (note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }
    function deleteItem(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((notes, index) => {
                return index !== id;
            })
        })
    }
    return (
    <div>
    <Header />
    <CreateArea 
        onAdd={addItem}
    />
    {notes.map((noteItem, index) => (
        <Note key={index} id={index} title= {noteItem.title} content={noteItem.content} onDelete={deleteItem}/>
    ))}
    
    <Footer />
    </div>
    );
}
export default App;
