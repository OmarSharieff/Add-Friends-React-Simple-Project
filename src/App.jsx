import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const data = [
    {name: "Jimmy", profession: "Architect", image:"https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false},
    {name: "Zofia", profession: "Doctor", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false},
    {name: "Suleman", profession: "Journalist", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false},
    {name: "Zack", profession: "Influencer", image: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false}
  ]

  const[realdata,setRealdata] = useState(data);
  const handleFriendsButton = (cardIndex)=>{
    setRealdata((previous)=>{
      return previous.map((item,index)=>{
        if (index === cardIndex) {
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-300 gap-5'>
      {realdata.map((item,index)=> (
        <Cards key={index} index={index} handleClick={handleFriendsButton} values={item}/>
      ))}
    </div>
  )
}
export default App
