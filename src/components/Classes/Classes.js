import React,{ useState, useEffect } from 'react';
import ClassCard from '../ClassCard/ClassCard';
import classes from '../../fakeData/classes';

const Classes = () => {
    const [classList, setClassList] = useState([]);
    const [details, setDetails] = useState(null);

    const showDetails = id => {
        setDetails(classList.find(cls => cls.id === id));
        console.log(id);
    }

    useEffect(() => {
        setClassList(classes);
    }, [])

    return (
        <div>
            <h1>Classes</h1>
            { 
                !details && classList.map(cls => <ClassCard
                        showDetails = {() => showDetails(cls.id)}
                        name={cls.name} 
                        bgImg={cls.bgImg}
                    />)
            }
        </div>
    );
};

export default Classes;