let C = {};

// 获取鼠标在元素上的坐标
C.getOffset = function (ele) {
  let mouse = {
    x: 0,
    y: 0
  };
  ele.addEventListener('mousemove', function (e) {
    let {x, y} = C.eventWrapper(e);
    mouse.x = x;
    mouse.y = y;
  });
  return mouse;
}

// 坐标系转换
C.eventWrapper = function (ev) {
  let {pageX, pageY, target} = ev;
  let {left, top} = target.getBoundingClientRect();
  return {x: pageX - left, y: pageY - top};
}

// 角度转弧度
C.toRad = function (angle) {
  return angle * Math.PI / 180;
}

// 弧度转角度
C.toAngle = function (rad) {
  return rad * 180 / Math.PI;
}

