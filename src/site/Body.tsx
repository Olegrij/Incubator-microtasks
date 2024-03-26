import React from 'react';

type BodyPropsTitle = {
    title: string
}
const Body = (props: BodyPropsTitle) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Body;