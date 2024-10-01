import React, { useEffect, useState } from 'react'
import './Card.css'
import Card_item from '../card_item/Card_item'
import Amount from '../amount/Amount'
export default function Card() {

    const [card,setCard]= useState([])

    const [clickBtn,setBtn]= useState([])

    const [click,setclick]= useState([])

    
    
    

   


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setCard(data))
    },[])



    const handaleBtn = btn =>{
        if(clickBtn.length < 5){

            const newBtn = [...clickBtn, btn]
            setBtn(newBtn)
        }
        else{
            alert("adf")
        }
    }

    const remove = add =>{
        const newadd = [...click, add]
        setclick(newadd)

       
    
    }



    

  return (


    <div>

        <div className="card-head">
            <h1>Card Recipe</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non, <br/> enim perferendis in suscipit dolorem.</p>
        </div>


        <div className="card-data">
            <div className="card_all_item">
                <div className="card_all_in">
                    <div className="card_map">
                        {card.map((cardd,index)=> <Card_item handaleBtn={handaleBtn} key={index} cardd={cardd}/>)}
                    </div>
                </div>
            </div>
            <div className="card_amount">
                <div className="card_amount_in">
                    <Amount  clickBtn={clickBtn} remove={remove} click={click}   />
                </div>
            </div>


        
        </div>



    </div>
  )
}
