import axios, { AxiosResponse } from "axios"
import { useState, useEffect } from "react"


type DataType = {
    time : {
        updated : string,
        updataISO : string,
        updataduk : string
    },
    disclaimer : string,
    bpi : {
        USD : {
            code : string,
            rate : string,
            dascription : string,
            rate_float : string
        },
        THB : {
            code : string,
            rate : string,
            dascription : string,
            rate_float : string
        }
    }
}

const Current = () => {
    const [data, setData] = useState<DataType | null>(null)
    const [loading, setloading] = useState(false)
    const [error, setError] =useState(false)

    const fetchApi = async () => {

    }


    useEffect(() => {
        axios.get<DataType>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
        .then((resp: AxiosResponse<DataType>) => {
            setData(resp.data)
            setloading(false)
        })
        .catch(err => {
            setloading(false)
            setError(true)
        })
    }, [])

    const render = () => {
        if (loading){
            return (
                <div className='text-center space-y-3'>
                <p className='text-2xl font-semibold'>Current price</p>
                <p className='text-2xl'>Loading ...</p>
              </div>
               )
        }
        else if (error){
            return(
                <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Current price</p>
        <p className='text-2xl'>There was some error !!</p>
      </div>
            )
        }
        else{
            return(
                <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Current price</p>
        <p className='text-2xl'>{data?.bpi.THB.rate_float.toLocaleString()} THB</p>
        <p> (Last updated {data?.time.updated}) </p>
      </div> 
            )
        }
    }
    

    return(
        <div>
            {render()}
        </div>
    )
}

export default Current