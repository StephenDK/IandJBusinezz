import React, {Component} from 'react';

import './contactUs.css';

class ContactUs extends Component {
    state = {
        name: 'Stephen'
    }
    render() {
        return(
            <div className='contactUs'>
                Contact Us {this.state.name}
            </div>
        )
    }
}

export default ContactUs;