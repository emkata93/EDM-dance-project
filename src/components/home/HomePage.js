import './Home.scss';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <motion.section id="welcomePage"
        initial = {{ opacity: 0, y: 100 }}
        animate = {{  opacity: 1, y: 0 }}
        exit = {{ opacity: 0, y: -100}}
        transition = {{duration: 0.1}}
        
        >    
        <div id='intro'>
            <h1>Learn to dance with our best artist.</h1>
           <p>Dance Academy is an online dance training platform that allows anyone to learn from the best dancers and choreographers.
            <br />
        Each Dance Masterclass teaches a specific, in-demand topic to improve your dance skills.
        <br />
        These world-renowned masters share their vital knowledge and personal experience in each lesson, along with helpful exercises and practical advice.
        <br />
        The structure and content of the masterclasses are developed together with the masters, professional dance experts and sports physicians to achieve healthy and efficient learning for all skill levels.</p>
        </div>
            <motion.div className="stage-cube-cont"
            initial = {{ opacity: 0  }}
            animate = {{  opacity: 1}}
            exit = {{ opacity: 0}}
            
            >
          <div className="cubespinner">
            <div className="face1">
              <p>Salsa</p>
            </div>
            <div className="face2">
            <p>Bachata</p>
            </div>
            <div className="face3">
            <p>Hip Hop</p>
            </div>
            <div className="face4">
            <p>Modern</p>
            </div>
            <div className="face5">
            <p>Swing</p>
            </div>
            <div className="face6">
            <p>Folk</p>
            </div>
          </div>
        </motion.div>    
        </motion.section>
        
    );
}