import React, { useState,useEffect } from 'react'
import styles from './Main.css'
import Modal from '../Modall'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Main = () => {
  const [book,setBook]=useState("")
  const [result,setResult]=useState([])
  const[apiKey,setApiKey]=useState("AIzaSyAbcZIIQvRCd41CQycbq0VOsS7-8k8aDWc")
  function handleChange(event){
    const book=event.target.value
    setBook(book)
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(book)
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey).then(res=>{
      console.log(res.data.items)
      setResult(res.data.items)
    })
  }
  
  
  return (
    
    <div className="Main">
        <div className={styles.main}>
            <h1>Dada Book Searching App</h1>
            <div className={styles.input}>
              <form action="" onSubmit={handleSubmit}>
              <input onChange={handleChange} type="text" name="" id="" placeholder='Find Book' />
              <div className={styles.icon}><button className="btn" type="submit"><SearchIcon/></button></div>
              </form>
               
            </div>
        </div>
        <div className={styles.cards}>
            
        {
          result.map(book=>(
            <div className={styles.card}>
              <div className={styles.images}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              </div>
              <div className={styles.body}>
                  <p className={styles.p}>{book.volumeInfo.title}</p>
                  <hr />
                  <p className={styles.p1}>{book.volumeInfo.publishedDate}</p>
                  <div className={styles.a}>
                      <button><a href={book.volumeInfo.previewLink}>Preview</a> </button>
                      
                      <Modal/>
                  </div>
                 
              </div>

            </div>
          ))
        }

            
        </div>
    </div>
    
  )
}

export default Main