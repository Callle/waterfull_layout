
$(function () {
    var num = 1;
    $.ajax({
        url: './data/data.php',
        type: 'post',
        dataType: 'json',
        data: {
            page: num,
            pageSize: 100
        },
        beforeSend: function () {

        },
        success: function (res) {
            var heightArr = [];
            $.each(res.items,function (i) {
                var obox = $('<div class="obox"><img src="'+res.items[i].path+'"><p>'+res.items[i].text+'</p></div>')
                $('.box').append($(obox).hide())            //追加数据，但不在页面显示出来
            })
            var width = $('.obox').width() + 22;            //一张图的宽度
            $('.obox').each(function (index, item) {
                if (index < 5) {
                    heightArr[index] = $(item).height() + 26;
                    $(item).offset({left:width*index}).show()
                } else {
                    var minItem = heightArr[0];             //最小高度
                    var minIndex = 0;                       //最小高度的下标
                    $.each(heightArr, function (i, dom) {
                        if (minItem > dom) {
                            minItem = dom;
                            minIndex = i;
                        }
                    })
                    $(item).offset({left:width*minIndex,top: minItem}).show()
                    heightArr[minIndex] += $(item).height() + 16;          //更新高度数组

                }
            })


        },
        error: function () {
            console.log('error');
        }

    })


})