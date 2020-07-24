import React from 'react'
import ScriptTag from 'react-script-tag'

export default ({ tweetData }) => {
    return (
        <div className="tweet">
            {tweetData}
            <ScriptTag async src="https://platform.twitter.com/widgets.js" charset="utf-8"></ScriptTag>
        </div>
    )
}