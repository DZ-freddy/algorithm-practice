/**
 * Created by Administrator on 2019/4/30.
 */
//methods one
var a  = {
    i:1,
    toString: function(){
        return a.i++;
    }
}
console.log(a == 1 && a == 2 && a == 3);

//methods two
var val = 0;
Object.defineProperty(window, 'b', {
    get: function() {
        return ++val;
    }
});
console.log(b == 1 && b == 2 && b == 3);

//methods three
var c = [1,2,3];
c.join = c.shift;
console.log(c == 1 && c == 2 && c == 3);

//methods four
var d = new Proxy({ i: 0 }, {
        get: (target, name) => name === Symbol.toPrimitive ? () => ++target.i : target[name]
});
console.log(d == 1 && d == 2 && d == 3);

//methods five
var e = {[Symbol.toPrimitive]: ((i) => () => ++i) (0)};
console.log(e == 1 && e == 2 && e == 3);