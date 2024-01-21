import { useState, useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/HomeSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  const {url} = useSelector((state)=> state.home);
  console.log(url);
  useEffect(()=>{
      apiTesting();
  },[])

  const apiTesting = ()=>{
    fetchDataFromApi("/movie/popular").then((res)=>{
        dispatch(getApiConfiguration(res))
    })
  }
  
  return (
    <div className="App">{url?.total_pages}</div>
  )
}

export default App
