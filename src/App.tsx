import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import filter from 'lodash/filter';

import Uploader from './components/Uploader';

const handleOnError = (err: any) => {
    console.log(err)
}

const handleOnRemoveFile = (data: any) => {
    console.log(data);
}

const removeDuplicate = (array: any) => {
    let check = new Set();
    return array.filter((obj: any) => !check.has(obj[0]) && check.add(obj[0]));
}

function App() {
    const [joined, setJoined] = useState([]);
    const [left, setLeft] = useState([]);

    function handleOnDrop(rawData: []) {
        let students: any[] = [];
        rawData.forEach((obj: { data: [] }) => {
            const arr = obj.data;
            students.push(arr);
        });

        const joinedStudentsRaw = filter(students, data => {
            const [name, status, timestamp] = data;
            return (status === 'Joined');
        });

        console.log(removeDuplicate(joinedStudentsRaw));
    }

    return (
        <div className="ui container">
            <div className="ui centered grid">
                <div className="row">
                    <div className="ten wide column">
                        <div className="ui text container" style={{ paddingTop: 45 }}>
                            <h1 className="ui header">
                                AttenCorder
                                <div className="sub header">
                                    Know who attended, how long they were in the class and more.
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="ten wide column">
                        <Uploader handleOnDrop={handleOnDrop} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
