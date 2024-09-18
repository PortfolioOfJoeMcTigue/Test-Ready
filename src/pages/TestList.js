import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TestList.css';

export const TestList = () => {
    
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const url = '/exam/list/allInfo'; 
        axios.get(url)
        .then(response => {setData(response.data)})
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1 align="center"><b>Certification Information and Practice Tests<br />'Get Ready, Cert' Currently Offers</b></h1>
            <table border="solid" align="center"  className="TestList">
                <thead>
                    <tr bgcolor="green">
                        <th align="center">&nbsp;&nbsp;Category&nbsp;&nbsp;</th>
                        <th align="center">&nbsp;&nbsp;Sub-Category&nbsp;&nbsp;</th>
                        <th align="center">&nbsp;&nbsp;Certification Information Links&nbsp;&nbsp;</th>
                        <th align="center">&nbsp;&nbsp;Certification Cost&nbsp;&nbsp;</th>
                        <th align="center">&nbsp;&nbsp;Percent to Pass&nbsp;&nbsp;</th>
                        <th align="center">&nbsp;&nbsp;Practice Test Availability&nbsp;&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((test) => (
                        <tr bgcolor={test.BGColor}>
                            <td align="center">&nbsp;&nbsp;{test.Category}&nbsp;&nbsp;</td>
                            <td align="center">&nbsp;&nbsp;{test.SubCategory}&nbsp;&nbsp;</td>
                            <td align="center">&nbsp;&nbsp;<a href={test.InfoAddress}>{test.ExamName}</a>&nbsp;&nbsp;</td>
                            <td align="right">&nbsp;&nbsp;US ${test.ExamCost}.00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td align="center">&nbsp;&nbsp;{test.PassPercentage}%&nbsp;&nbsp;</td>
                            <td align="center">&nbsp;&nbsp;{test.GoToPage}&nbsp;&nbsp;</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            {/* <div align="center" class="btnDiv">
                <Link to={'/'}>
                    <button style={{fontSize: '1rem'}} class='homeBtn' onClick="http://localhost:3000/Home">Back to Home Page</button>
                </Link>
            </div> */}
        </div>
    )
};