import React from 'react';
import './loader.scss';

const Loader = () => {
    const styleLoader = {
        width: '100 %',
        height: '100 %'
    }
    return (
        <div>
            <div style={styleLoader} className="lds-double-ring">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;