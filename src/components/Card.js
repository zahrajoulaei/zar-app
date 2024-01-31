function Card({path, title}) {
return(  
    <div className="col mb-5">
        <div class="card" style={{width: "18rem"}}>
            <img src={path} class="card-img-top" alt={title}/>
        </div>
    </div>
    )



}
export default Card;


