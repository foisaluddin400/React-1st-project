



export default function Amount({clickBtn,remove,click}) {

    

    const {recipe_name,id,short_description,items,preparing_time,calories,Remove} = (click,clickBtn);

    




    


  return (
    <div>
        <div className="amount_section">
            <h2>Want to cook : {clickBtn.length}</h2>
            <div className="item_add">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className="in_card">
                {clickBtn.map((ii,index)=> 

                <div key={index} className="in_card_des">
                    
                        <li className="list_in_card">
                            <p>{ii.recipe_name}</p>
                            <p>{ii.preparing_time}</p>
                            <p>{ii.calories}</p>
                            <div className="remove">
                                <button onClick={()=>remove(clickBtn)}>Remove</button>
                            </div>
                        </li>
                    
                </div>
                
                )}
            </div>
            <div>
            <h2>Currently cooking : </h2>
            <div className="item_add">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className="in_card">
                {click.map((iii,index)=> 

                <div key={index} className="in_card_des">
                    
                        <li className="list_in_card">
                            <p>{iii.recipe_name}</p>
                            <p>{iii.preparing_time}</p>
                            <p>{iii.calories}</p>
                            <div className="remove">
                                <button >Remove</button>
                            </div>
                        </li>
                    
                </div>

                )}
            </div>
            <div className="total">
                <div className="total_time">
                    <p>Total Time = </p>
                    <p>Minutes</p>
                </div>
                <div className="total_time">
                    <p>Total Calories = </p>
                    <p>Minutes</p>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}
