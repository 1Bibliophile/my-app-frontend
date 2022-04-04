import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const SubsidiaryForm = () => {
  const [sub, setSub] = useState("")
  const [launchDate, setLaunchDate] = useState("")
  
  

let v = ""
/*
const handleChange = (e) = {
  setSub({
    ...sub,
    [e.target.name]: e.target.value
  })
}
*/

const handleSubmit = e => {
  e.preventDefault()

  if([sub, launchDate].some(value => value.trim() === "")){
    alert("Please complete all fields")

    return null
  }

  const newSub = {
    sub: sub,
    launchDate: launchDate
  }

  fetch("http://localhost:9292/assets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newSub)
    
  })
}
  return (
    <>
      <h3>Add a new Subsidiary</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='sub'>Subsidiary</label>
        <input onChange={e => setSub(e.target.value)} type="text" name="sub" value={sub} required />
        <br />
        <label htmlFor='subDate'>Subsidiary Launch Date</label>
        <input onChange={e => setLaunchDate(e.target.value)} type="text" name="subDate" value={launchDate} required />
        <br />
        <input type="submit" value="Add Asset" />
      </form>
    </>

  )
}

export default SubsidiaryForm