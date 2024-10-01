
import { IoMdTime } from "react-icons/io";
import { IoWater } from "react-icons/io5";

export default function Card_item({cardd,handaleBtn}) {

    const {id,recipe_image,recipe_name,short_description,items,preparing_time,calories} = cardd;
  return (

    <div>

        <div className="main_card">
            <div className="card_section">
                <img src={recipe_image} alt="" />
                <h2>{recipe_name}</h2>
                <p>{short_description}</p><hr />
                <div>
                    <h2>Ingedient : {items.length}</h2>
                    {

                        items.map((itemCard,index)=>

                        <div key={index} className="cardList">
                            <li>{itemCard}</li>
                        </div>)

                    }
                </div>
                <p><IoMdTime /> {preparing_time} <span><IoWater /> calories {calories}</span></p>
                <div className="card_btn">
                    <button onClick={()=>handaleBtn(cardd)}>want to Cook</button>
                
                </div>
            </div>


        </div>
    
    
    </div>
  )
}
