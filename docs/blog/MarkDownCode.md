# MarkDown代码
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`` ` ``），例如：    
`` `printf()` 函数 ``  
如果要在代码区段内插入反引号，你可以用多个反引号来开启和结束代码区段：  
``` ``There is a literal backtick (`) here.`` ```
## 代码区块
代码区块使用 4 个空格或者一个制表符（Tab 键）。

实例如下(代码前要加4个空格或者一个制表符)：  
`    $(document).ready(function () {`  
`        alert('MarkDowm');`  
`    });`  

显示结果如下(必须空一行)：  

    $(document).ready(function () {
        alert('MarkDowm');
    }); 

你也可以用 ```` ``` ```` 包裹一段代码，并指定一种语言（也可以不指定）：  
```` ```javascript````  
`$(document).ready(function () {`  
`    alert('MarkDowm');`  
`});`  
```` ``` ````
显示结果如下：  

```javascript
$(document).ready(function () {
    alert('MarkDowm');
});
```