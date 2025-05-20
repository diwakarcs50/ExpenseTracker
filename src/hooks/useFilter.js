import { useState } from "react"

export function useFilter(data,callback){
    const [query,setQuery] = useState("")

    const filteredData =  data.filter((el)=> {
        return callback(el).toLowerCase().includes(query.toLowerCase())
    })

    return [filteredData,setQuery]
}