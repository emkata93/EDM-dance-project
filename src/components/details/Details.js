import { useParams } from "react-router-dom";

export const Details = ({
    lessons,
}) => {
    const { lessonId } = useParams();
    console.log(lessons)
    const lesson = lessons.find(l => l._id == lessonId);

    return (
        <section id="detailsPage">
            <div className="wrapper">
                <div className="albumCover">
                    <img src={lesson.img} />
                </div>
                <div className="albumInfo">
                    <div className="albumText">
                        <h1>{lesson.name}</h1>
                        <h3>{lesson.teacher}</h3>
                        <h4>{lesson.expirience}</h4>
                        <h4>{lesson.price}</h4>
                        <h4>{lesson.time}</h4>
                        <p>
                            {lesson.summary}
                        </p>
                    </div>
                    {/* Only for registered user and creator of the album*/}
                    <div className="actionBtn">
                        <a href="#" className="video">
                            Video
                        </a>
                        <a href="#" className="rate">
                            Rate
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}