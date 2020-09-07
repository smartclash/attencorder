import React, { useEffect } from 'react';
import { CSVReader } from 'react-papaparse';

const Uploader = (props: any) => {
    return (
        <div className="ui placeholder segment">
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                Attendence excel sheet
            </div>
            <CSVReader
                onDrop={props.handleOnDrop}
                noDrag
                addRemoveButton
            >
                <button className="ui primary button">Add Document</button>
            </CSVReader>
        </div>
    );
};

export default Uploader;
