# Compare DOM selector with/without jQuery

## Use emmet to create compare.html

```
.container
input
input.btn
.box
.text*3>lorem
```

## select one element

- 傳統方式

```
document.getElementById('container')
document.getElementByClassName('box')
```

- Web API - querySelector

```
document.querySelector('#container')
document.querySelector('.box')
```

- jQuery way

```
$('#container')
```

## find all div

- 傳統方式

```
document.getElementById('container').getElementsByTagName('div')
document.getElementsByClassName('text')
```

- Web API - querySelector
	
```
document.querySelectorAll('#container div')
document.querySelectorAll('.text')
```

- jQuery way

```
$('#container div')
$('.text')
```

## add class

- Web API - querySelector

```
document.querySelector('.box').classList.add('red'); 
```
- jQuery way

```
$('.box').addClass('red')
```
## bind click event

- Web API - querySelector

```
document.querySelector('.btn').addEventListener('click', function() {
		console.log($(this));
});
```

- jQuery way

```
$('.btn').on('click', function() {
	console.log($(this));
});
```

## dom content loaded


- Web API - querySelector

```
document.addEventListener('DOMContentLoaded', function() {
	console.log('loaded');
});
```

- jQuery way

```
$(document).ready(function() {
	console.log('loaded');
});
```
or
```
$(function() {
  console.log('loaded');
});
```




