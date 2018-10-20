'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item.js');

var _item2 = _interopRequireDefault(_item);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Allows a user to create multiple tabs on a single page. */
var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _initialiseProps.call(_this);

        var tab = props.tabList[0].name;

        if (props.saveInHash) {
            if (window.location.hash !== '') {
                tab = window.location.hash.substring(1);
            }

            window.location.hash = tab;
        }

        _this.state = {
            // set the first tab as default
            currentTab: tab
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.saveInHash) {
                var newTab = window.location.hash && window.location.hash.substring(1) || '';
                if (newTab !== this.state.currentTab) {
                    // eslint-disable-next-line react/no-did-update-set-state
                    this.setState({ currentTab: newTab });
                    this.props.onTabSelect(newTab);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.tabList.length === 0) {
                return null;
            }

            var tabContent = '';
            var rows = this.props.tabList.map(function (item) {
                if (_this2.state.currentTab === item.name) {
                    tabContent = item.content;
                }

                return _react2.default.createElement(_item2.default, {
                    key: item.name,
                    name: item.name,
                    title: item.title,
                    badge: item.badge,
                    isActive: _this2.state.currentTab === item.name,
                    onSelectTab: _this2._onSelectTab
                });
            });

            if (this.props.orientation === 'vertical') {
                return _react2.default.createElement(
                    'div',
                    { className: _style2.default.vertical + ' row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-3' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav nav-tabs ' + _style2.default.tabs + ' ' + _style2.default.tabsLeft },
                            rows
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-9' },
                        tabContent
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { className: 'nav nav-tabs ' + _style2.default.tabs },
                    rows
                ),
                tabContent
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
    /** Array with the structure {name: ???, title: ???, content: ???} */
    tabList: _propTypes2.default.array,

    /** Save the current tab in the URL hash or not? */
    saveInHash: _propTypes2.default.bool,

    /** Tab orientation (vertical or horizontal) */
    orientation: _propTypes2.default.string,

    /** Callback for what to do when a tab is selected */
    onTabSelect: _propTypes2.default.func
};
Tabs.defaultProps = {
    tabList: [],
    saveInHash: false,
    orientation: 'horizontal',
    onTabSelect: function onTabSelect() {}
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this._onSelectTab = function (tab) {
        if (_this3.props.saveInHash) {
            window.location.hash = tab;
        }

        _this3.setState({
            currentTab: tab
        });

        _this3.props.onTabSelect(tab);
    };
};

exports.default = Tabs;