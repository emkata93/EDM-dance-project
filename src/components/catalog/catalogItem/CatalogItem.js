import { Link } from 'react-router-dom';

export const CatalogItem = ({
    lesson,
}) => {
    return (
        <div className="card-box">
            <img src={lesson.img} />
            <div>
                <div className="text-center" >
                    <p className="name">{lesson.name}</p>
                    <p className="teacher">{lesson.teacher}</p>
                    <p className="exp">{lesson.experience}</p>
                    <p className="price">{lesson.price}</p>
                    <p className="time">{lesson.time} </p>
                </div>
                <div className="btn-group">
                    <Link to={`/catalog/${lesson._id}`} id="details">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}