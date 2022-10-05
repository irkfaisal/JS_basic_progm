
function MinMax(a, b,c) {
    let max = (a >= b && a >= c) ? a : (b >= a && b > c) ? b : c;
    let min = (c <= a && c <= b) ? c : (b <= a && b <= c) ? b : a;
    console.log(min, max);
}
MinMax(246,410,515);