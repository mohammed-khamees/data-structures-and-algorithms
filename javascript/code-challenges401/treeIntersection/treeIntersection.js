"use strict";

function treeIntersection(tr1, tr2) {
  return tr1.preOrder().filter((val) => tr2.preOrder().includes(val));
}

module.exports = treeIntersection;
