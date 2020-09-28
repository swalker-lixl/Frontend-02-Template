学习笔记

1. 组件的基本知识 | 组件的基本概念和基本组成部分

对象与组件

对象
Properties
Methods
Inherit

组件
Properties
Methods
Inherit
Attribute
Config&Sstate
Event
Lifecycle
Children

Attribute 强调描述性
Property 强调从属关系

Attribute
mycomponent.getAttriubte('a')
mycomponent.setAttribute('a','1')
a.getAttribute('href'); //取到的是 //网址


Property
mycomponent.a
a.href  //取到的是 http://网址


Lifecycle
created	destroyed

created
mount		mount	unmount		destroyed
JS change/set	render/update		destroyed
UserInput	render/update		destroyed

Children

Content型Children 与 Template型Children

<my-button><img src="{{icon}}">{{title}}</my-button>

<my-list>
	<li><img src="{{icon}}">{{title}}</li>
</my-list>


2. 组件的基本知识 | 为组件添加JSX语法


3. 组件的基本知识 | JSX的基本使用方法

4. 轮播组件 | 轮播组件（一）

5. 轮播组件 | 轮播组件（二）


6. 轮播组件 | 轮播组件（三）

7. 轮播组件 | 轮播组件（四）
