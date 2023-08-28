function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var styles = {"test":"_3ybTi","primary":"_3ljpl","normal":"_3Um6g","outline":"_KvQGE","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l","secondary":"_2Lfm6","success":"_2iiDh","warning":"_3vq3T","danger":"_2zOUo"};

var Button = function Button(props) {
  var buttonClasses = styles[props.color] + " " + styles[props.type];
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: buttonClasses
  }), props.text);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
