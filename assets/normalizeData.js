var e = {
    "id": 28,
    "data": "A\r\n1 3 2 \r\n3 2 1 \r\n2 1 3 \r\nT\r\n  7   0   5\r\n  0   0   0\r\n  2   4   0\r\nS\r\n+ 0 +\r\n0 0 0\r\n1 + 0\r\nV\r\n0 1\r\n1 0\r\n1 0\r\nH\r\n0 1\r\n1 1\r\n0 1\r\n\r\n",
    "size": 3,
    "level": "easiest",
    "operations": "a",
    "no": 28,
    "guest": false,
    "daily": false,
    "state": null,
    "u_level": "B"
};

function normalizeData() {
    var str = e.data;
    var newline = '\r\n';
    var arr = str.split(newline);
    var arrLength = arr.length - 2; // without /r/n/r/n
    var keys = ['A', 'T', 'S', 'V', 'H'];
    var keysLength = keys.length;
    var obj = {};
    var arrOfArr;
    var item;
    var key;

    for (var i = 0; i < arrLength; i++) {
        item = arr[i].replace(/ /g, '');

        if (keys.indexOf(item) !== -1) {
            key = item;
            continue;
        }

        arrOfArr = obj[key];

        if (!arrOfArr) {
            arrOfArr = [];
            obj[key] = arrOfArr;
        }

        arrOfArr.push(item.split(''));
    }

    return obj;
}


console.log(normalizeData());