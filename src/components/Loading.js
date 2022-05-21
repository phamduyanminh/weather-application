import React from 'react';

const Loading = (props) => {
    return(
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message}</div>
        </div>
    )
}

Loading.defaultProp = {
    message: 'Loading...'
}

export default Loading;