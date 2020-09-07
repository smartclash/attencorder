import React from 'react';

const StudentSegment = (props: any) => {
    return (
        <div className="ui secondary segment">
            <p>{props.name[0]}</p>
        </div>
    )
}

const Joined = (props: any) => {
    return (
        <div className="ui segments">
            <div className="ui clearing segment">
                <h3 className="ui header">
                    Joined Students
                    <button className="ui right floated button primary">Download</button>
                </h3>
            </div>
            {props.students.map((student: any, index: number) => <StudentSegment name={student} key={index} />)}
        </div>
    );
}

export default Joined;
