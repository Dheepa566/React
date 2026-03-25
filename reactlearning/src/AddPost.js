import React from 'react'

function AddPost({topic,setTopic,handleSubmit}) {
  return (
    <div>
        <h1>AddPost</h1>
        <form onSubmit={handleSubmit}>
            <label>New Topic : </label>
            <input type='text' 
                   value={topic}
                   onChange={(e)=>setTopic(e.target.value)}
                   placeholder='Enter the topic'/> 
            <button type='submit'>Add data</button>
        </form>
    </div>
  )
}

export default AddPost