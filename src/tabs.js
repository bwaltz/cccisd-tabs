import PropTypes from 'prop-types';
import React from 'react';
import TabItem from './item.js';
import style from './style.css';

/** Allows a user to create multiple tabs on a single page. */
export default class Tabs extends React.Component {
    static propTypes = {
        /** Array with the structure {name: ???, title: ???, content: ???} */
        tabList: PropTypes.array,

        /** Save the current tab in the URL hash or not? */
        saveInHash: PropTypes.bool,

        /** Tab orientation (vertical or horizontal) */
        orientation: PropTypes.string,

        /** Callback for what to do when a tab is selected */
        onTabSelect: PropTypes.func,
    };

    static defaultProps = {
        tabList: [],
        saveInHash: false,
        orientation: 'horizontal',
        onTabSelect: () => {},
    };

    constructor(props) {
        super(props);
        var tab = props.tabList[0].name;

        if (props.saveInHash) {
            if (window.location.hash !== '') {
                tab = window.location.hash.substring(1);
            }

            window.location.hash = tab;
        }

        this.state = {
            // set the first tab as default
            currentTab: tab,
        };
    }

    componentDidUpdate() {
        if (this.props.saveInHash) {
            const newTab = (window.location.hash && window.location.hash.substring(1)) || '';
            if (newTab !== this.state.currentTab) {
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({ currentTab: newTab });
                this.props.onTabSelect(newTab);
            }
        }
    }

    _onSelectTab = tab => {
        if (this.props.saveInHash) {
            window.location.hash = tab;
        }

        this.setState({
            currentTab: tab,
        });

        this.props.onTabSelect(tab);
    };

    render() {
        if (this.props.tabList.length === 0) {
            return null;
        }

        let tabContent = '';
        const rows = this.props.tabList.map(item => {
            if (this.state.currentTab === item.name) {
                tabContent = item.content;
            }

            return (
                <TabItem
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    badge={item.badge}
                    isActive={this.state.currentTab === item.name}
                    onSelectTab={this._onSelectTab}
                />
            );
        });

        if (this.props.orientation === 'vertical') {
            return (
                <div className={style.vertical + ' row'}>
                    <div className="col-xs-3">
                        <ul className={'nav nav-tabs ' + style.tabs + ' ' + style.tabsLeft}>
                            {rows}
                        </ul>
                    </div>
                    <div className="col-xs-9">{tabContent}</div>
                </div>
            );
        }

        return (
            <div>
                <ul className={'nav nav-tabs ' + style.tabs}>{rows}</ul>
                {tabContent}
            </div>
        );
    }
}
