import React,{ useState, useEffect } from 'react';
import ClassCard from '../ClassCard/ClassCard';
import classes from '../../fakeData/classes';
import ClassDetails from '../ClassDetails/ClassDetails';

const Classes = () => {
    const [classList, setClassList] = useState([]);
    const [details, setDetails] = useState(null);

    const showDetails = id => {
        setDetails(classList.find(cls => cls.id === id));
    }

    useEffect(() => {
        setClassList(classes);
    }, [])

    return (
        <div className='w-100'>
            <div className='m-5 d-flex justify-content-around flex-wrap'>
            { 
                !details && classList.map(cls => <ClassCard
                        showDetails = {() => showDetails(cls.id)}
                        name={cls.name} 
                        bgImg={cls.bgImg}
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