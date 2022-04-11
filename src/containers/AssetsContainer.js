import { useState, useEffect } from "react"
import AssetsList from "../components/AssetsList"

const AssetsContainer = () => {
    const [assets, setAssets] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:9292/assets")
            const data = await response.json()
            setAssets(data)
            //setIsLoading(false)
        } catch(error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2>Assets</h2>
            <AssetsList assets={assets} />
        </>
    )
}

export default AssetsContainer;