#### html

| 标签       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| em         | 一句话中要强调的部分（这部分内容需要重读）                   |
| strong     | 一篇文章中重要的词                                           |
| hgroup     | 标题组                                                       |
| section    | 这个标签可不仅仅是一个“有语义的 div”，它会改变 h1-h6 的语义。section 的嵌套会使得其中的 h1-h6 下降一级 |
| aside      | 表示跟文章主体不那么相关的部分，它可能包含导航、广告等工具性质的内容。 |
| nav        | 导航                                                         |
| article    | 表示文章。每一个 article 里面都有自己的 header、section、footer。 |
| address    | 地址。address 并非像 date 一样，表示一个给机器阅读的地址，而是表示“文章（作者）的联系方式”，address 明确地只关联到 article 和 body。 |
| abbr       | abbr 标签表示缩写                                            |
| hr         | hr 表示故事走向的转变或者话题的转变，                        |
| blockquote | 表示段落级引述内容                                           |
| q          | 表示行内的引述内容                                           |
| cite       | 表示引述的作品名                                             |
| time       | 日期                                                         |
| figure     | 用于表示与主文章相关的图像、照片等流内容不仅限图片，代码、表格等，只要是具有一定自包含性（类似独立句子）的内容，都可以用 figure |
| figcaption | 表示内容的标题与figure连用                                   |
| dnf        | 定义                                                         |
| ol         | 有序列表                                                     |
| pre        | 表示这部分内容是预先排版过的，不需要浏览器进行排版。         |
| samp       | 一段计算机程序的示例输出，                                   |
| code       | 表示代码                                                     |
| small      | 之前表示字体缩小的废弃标签，HTML5救回来表示补充评论          |
| s          | 之前表示划线的废弃标签，HTML5就回来表示错误的内容经常用于电商领域 |
| i          | 之前表示斜体的废弃标签，HTML5救回来表示读的时候变调          |
| b          | 之前表示黑体的废弃标签，HTML5救回来表示关键字                |
| u          | 之前表示下划线的废弃标签，HTML5救回来表示避免歧义的注记      |
| data       | 跟time类似，给机器阅读的内容，意义广泛，可以自由定义。       |
| var        | 变量，多用于计算机和数学领域                                 |
| kbd        | 用户输入，表示键盘按键居多                                   |
| sub        | 下标，多用于化学/物理/数学领域                               |
| sup        | 上标，多用于化学/物理/数学领域。                             |
| bdi，bdo   | 用于多语言混合时指定语言或者书写方向（左到右或者右到左）     |
| mark       | 表示高亮，这里并非指显示为高亮，而是从读者角度希望的高亮（注意与strong的区分） |
| wbr        | 表示可以换行的位置，主要时英文等文字不允许单词中间换行，这个标签一般在把多个单词粘成很长的单词时候用。 |
| menu       | ul的变体，用于功能菜单时使用                                 |
| dl,dd,dt   | 一般出现较为严肃的文章，对一些术语进行定义，dt和dd其实并不总是成对出现，两者是多对多的关系。 |
| main       | 整个页面只出现一个，表示页面的主要内容，可以理解为特殊的div  |





#### 导航类操作

- node
  - parentNode
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling

- parentElement
- children
- firstElememtChild
- lastElementChild
- nextElementSibling
- previousElementSibling\

#### 修改操作

- appendChild
- inserBefore
- removeChild
- replaceChild

#### 高级操作

- compareDocumentPosition是一个用于比较两个节点中关系的函数
- contains检查一个节点是否包含另一个节点的函数
- isEqualNode检查两个节点是否完全相同
- isSameNode检查两个节点是否是同一个节点，实际上在Javascript中可以用“===”。
- cloneNode复制一个节点，如果传入参数true，则会连同子元素做深拷贝。   

#### RangeAPI

> var range = new Range()
>
> range.setStart(element, 9)
>
> range.setEnd(element, 4)
>
> var range = document.getSetSelection().getRangeAt(0)
>
>  
>
> range.setStartBefore
>
> range.setEndBefore
>
> range.setStartAfter
>
> range.setEndAfter
>
> range.selectNode
>
> range.selectNodeContents
>
>  
>
> var fragement = range.extractContents()
>
> range.isnertNode(document.createTextNode("aaa"))