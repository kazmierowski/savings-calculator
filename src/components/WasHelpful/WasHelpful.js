import React from 'react';
import './WasHelpful.scss';

const WasHelpful = (props) => {

    let {finished} = props;
    let thumbs;

    if(finished) {
        thumbs = <span className='Was-helpful-thumbs-thanks'>Thanks</span>;
    } else {
        thumbs =
            <span className='Was-helpful-thumbs'>
                <div className='Was-helpful-thumbs-up' onClick={(e) => props.onVote(e, true)}></div>
                <div className='Was-helpful-thumbs-down' onClick={(e) => props.onVote(e, false)}></div>
            </span>;
    }

    return (
        <div className={`Was-helpful ${props.additionalClass}`}>
            <span className='Was-helpful-link'>Was this helpful?</span>
            {thumbs}
        </div>
    );
};

export default WasHelpful;