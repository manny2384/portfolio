import './home.css';
import Projects from './Projects';


function Home(props) {
    console.log(props);

    return(
        <div className="Home">
            <div className="Intro"> 
                Hello, my name is Emmanuel Gonzalez. I have some 
                knowledge in both front and back end web development.
                I'm familiar using react functional components, along
                with HTML & CSS. I also know some API integration using 
                EXPRESSjs. Lastly, I can write SQL scripts using MySQL
                WorkBench. Other sectors I'm familiar with are programming
                in C++, specifically when I'm creating algorithms to
                solve LeetCode problems, and basic machine learning concepts. 
                I've built some projects, like a minimax tic tac toe, and a
                classifier using octave. 
            </div>

            <div className="projectTemplate" onClick={()=>{props.setShow(<Projects />)}}>
                <div> PROJECTS </div>
            </div>

            <div className="Education">
                <h2 className='BorderTitle'> EDUCATION & Certifications</h2>
                <div>
                    
                    <div> 
                        <h3> CSU East Bay </h3>
                        <h5> Bachelor's of Science, Computer Science </h5>
                        
                        <ul className='ulStyle'>
                            <li> Web Development </li>
                            <li> Database Architecture </li>
                            <li> Data Structures & Algorithsm </li>
                        </ul>
                        
                    </div>
                    <div style={{'marginTop':'20px'}}>
                        <h3> Ygnacio Valley HS </h3>
                        <h4> Diploma </h4>
                    </div>
                </div>
            </div>

            <div className="WorkExperience">
                <h2 className='BorderTitle'> WORK EXPERIENCE </h2>

                <div className="Job">
                    
                    <div>
                        <h3> Propark Mobility </h3>
                        <h5> Supervisor I </h5>
                    </div>
                    

                    <ul className="ulStyle">
                        <li> Cooperate with upper management and associates to execute day to day tasks </li>
                        <li> Deliver excellent customer service in a fast paced environment </li>
                        <li> Answer client inquiries and set them up to use request system </li>
                    </ul>
                </div>

                <div className="Job">
                   
                    <div style={{'marginTop':'20px'}}>
                            <h3> Geek Squad </h3>
                            <h4> Repair Agent </h4>
                    </div>
              

                    <ul className="ulStyle">
                        <li> Troubleshoot/Install PC Hardware and Software
                             such as motherboards, cpu, ram and hard drives
                        </li>
                        <li> Perform Data Transfers from one pc to another </li>
                        <li> Use ticketing system to navigate queue of work orders </li>
                    </ul>
                </div>

            </div>

            <div className="Skills">
                <h2 className='BorderTitle'> SKILLS </h2>
                <ul className='ulStyle'>
                    <li> Customer Service </li>
                    <li> C++ Programming </li>
                    <li> HTML & CSS </li>
                    <li> REACTjs for front end </li>
                    <li> EXPRESSjs for APIs </li>
                    <li> SQL - MySQL WorkBench </li>
                </ul>
            </div>


        </div>
    );
};

export default Home;