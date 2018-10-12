var result = $('#J_categoryList').find('li.category-item div.children ul.children-list li a.link')
console.log(result)
var navcontent = []
result.each(function (index, ele) {

    var item = {}
    item.img = $(this).children()[0].currentSrc
    item.name = $(this).text()
   
    navcontent.push(item)
    
})
console.log(navcontent)
$.post('/save/nav', {
    data: navcontent
});
$.get('/nav', function (resData) {
   var index=JSON.parse(resData).length
   var tar=$('#J_categoryList .category-item .children li a')
   console.log(typeof(tar))
   var arr=[]
   for(var j in tar){
       arr.push(tar[j])
   }
   console.log(arr)
   console.log(index)
   for(var i=0;i<index;i++){
    //    console.log(JSON.parse(resData)[i])
    //   var content=arr[i].innerHTML()
    //   console.log(content)
    //   content.html('<a class="link" href="https://www.mi.com/laser-projection/"><img class="thumb" src='+JSON.parse(resData)[i].img+'data-src="//i1.mifile.cn/f/i/g/2015/cn-index/14000000000.png?width=80&amp;height=80"alt="" width="40" height="40"><span class="text">'+JSON.parse(resData)[i].name+'</span></a>')
   }
})