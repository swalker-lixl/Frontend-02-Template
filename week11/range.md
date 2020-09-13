# Range


## 基本使用

* new Range
* document.createRange()
* range.setStart(element, offset)
* range.setEnd(element, offset)
* range.setStartBefore()
* range.setStartAfter()
* range.setEndBefore()
* range.setEndAfter()
* range.selectNode()
* range.selectNodeContents()
* range.extractContents()
* range.insertNode()

```
<body>
<div id="box">hello<span>kobe</span>world</div>

<script>
    let element = document.getElementById('box');
    let range = new Range();
    range.setStart(element.childNodes[0], 0);
    range.setEnd(element.childNodes[2], 0);
    range.extractContents();
</script>
</body>
```
执行range.extractContents();以后，页面dom如下：

![image](http://note.youdao.com/yws/res/7998/5B3413DB8BF94D0A8A50951C74DC2A14)

同时range.extractContents();的返回值如下：

![image](http://note.youdao.com/yws/res/8001/AF4127544A96410C90592B00CD6A8536)



## 案例1: 把一个元素的子元素逆序

```
<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

方法1:
```
let element = document.getElementById('list');
function reverseChildren (element) {
    let arr = Array.from(element.children);
    for (let item of arr) {
        element.removeChild(item);
    }
    arr.reverse();
    for (let item of arr) {
        element.appendChild(item);
    }
}
reverseChildren(element);
```

方法2:
```
let element = document.getElementById('list');
function reverseChildren (element) {
    let length = element.children.length;
    for (let i = length - 1; i >= 0; i--) {
        element.appendChild(element.children[i]);
    }
}
reverseChildren(element);
```
方法3:
```
 let element = document.getElementById('list');
function reverseChildren (element) {
    let range = new Range();
    range.selectNodeContents(element);
    let fragment = range.extractContents();
    let length = fragment.childNodes.length;
    for (let i = length - 1; i >= 0; i--) {
        fragment.appendChild(fragment.childNodes[i]);
    }
    element.appendChild(fragment);
}
reverseChildren(element);
```

总结：我们前两种方法进行dom操作，会造成重排，而第三种方式的优点就是对fragment进行dom操作，不会造成重排，所以性能更好。


## 案例2: 拖拽效果

我们想要实现的效果如下：
![image](http://note.youdao.com/yws/res/8011/1041491A21A54AC0B3244F7414389C48)

即鼠标拖动绿块，可以插入到文本当中。

思路：核心思想就是在每个字符之间都创建一个range对象，然后拖动绿块，通过判断绿块当前的位置，与range的位置做比较，然后插入到最近的range里即可。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #draggable {
            width: 100px;
            height: 100px;
            background: green;
            display: inline-block;
        }

        span {
            color: green;
        }
    </style>
</head>
<body>
<div id="container">
    文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本
</div>
<div id="draggable"></div>

<script>
    //拖动绿块
    let draggable = document.getElementById('draggable');
    let baseX = 0;
    let baseY = 0;
    let ranges = [];
    draggable.addEventListener('mousedown', function (event) {
        let startX = event.clientX;
        let startY = event.clientY;
        let up = (event) => {
            baseX = baseX + event.clientX - startX;
            baseY = baseY + event.clientY - startY;
            document.removeEventListener('mousemove', move);
            document.removeEventListener('up', up);
        };
        let move = (event) => {
            let range = getNearestRange(event.clientX, event.clientY);
            range.insertNode(draggable);
            //draggable.style.transform = `translate(${baseX + event.clientX - startX}px, ${baseY + event.clientY - startY}px)`
        };

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', up);
    });

    //在每个文字之间创建range
    let container = document.getElementById('container');
    for (let i = 0; i < container.childNodes[0].textContent.length; i++) {
        let range = new Range();
        range.setStart(container.childNodes[0], i);
        range.setEnd(container.childNodes[0], i);
        ranges.push(range);
    }
    //获取最近的range
    function getNearestRange (x, y) {
        let min = Infinity;
        let nearestRange = null;
        for (let range of ranges) {
            let rect = range.getBoundingClientRect();
            let distance = (rect.x - x) ** 2 + (rect.y - y) ** 2;
            if (distance < min) {
                min = distance;
                nearestRange = range;
            }
        }
        return nearestRange;
    }
    document.addEventListener('selectstart', event => event.preventDefault());
</script>
</body>
</html>

```
