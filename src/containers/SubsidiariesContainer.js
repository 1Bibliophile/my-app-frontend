import {useState, useEffect} from 'react'
import SubsidiariesList from '../components/SubsidiariesList'

const SubsidiariesContainer = () => {
  const [subsidiaries, setSubsidiaries] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("")
            const data = await response.json()
            setSubsidiaries(data)
            setIsLoading(false)
        } catch(error) {
            alert(error)
        }
    }

    fetchData()
  }, [])

    if(isLoading){
        <h1>Loading...</h1>
    }  
  
    return (
    <>
        <h2>Subsidiaries</h2>
        <SubsidiariesList subsidiaries={subsidiaries} />
    </>
  )
}

export default SubsidiariesContainer