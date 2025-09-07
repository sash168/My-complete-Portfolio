    import React, { useRef } from 'react'
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { useGSAP } from '@gsap/react'

    gsap.registerPlugin(ScrollTrigger);

    const ShowCaseSection = () => {
        const sectionRef = useRef(null);
        const project1Ref = useRef(null);
        const project2Ref = useRef(null);
        const project3Ref = useRef(null);

        useGSAP(() => {
            const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
                projects.forEach((card, index) => {
                gsap.fromTo(card,
                    {
                        y:50, opacity:0
                    }, {
                        y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: {
                            trigger: card,
                            start:'top bottom-=100'
                        }
                    }
                )
            });

            gsap.fromTo(sectionRef.current, {
                opacity:0
            }, {
                opacity:1, duration:1.5
            })

        },[])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* left Side */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='/images/project6.png' alt='Ryde'/>
                        </div>
                        <div className='text-context'>
                            <h2 className='p-2'>Full Stack Grocery Delivery Web Application</h2>
                            <p className='text-white-50 md:text-xl'>
                                Built a scalable grocery delivery platform with MERN stack & Redux Toolkit, enabling seamless user registration, product browsing, cart management, and order tracking.
                            </p>
                        </div>
                    </div>
                    {/* Right side */}

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper '>
                                <img src='/images/project7.png' alt='library mgmt' />
                            </div>
                            <h2>AI SaaS Web Application – Full Stack</h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper'>
                                <img src='/images/project8.png' alt='YC Dir' />
                            </div>
                            <h2>Chat-bot using Speech Recognition - Python</h2>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
    }

    export default ShowCaseSection