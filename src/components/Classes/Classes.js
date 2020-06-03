import React,{ useState, useEffect } from 'react';
import ClassCard from '../ClassCard/ClassCard';
// import classes from '../../fakeData/classes';
import ClassDetails from '../ClassDetails/ClassDetails';

const Classes = () => {
    const [classList, setClassList] = useState([]);
    const [details, setDetails] = useState(null);

    const showDetails = id => {
        setDetails(classList.find(cls => cls.id === id));
    }

    useEffect(() => {
        fetch('https://aqueous-depths-35890.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => {
            //  console.log('package data from db', data)
            setClassList(data);
        });
    }, [])

    return (
        <div className='w-100'>
            <div className='m-5 d-flex justify-content-around flex-wrap'>
            { 
                !details && classList.map(cls => <ClassCard
                        showDetails = {() => showDetails(cls.id)}
                        name={cls.name} 
                        bgImg={cls.bgImg}
                        key={cls._id}
                    />)
            }
            </div>
            {
                !!details && <ClassDetails 
                                details={details} 
                                hideDetails={() => setDetails(null)}
                            />
            }
        </div>
    );
};

export default Classes;