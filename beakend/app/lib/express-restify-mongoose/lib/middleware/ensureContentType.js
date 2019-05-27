'use strict';

module.exports = function (options) {
  var errorHandler = require('../errorHandler')(options);

  return function ensureContentType(req, res, next) {
    next();
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2Vuc3VyZUNvbnRlbnRUeXBlLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwiZXJyb3JIYW5kbGVyIiwicmVxdWlyZSIsImVuc3VyZUNvbnRlbnRUeXBlIiwicmVxIiwicmVzIiwibmV4dCIsImN0IiwiaGVhZGVycyIsIkVycm9yIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2xDLE1BQU1DLGVBQWVDLFFBQVEsaUJBQVIsRUFBMkJGLE9BQTNCLENBQXJCOztBQUVBLFNBQU8sU0FBU0csaUJBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQ0MsSUFBdEMsRUFBNEM7QUFDakQsUUFBTUMsS0FBS0gsSUFBSUksT0FBSixDQUFZLGNBQVosQ0FBWDs7QUFFQSxRQUFJLENBQUNELEVBQUwsRUFBUztBQUNQLGFBQU9OLGFBQWFHLEdBQWIsRUFBa0JDLEdBQWxCLEVBQXVCQyxJQUF2QixFQUE2QixJQUFJRyxLQUFKLENBQVUsc0JBQVYsQ0FBN0IsQ0FBUDtBQUNEOztBQUVELFFBQUlGLEdBQUdHLE9BQUgsQ0FBVyxrQkFBWCxNQUFtQyxDQUFDLENBQXhDLEVBQTJDO0FBQ3pDLGFBQU9ULGFBQWFHLEdBQWIsRUFBa0JDLEdBQWxCLEVBQXVCQyxJQUF2QixFQUE2QixJQUFJRyxLQUFKLENBQVUsc0JBQVYsQ0FBN0IsQ0FBUDtBQUNEOztBQUVESDtBQUNELEdBWkQ7QUFhRCxDQWhCRCIsImZpbGUiOiJlbnN1cmVDb250ZW50VHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICBjb25zdCBlcnJvckhhbmRsZXIgPSByZXF1aXJlKCcuLi9lcnJvckhhbmRsZXInKShvcHRpb25zKVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gZW5zdXJlQ29udGVudFR5cGUgKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCBjdCA9IHJlcS5oZWFkZXJzWydjb250ZW50LXR5cGUnXVxyXG5cclxuICAgIGlmICghY3QpIHtcclxuICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcihyZXEsIHJlcywgbmV4dCkobmV3IEVycm9yKCdtaXNzaW5nX2NvbnRlbnRfdHlwZScpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdC5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBlcnJvckhhbmRsZXIocmVxLCByZXMsIG5leHQpKG5ldyBFcnJvcignaW52YWxpZF9jb250ZW50X3R5cGUnKSlcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KClcclxuICB9XHJcbn1cclxuIl19
//# sourceMappingURL=ensureContentType.js.map