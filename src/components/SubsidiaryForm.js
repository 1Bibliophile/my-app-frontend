import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const SubsidiaryForm = () => {
  const [assets, setAssets] = useState([])

  
  const [sub, setSub] = useState("")
  const [asset, setAsset] = useState("")
  const [launchDate, setLaunchDate] = useState("")
  
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch("http://localhost:9292/assets")
          const data = await response.json()
          setAssets(data)
      } catch(error) {
          alert(error)
      }
    }
    fetchData()
  
    
  }, [])
  


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

  if([sub, launchDate, asset].some(value => value.trim() === "")){
    alert("Please complete all fields")

    return null
  }

  const newSub = {name: sub, date: launchDate, asset_id: parseInt(asset)}
  console.log(newSub)

  fetch("http://localhost:9292/subsidiaries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newSub)

  })
  .then(() => history.push("/subsidiaries"))

  setSub("")
  setLaunchDate("")
}

  return (
    <>
      <h3>Add a new Subsidiary</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='sub'>Subsidiary</label><br />
        <input onChange={e => setSub(e.target.value)} type="text" name="sub" value={sub} required />
        <br /><br />
        <label htmlFor='subDate'>Subsidiary Launch Date</label><br />
        <input onChange={e => setLaunchDate(e.target.value)} type="text" name="subDate" value={launchDate} required />
        <br /><br />
        <label htmlFor='SubAsset'>Subsidiary Asset</label><br />
        <select onChange={e => setAsset(e.target.value)}>
          <option selected disabled value="">Select an Asset</option>
          {assets.map(asset => <option value={asset.id}>{asset.name}</option>)}
        </select>
        <input type="submit" value="Add Asset" />
      </form>
    </>

  )
}

export default SubsidiaryForm