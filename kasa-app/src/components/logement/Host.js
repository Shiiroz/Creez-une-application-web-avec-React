import React from 'react';

function Host() {
    return (
      <>
        <span className="nom-proprietaire"></span>
        <img
          className="photo-proprietaire"
          src={picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;