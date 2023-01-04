import { CatalogItem } from "./catalogItem/CatalogItem";
import './Catalog.scss';
import { motion } from 'framer-motion';

export const Catalog = ({
    lessons,
}) => {

    return (
        <motion.section id="catalogPage"
        initial = {{ opacity: 0, x: 100 }}
        animate = {{  opacity: 1, x: 0 }}
        exit = {{ opacity: 0, x: -100 }}
        transition = {{duration: 0.5}}>
            <h1>All Lessons</h1>
            <div className="card-holder">
            {lessons.map(les => <CatalogItem key={les._id} lesson={les} />)}
            </div>
        </motion.section>
    )
}