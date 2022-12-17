import { CatalogItem } from "./catalogItem/CatalogItem";
export const Catalog = ({
    lessons,
}) => {

    return (
        <section id="catalogPage">
            <h1>All Lessons</h1>
            {lessons.map(les => <CatalogItem key={les._id} lesson={les} />)}
        </section>
    )
}