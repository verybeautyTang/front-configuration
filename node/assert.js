// 模块提供了一组用于验证不变量的断言函数。
// 严格的类型断言模式
const assert = require('assert').strict;
// import { strict as assert } from 'assert';

assert.deepEqual([[1,2,3],4,5],[[1,2, '3'],4,5])