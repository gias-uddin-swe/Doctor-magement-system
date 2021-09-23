import React from 'react';
import './Blogs.css';
import blog1 from '../../../images/blogs/medication.jpg';
import blog2 from "../../../images/blogs/book.jpg";


const Blogs = () => {

const fakeData=[
    {
    image:blog1,
    title:"REVIEWS & OPINION",
    description:"A physician is a practitioner who practices medicine and seeks to maintain and restore human health through the study, diagnosis, and treatment of the patient's illness or injury.",
    BlogDate:'27 March 2017',
    link:"https://www.google.com/",
    },
    {
    image:blog1,
    title:"REVIEWS & OPINION",
    description:"A physician is a practitioner who practices medicine and seeks to maintain and restore human health through the study, diagnosis, and treatment of the patient's illness or injury.",
    BlogDate:'27 March 2017',
    link:"https://www.google.com/",
    },
    {
    image:blog2,
    title:"REVIEWS & OPINION",
    description:"A physician is a practitioner who practices medicine and seeks to maintain and restore human health through the study, diagnosis, and treatment of the patient's illness or injury.",
    BlogDate:'27 March 2017',
    link:"https://www.google.com/",
    },
    
]

    return (
        <div className="container mt-5">
            <h1>From Our Blog</h1>
            <div className="row  blog-container">
                {
                    fakeData.map(pd=> <div className="col-md-4 blogs">
                    <div className="blog">
                        <div className="blog-image">
                        <img src={pd.image} alt="" />
                        <p className=""><a href={pd.link}>go to blog website</a></p>
                        </div>
                            <h3 className="mt-2">{pd.title}</h3>
                            <p className="mt-2">{pd.description}</p>
                            <div className="blog-date row mt-4">
                                <div className="col-md-3">
                                    gias ,gias
                                </div>
                                <div className="col-md-9 text-end">
                                    {pd.BlogDate}
                                </div>

                            </div>
                    </div>
                </div>
                       
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;