import PropTypes from 'prop-types';
import React from 'react';

export default class Item extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        badge: PropTypes.node,
        isActive: PropTypes.bool,
        onSelectTab: PropTypes.func,
    };

    static defaultProps = {
        name: '',
        title: '',
        badge: '',
        isActive: false,
        onSelectTab() {},
    };

    _clicked = e => {
        e.preventDefault();
        this.props.onSelectTab(this.props.name);
    };

    render() {
        var className = this.props.isActive ? 'active' : '';
        var badge =
            this.props.badge === '' ? null : <span className="badge">{this.props.badge}</span>;

        return (
            <li role="presentation" className={className} onClick={this._clicked}>
                <a href="#">
                    {this.props.title} {badge}
                </a>
            </li>
        );
    }
}
