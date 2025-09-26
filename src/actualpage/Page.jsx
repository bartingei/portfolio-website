import React from 'react';
import Style from './Page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSun, faArrowRight, faDownload, faEnvelope, faCode,faPuzzlePiece,faPalette, faGamepad, faPlane, faAustralSign, faMoon, faArrowUpFromBracket, faArrowUpRightFromSquare, faGraduationCap, faCalendar, faStarOfLife, faWandMagicSparkles, faStarOfDavid, faStar, faUserGraduate, faLocation, faLocationArrow, faMapLocation, faLocationPinLock, faLocationPin, faCoffee, faInfinity, faHeart } from '@fortawesome/free-solid-svg-icons';
import profileImg from './../assets/blurry.jpg';
import { useState, useEffect } from 'react';

function Page(){

     const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setIsDarkMode(true);
            document.body.classList.add(Style.darkMode);
        } else {
            setIsDarkMode(false);
            document.body.classList.remove(Style.darkMode);
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.body.classList.add(Style.darkMode);
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove(Style.darkMode);
            localStorage.setItem('theme', 'light');
        }
    };
    
    return(
        
        <>
        <div className={Style.PageBody}>

            <div className={Style.navContainer}>
                <h2> <a href="#home">JP</a></h2>

                <div className={Style.nav}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className={Style.theme}>
                    <button 
                        onClick={toggleTheme}
                        className={Style.themeToggle}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        <div className={Style.themeIcon}>
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        </div>
                        
                    </button>
                </div>


            </div>

            <div className={Style.mainContent}>
                
                <div className={Style.intro} id="home">  
                    <div className={Style.imageContainer}>
                        <img src={profileImg} alt="Profile" />
                    </div> 

                    <h1> <span>Johnpaul</span> Kibet</h1>

                    <p>Frontend developer crafting intuitive, performant web experiences.<br></br> Merging UI/UX principles with modern tech—currently exploring Web3 to build decentralized interfaces that don't compromise on design.</p>
                    
                    <div className={Style.introButtons}>
                        <button className={Style.viewProjects}>
                            <a href="#projects">View Projects</a>                            
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>

                    <button className={Style.downloadResume}>
                        <FontAwesomeIcon icon={faDownload} />
                       <a href="https://drive.google.com/file/d/10nfOfj5XNuJOx477GCHDp2MDH6M5tQy6/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center">
                            Download PDF
                        </a>
                     </button>

                     <button href="#contact" className={Style.sayHello}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:johnpaulkibet3@gmail.com">
                                    
                            Say Hello 👋 
                        </a>
                     </button>
                    </div>
                </div>

            </div>

            <div className={Style.about} id='about'>
                <div className={Style.aboutContent}>
                    <h2>About <span>Me</span> </h2>
                    <p>Passionate about creating digital experiences that matter</p>
                </div>

            <div className={Style.focusInspiration}>
                    <div className={Style.focus}>
                    <h2>What i focus on</h2>

                    <div className={Style.focusItems}>

                        <div className={Style.focusItem}>
                             <h3> <FontAwesomeIcon className={Style.icon} icon={faCode} />Interactive UI Focus</h3>
                             <p>Crafting engaging, user-friendly interfaces that enhance interaction and usability.</p>  
                        
                        </div>
                        
                        <div className={Style.focusItem}>
                            
                            <h3> <FontAwesomeIcon className={Style.icon} icon={faPuzzlePiece} /> Performance Optimization</h3>
                            <p>Ensuring fast, responsive web applications through efficient coding and best practices.</p>
                        </div>

                        <div className={Style.focusItem}>
                            
                            <h3> <FontAwesomeIcon className={Style.icon} icon={faPalette} /> Design Advocate</h3>
                            <p>Champion of accessible, mobile-first design principles</p>
                        </div>

                    </div>
                </div>
                
                    <div className={Style.inspiration}>
                        <h2>What Inspires Me</h2>

                        <div className={Style.inspirationItems}>

                            <div className={Style.inspirationItem}>
                                
                                <h3> <FontAwesomeIcon className={Style.icon} icon={faGamepad} /> Game</h3>
                                <p>Inspires engaging UI patterns and interactive design solutions</p>
                            </div>

                            <div className={Style.inspirationItem}>
                                
                                <h3> <FontAwesomeIcon className={Style.icon} icon={faPlane} /> Travel</h3>
                                <p>Inspires global design perspectives and cultural diversity in UI/UX</p>
                            </div>

                            <div className={Style.inspirationItem}>
                                
                                <h3> <FontAwesomeIcon className={Style.icon} icon={faStar} /> Animation</h3>
                                <p>Experimenting with GSAP and Framer Motion for captivating user experiences</p>
                            </div>

                            <div className={Style.inspir }>
                                <div className={Style.coffee}>
                                    <p>"I turn coffee into clean code and ideas into interactive experiences ☕→💻"</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
            </div>


            </div>
            
            <div className={Style.technicalSkills} id='skills' >

                <div className={Style.skillsHead}>
                    <h2>Technical <span>Skills</span></h2>
                    <p>Constantly evolving toolkit for creating exceptional digital experiences</p>

                </div>

                <div className={Style.skillsContainer}>
                    <div className={Style.skill}>
                        <h3>Frontend</h3>

                        <div className={Style.element}>
                            <p>React.js</p>
                        </div>

                        <div className={Style.element}>
                            <p>JavaScript (ES6+)</p>
                        </div>

                        <div className={Style.element}>
                            <p>Tailwind CSS</p>
                        </div>

                        <div className={Style.element}>
                            <p>HTML5</p>
                        </div>

                        <div className={Style.element}>
                            <p>CSS3</p>
                        </div>
                        
                        <div className={Style.element}>
                            <p>Typescript</p>
                        </div>

                        <div className={Style.element}>
                            <p>Next.js</p>
                        </div>

                        <div className={Style.element}>
                            <p>Responsive Design</p>
                        </div>

                    </div>

                        <div className={Style.skill}>
                            <h3>Tools & Methods</h3>

                            <div className={Style.element}>
                                <p>Git/GitHub</p>
                            </div>

                            <div className={Style.element}>
                                <p>Figma (Wireframing)</p>
                            </div>

                            <div className={Style.element}>
                                <p>REST APIs</p>
                            </div>
                            <div className={Style.element}>
                                <p>Firebase (Basic)</p>
                            </div>
                            <div className={Style.element}>
                                <p>GSAP</p>
                            </div>
                            <div className={Style.element}>
                                <p>Framer Motion</p>
                            </div>
                            <div className={Style.element}>
                                <p>Vite</p>
                            </div>
                            
                        </div>    

                    <div className={Style.skill}>
                        <h3>Web3</h3>

                        <div className={Style.element}>
                            <p>Ethers.js</p>
                        </div>

                        <div className={Style.element}>
                            <p>MetaMask Integration</p>
                        </div>

                        <div className={Style.element}>
                            <p>Smart Contract Basics</p>
                        </div>

                        <div className={Style.element}>
                            <p>Decentralized UX</p>
                        </div>

                        <div className={Style.element}>
                            <p>Wallet Connect</p>
                        </div>

                        <div className={Style.element}>
                            <p>App Development</p>
                        </div>
                        
                    </div> 
                </div>

                <div className={Style.toInclude}>
                    <p>🔗Currently exploring: Decentralized Interface Standards</p>
                </div>
            </div>

                <div className={Style.featuredProjects} id='projects' >
                    <div className={Style.projectsHead}>
                        <h2>Featured <span>Projects</span></h2>
                        <p>Showcasing a blend of creativity, functionality and modern web technologies</p>
                    </div>

                    <div className={Style.projectsContainer}>

                        <div className={Style.project}>
                                
                                <div className={Style.projectHeader}>
                                </div>
                                
                            <div className={Style.siteDetails}>
                                <h2>Kladi</h2>
                                <p>E-commerce platform for a cloth vending website</p>
                                <div className={Style.perks}>
                                    <p>✨ Smooth cart animations & product gallery</p>
                                </div>
                                <div className={Style.stackUsed}>
                                    
                                    <div className={Style.stack}>
                                        React.js
                                    </div>

                                    <div className={Style.stack}>
                                        Framer motion
                                    </div>

                                    <div className={Style.stack}>
                                        Tailwind css
                                    </div>

                                </div>

                                <div className={Style.buttons}>
                                    <a href="https://kladi2-0.vercel.app/" target='_blank' rel='noreferrer'>
                                        <button className={Style.liveDemo}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} class={Style.btnIcon}></FontAwesomeIcon>
                                             Live Demo
                                        </button>
                                    </a>

                                    <button className={Style.code}>
                                        <FontAwesomeIcon icon={faCode} class={Style.btnIcon} ></FontAwesomeIcon>
                                        code
                                    </button>
                                </div>


                            </div>

                            
                        </div>

                        <div className={Style.project}>
                                
                                <div className={Style.projectHeader2}>
                                </div>
                                
                            <div className={Style.siteDetails}>
                                <h2>Safari Flavors</h2>
                                <p>Dynamic restaurant menu with scroll-triggered animations and immersive food presentation</p>
                                <div className={Style.perks}>
                                    <p>✨ Smooth cart animations & product gallery</p>
                                </div>
                                <div className={Style.stackUsed}>
                                    
                                    <div className={Style.stack}>
                                        React.js
                                    </div>

                                    <div className={Style.stack}>
                                        Framer motion
                                    </div>

                                    <div className={Style.stack}>
                                        Tailwind css
                                    </div>

                                </div>

                                <div className={Style.buttons}>
                                    
                                        <a href='https://safariflavors.vercel.app/' target='_blank' rel='noreferrer'>
                                        <button className={Style.liveDemo} >
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} class={Style.btnIcon}></FontAwesomeIcon>
                                                Live Demo       
                                        </button>
                                            
                                        </a>
                                         

                                    <button className={Style.code}>
                                        <FontAwesomeIcon icon={faCode} class={Style.btnIcon} ></FontAwesomeIcon>
                                        code
                                    </button>
                                </div>


                            </div>

                            
                        </div>

                        <div className={Style.project}>
                                
                                <div className={Style.projectHeader3}>
                                </div>
                                
                            <div className={Style.siteDetails}>
                                <h2>Haraka Fast</h2>
                                <p>Real-time inventory management system with live updates and modern dashboard</p>
                                <div className={Style.perks}>
                                    <p>✨ Smooth cart animations & product gallery</p>
                                </div>
                                <div className={Style.stackUsed}>
                                    
                                    <div className={Style.stack}>
                                        React.js
                                    </div>

                                    <div className={Style.stack}>
                                        Firebase
                                    </div>

                                </div>

                                <div className={Style.buttons}>
                                    <a href="https://harakafast.vercel.app/#">
                                        <button className={Style.liveDemo}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} class={Style.btnIcon}></FontAwesomeIcon>
                                             Live Demo
                                        </button>
                                    </a>
                                    

                                    <button className={Style.code}>
                                        <FontAwesomeIcon icon={faCode} class={Style.btnIcon} ></FontAwesomeIcon>
                                        code
                                    </button>
                                </div>


                            </div>

                            
                        </div>

                        <div className={Style.project}>
                                
                                <div className={Style.projectHeader4}>
                                </div>
                                
                            <div className={Style.siteDetails}>
                                <h2>Chase pal</h2>
                                <p>A juice vending and ordering website</p>
                                <div className={Style.perks}>
                                    <p>✨ better UI</p>
                                </div>
                                <div className={Style.stackUsed}>
                                    
                                    <div className={Style.stack}>
                                        React.js
                                    </div>

                                    <div className={Style.stack}>
                                        Tailwind css
                                    </div>

                                </div>

                                <div className={Style.buttons}>
                                    <a href="https://chasepal.vercel.app/">
                                        <button className={Style.liveDemo}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} class={Style.btnIcon}></FontAwesomeIcon>
                                             Live Demo
                                        </button>
                                    </a>

                                    <button className={Style.code}>
                                        <FontAwesomeIcon icon={faCode} class={Style.btnIcon} ></FontAwesomeIcon>
                                        code
                                    </button>
                                </div>


                            </div>

                            
                        </div>

                    </div>
                </div>
            
            

            <div className={Style.Education} id="education">
                <div className={Style.header}>
                    <h2>Education <span>&</span> Background</h2>
                    <p>Building a strong foundation in software engineering and design principles</p>
                </div>

                <div className={Style.EducationCard}>
                    <div className={Style.sectionA}>

                        <div className={Style.grad}>
                            <FontAwesomeIcon icon={faGraduationCap}/>
                        </div>
                        <div className={Style.cal}>
                            <p><FontAwesomeIcon icon={faCalendar}/>2023 - 2027</p>
                        </div>
                        <div className={Style.progress1}>
                           <p> In Progress</p>
                        </div>

                        
                    </div>

                    <div className={Style.sectionB}>
                        <h2>BSc Software Engineering</h2>
                        <h4><span>Multimedia University of Kenya</span></h4>

                        <h4>Key Areas: </h4>
                        <ul>
                            <li>Human-Computer Interaction</li>
                            <li>Web Development</li>
                            <li>Software Engineering Principles</li>
                            <li>UI/UX Design Fundamentals</li>
                        </ul>                        
                    </div>

                </div>


                <div className={Style.EducationCard}>
                    <div className={Style.sectionA}>

                        <div className={Style.grad}>
                            <FontAwesomeIcon icon={faUserGraduate}/>
                        </div>
                        <div className={Style.cal}>
                            <p><FontAwesomeIcon icon={faCalendar}/>2019 - 2022</p>
                        </div>
                        <div className={Style.progress2}>
                           <p> completed</p>
                        </div>

                        
                    </div>

                    <div className={Style.sectionB}>
                        <h2>KCSE (A−)</h2>
                        <h4><span>Maranda High School</span></h4>

                        <h4>Key Areas: </h4>
                        <ul>
                            <li>Strong foundation in Mathematics</li>
                            <li>Problem-solving methodologies</li>
                            <li>Computer Science fundamentals</li>
                        </ul>                        
                    </div>

                    
                </div>
                
                <div className={Style.sideNote}>
                        <p>📚 Continuous learner exploring: <span>Advanced React Patterns, Web3 Development, Design Systems</span></p>
                </div>

            </div>

            <div className={Style.Connect} id="contact">
                    <div className={Style.connectBody}>
                        <div className={Style.header}>
                        <h2> Let's <span>Connect</span></h2>
                        <p>Ready to bring your ideas to life? Let's build something amazing together.</p>
                    </div>

                    <div className={Style.sections}>
                        
                        <div className={Style.section1}>

                            <div className={Style.introd}>
                                <h2>Get In Touch</h2>
                                <p>Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Let's create something extraordinary together.</p>
                                <p><FontAwesomeIcon icon={faLocationPin}/> Based in Nairobi, Kenya 🇰🇪</p>
                            </div>

                            <div className={Style.ConnectButtons}>

                                <button type="button" className={Style.contactBtns}>
                                    <a href="mailto:johnpaulkibet3@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        Email
                                    </a>
                                </button>

                                <button type="button" className={Style.contactBtns}>
                                    <a href="https://www.instagram.com/toxic.toks/"target="_blank">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                        Instagram    
                                    </a>
                                </button>

                                <button type='button' className={Style.contactBtns} >
                                    <a href="https://github.com/bartingei" target="_blank">
                                        <FontAwesomeIcon icon={faGithub}/>
                                        github
                                    </a>
                                </button>

                                <button type="button" className={Style.contactBtns} >
                                    <a href="https://linkedin.com/in/johnpaul-kibet" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                    Linkedin
                                    </a>
                                </button>

                            </div>

                            <div className={Style.resume}>
                                <h3>Resume</h3>
                                <p>Download my resume for detailed experience and skills</p>

                                <button type='button' className={Style.resumeBtn}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                    <a href="https://drive.google.com/file/d/10nfOfj5XNuJOx477GCHDp2MDH6M5tQy6/view?usp=sharing" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center">
                                        Download PDF</a>    
                                 </button>
                            </div>

                        </div>

                        <div className={Style.section2}>
                            <div className={Style.partA}>
                                <h1>🚀</h1>
                                <h2>Ready to Build?</h2>

                                <p>I'm always excited to work on new projects, especially those that push the boundaries of web development and user experience.</p>

                                <button className={Style.resumeBtn}>
                                    <FontAwesomeIcon icon={faEnvelope}/>  
                                <a href="mailto:johnpaulkibet3@gmail.com">
                                    
                                    Let's Build Something Cool  
                                </a></button>

                                <p><FontAwesomeIcon icon={faCoffee}/> Or let's just grab a coffee 😊</p>
                            </div>

                            <div className={Style.partB}>
                                
                                <div className={Style.item}>
                                    <span>3+</span>
                                    <p>Years Coding</p>
                                </div>

                                <div className={Style.item}>
                                    <span>10+</span>
                                    <p>Projects Built</p>
                                </div>

                                <div className={Style.item}>
                                    <span><FontAwesomeIcon icon={faInfinity}/></span>
                                    <p>Ideas Brewing</p>
                                </div>

                                <div className={Style.item}>
                                    <span>No. 1</span>
                                    <p>coffee Addict</p>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                    </div>

                    
            </div>

            <div className={Style.footer}>
                <div className={Style.f1}>
                    <p><span>JP</span> ... Frontend Developer</p>
                    <p>Crafting digital experiences from Nairobi, Kenya 🌍</p>
                    <hr />
                </div>
                <div className={Style.f2}>
                    <p>© 2025 Johnpaul Kibet</p>
                    <p>Made with {<FontAwesomeIcon className={Style.footerIconLove} icon={faHeart} />}
                        and {<FontAwesomeIcon className={Style.footerIconCode} icon={faCode}/>}
                        in React
                    </p>
                </div>
                <div className={Style.f3}>
                    <p><span>📝 Coming Soon:</span> "Why Web3 Needs Better UI Standards" - My thoughts on decentralized UX</p>
                </div>
            </div>


        </div>        
        </>
    );
}

export default Page;