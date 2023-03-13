import React from 'react';

function ProjectItems({name, image}) {
    return (
        <div className='ProjectItems'>

            <img src={image} alt={name} />
            <h1>{name}</h1>

        </div>
    )
}
export default ProjectItems;