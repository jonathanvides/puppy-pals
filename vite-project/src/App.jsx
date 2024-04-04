import './App.css'
import { useState } from 'react'
import { puppyList } from './data.js'

function App() {
    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);
    console.log("puppyList: ", puppyList);

    const featuredPup = puppies.find((pup)=> pup.id === featPupId);
    console.log(featuredPup);

    return (
        <>
            <div className="App">
                {puppies.map((puppy) => {
                    return (
                        <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
                            {puppy.name}
                        </p>
                    );
                })
                }

                { featPupId && (
                    <div className='puppyDetails'>
                        <h2 className='puppyNames'>{featuredPup.name}</h2> 
                        <ul className='puppyList'>
                            <li className='puppyAge'>Age: {featuredPup.age}</li>
                            <li className='puppyEmail'>Email: {featuredPup.email}</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}


export default App
