import {useState, useEffect} from 'react'
import SubsidiariesList from '../components/SubsidiariesList'

const SubsidiariesContainer = () => {
  const [subsidiaries, setSubsidiaries] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const handleDelete = (e, id) => {
    //Fetch Delete fetch Call to /subsidiaries/${id}
    fetch(`http://localhost:9292/subsidiaries/${id}`, { method: 'DELETE' })
    .then(() => setSubsidiaries(subsidiaries.filter(sub => sub.id !== id)))
    
  }
  const fetchData = async () => {
      try {
          const response = await fetch("http://localhost:9292/subsidiaries")
          const data = await response.json()
          setSubsidiaries(data)
          setIsLoading(false)
      } catch(error) {
          alert(error)
      }
  }

  useEffect(() => {
    fetchData()
  }, [])

    if(isLoading){
        <h1>Loading...</h1>
    }  
  
    return (
    <>
        <h2>Subsidiaries</h2>
        <SubsidiariesList subsidiaries={subsidiaries} handleDelete={handleDelete} />
    </>
  )
}

export default SubsidiariesContainer