import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
    removeDuplicateEntries,
    cleanStudentsArray,
    extractJoinedStudents
} from './utils/processor';
import Uploader from './components/Uploader';

function App() {
    const [joined, setJoined] = useState([]);
    const [left, setLeft] = useState([]);
    const [norm, setNorm] = useState(false);

    function handleOnDrop(rawData: []) {
        const students = cleanStudentsArray(rawData);
        const joinedStudentsRaw = extractJoinedStudents(students);
        const joinedStudents = removeDuplicateEntries(joinedStudentsRaw);
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
