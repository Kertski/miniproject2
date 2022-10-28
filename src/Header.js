import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: "blue",
        enabled: true,}
    }

    render() {
        return (
            <div className={"header " + this.props.className + " " + this.state.backgroundColor}>
                <ul className="d-inline-block">
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
