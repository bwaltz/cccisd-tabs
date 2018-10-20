'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Item);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this._clicked = function (e) {
            e.preventDefault();
            _this.props.onSelectTab(_this.props.name);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var className = this.props.isActive ? 'active' : '';
            var badge = this.props.badge === '' ? null : _react2.default.createElement(
                'span',
                { className: 'badge' },
                this.props.badge
            );

            return _react2.default.createElement(
                'li',
                { role: 'presentation', className: className, onClick: this._clicked },
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    this.props.title,
                    ' ',
                    badge
                )
            );
        }
    }]);

    return Item;
}(_react2.default.Component);

Item.propTypes = {
    name: _propTypes2.default.string,
    title: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    badge: _propTypes2.default.node,
    isActive: _propTypes2.default.bool,
    onSelectTab: _propTypes2.default.func
};
Item.defaultProps = {
    name: '',
    title: '',
    badge: '',
    isActive: false,
    onSelectTab: function onSelectTab() {}
};
exports.default = Item;