/**
 * Created by nguyenkhoa on 9/16/16.
 */
function factorial(n) {
    "use strict";
    var gt = 1;
    for (var i = 1; i <= n; i++) {
        gt = gt * i;
    }
    return gt;

}
console.log(factorial(6));