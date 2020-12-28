import React from 'react';
import './styles/footer.scss';

class Notification extends React.Component {
    render() {
        return (
            <>
                <div className="notifDiv">
                    <p>Message sent, thanks for contacting me!</p>
                </div>
            </>
        )
    }
}

export default Notification;