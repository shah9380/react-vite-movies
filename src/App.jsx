import { useState, useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/HomeSlice'


import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/pageNotFound/PageNotFound'

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
