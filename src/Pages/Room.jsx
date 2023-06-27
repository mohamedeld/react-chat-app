import React,{useState,useEffect} from 'react'
import { COLLECTION_ID_MESSAGES, DATABASE_ID, databases } from '../AppWriteConfig'
const Room = () => {
  const [messages,setMessages] = useState([]);
  useEffect(() => {
    getMessage()
  },[])
  const getMessage = async()=>{
    try{
      const response = await databases.listDocuments(DATABASE_ID,COLLECTION_ID_MESSAGES);
      console.log(response);
      setMessages(response.documents);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <div>
        {
          messages.map(message=>(
            <div key={message.$id}> 
              <div>
                {message.$createdAt}
              </div>
              <div>
                <span>{message.body}</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Room