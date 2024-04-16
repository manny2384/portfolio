import './home.css';

function Home() {
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

            <div className="projectTemplate">
                <div> PROJECTS </div>
            </div>

            <div className="Education">
                <h2> EDUCATION & Certifications</h2>
                <ul>
                    <li> CompTIA A+ </li>
                    <li> 
                        <h3> CSU East Bay </h3>
                        <h4> Bachelor's of Science, Computer Science </h4>
                        <div>
                                <ul> Relevant Courses 
                                    <li> Web Development </li>
                                    <li> Database Architecture </li>
                                    <li> Data Structures & Algorithsm </li>
                                </ul>
                            </div>
                    </li>
                    <li>
                        <h3> Ygnacio Valley HS </h3>
                        <h4> Diploma </h4>
                    </li>
                </ul>
            </div>

            <div className="WorkExperience">
                <h2> WORK EXPERIENCE </h2>

                <div className="Job">
                    <div className="jobHeader"> 
                        <div>
                            <h3> Propark Mobility </h3>
                            <h4> Supervisor I </h4>
                        </div>
                    </div>

                    <ul className="duties flexCol">
                        <li> Cooperate with upper management and associates to execute day to day tasks </li>
                        <li> Deliver excellent customer service in a fast paced environment </li>
                        <li> Answer cx inquiries and set them up to use request system </li>
                    </ul>
                </div>

                <div className="Job">
                    <div className="jobHeader">
                        <div>
                            <h3> Geek Squad </h3>
                            <h4> Repair Agent </h4>
                        </div>
                    </div>

                    <ul className="duties flexCol">
                        <li> Troubleshoot/Install PC Hardware and Software
                             such as motherboards, cpu, ram and hard drives
                        </li>
                        <li> Perform Data Transfers from one pc to another </li>
                        <li> Use ticketing system to navigate queue of work orders </li>
                    </ul>
                </div>

            </div>

            <div className="Skills">
                <h2> SKILLS </h2>
                <ul>
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