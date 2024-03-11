import { useMemo } from "react";

function Card({ path, title, createdAt, user }) {
    const timestamp = useMemo(() => {
        const date = `${new Date(createdAt?.seconds*1000)}`.split(" ")
        return `${date[1]} ${date[2]} ${date[3]}`
    }, [])
    return(
        <div className="col mb-5">
            <div className="card" style={{width: "18rem"}}>
                <div style={{
                    height: "220px", 
                    backgroundImage: `url(${path})`, 
                    backgroundSize: "cover", 
                    backgroundRepeat: "no-repeat"
                }}>

                </div>
                <h5 className="text-center mt-1">{title}</h5>
                <div className="d-flex justify-content-between p-2">
                    <p>{timestamp}</p>
                    <i>{`@${user}`}</i>
                </div>
            </div>
        </div>
    )
}
export default Card;