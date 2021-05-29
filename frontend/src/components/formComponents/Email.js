import React from 'react';

const Email = () => {
    return ( 
        <div className="form-group">
            <label htmlFor="email">Email</label><br />
            <input type="email" className="form-control" id="email" name="email" autoFocus required />
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please provide a valid Email
            </div>
        </div>
    );
}
 
export default Email;