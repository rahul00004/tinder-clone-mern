import React,{useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards() {
    const [people,setPeople]=useState([
        {
            name:"Rashford",
            url:"https://i2-prod.liverpoolecho.co.uk/incoming/article19241323.ece/ALTERNATES/s615/0_JS222568361.jpg",
        },
        {
            name:"Bruno Fernandes",
            url:"https://gmsrp.cachefly.net/images/20/07/10/dba5bf9a7e72a27c745db514fe1ca99d/690.jpg",
        },
    ])
    const swiped = (direction,nameToDelete)=>{
        console.log('removing' + nameToDelete);

    }
    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    }


    return (
        <div className="TinderCards">
            <div className="tinderCards_cardcontainer">
                {people.map((person)=>(
                   <TinderCard  className="swipe"
                   key={person.name}
                   preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)} 
                    onCardLeftScreen={()=>outOfFrame(person.name)} 
                    >
                        <div
                                style={{
                                    backgroundImage:`url(${person.url})`
                                    
                                }}  className="card" >
                                     
                                <h3>{person.name}</h3>

                        </div>

                   </TinderCard>
                ))}
          </div>      
            
        </div>
    )
}

export default TinderCards
