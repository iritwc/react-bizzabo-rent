import React from 'react';

export const SaveFavoriteButton = (props)=> ((
  <a role="button"
     aria-label="Save"
     className="btn btn-primary btn-lg btn-block save-favorite"
     {...props}
  >
    <span aria-hidden="true" className="glyphicon glyphicon-star"/> Save
  </a>
));

export const RemoveFavoriteButton = (props)=> ((
  <a role="button"
     aria-label="Remove"
     className="btn btn-lg btn-block remove-favorite"
     {...props}
  >
    <span aria-hidden="true" className="glyphicon glyphicon-star"/> Remove
  </a>
));
