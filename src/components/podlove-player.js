import React from 'react'
import ScriptTag from 'react-script-tag'

const PodlovePlayer = (props) => (
    <div className="pod-player">
        <div>
            <ScriptTag id={props.id} src={props.src} defer />
        </div>
    </div >
)

export default PodlovePlayer