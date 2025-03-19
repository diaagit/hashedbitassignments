import React,{useState} from 'react'

function Todo(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
   <div className="input-container">
        <input type="text" placeholder="Add a new task" className='input-box-todo' value={inputText} 
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}/>
        <button className='add-btn' onClick={()=>{props.addList(inputText); setInputText("")}}>+</button>

   </div>

  )
}

export default Todo