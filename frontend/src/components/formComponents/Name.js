import React from 'react';

const Name = () => {
    return ( 
        <div className="form-group">
            <label htmlFor="name">Name</label><br />
            <input type="text" className="form-control" id="name" name="name" required />
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please provide a valid Name
            </div>
        </div>
    );
}
 
export default Name;