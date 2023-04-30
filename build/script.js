'use strict'
$(document).ready(function() {
    //filter2
    let arrScheck = [
        {title: 'Велика індійська бджола', status: true},
        {title: 'Медоносна бджола', status: false},
        {title: 'Індійська бджола', status: false},
        {title: 'Арликова бджола', status: false},
    ];

    let checkList = $('.filter-type-items');

    function generateFilterCheck() {
        checkList.text('');
        arrScheck.forEach(elem => {
            checkList.append(`<li class="filter-type-item ${elem.status === true && 'checked'}">
                                <span class="filter-check"></span>
                                <span class="filter-type-text">${elem.title}</span>                                                       
                              </li>`);
        })
    }

    generateFilterCheck();

    checkList.delegate('li', 'click', function(){
        let target = $(this).find(".filter-type-text").text();
        
        arrScheck.map(elem => {
            if(elem.title === target && elem.status === true) {
                elem.status = false;
            } else if (elem.title === target && elem.status === false) {
                elem.status = true;
            }                        
        })
        
        generateFilterCheck();
    })

    // select filter3
    let star = $('.filter-vote-items');
    let arrStar = [0,0,0,0,0]

    function generateFilter(arr) {
        star.text('');
        arr.forEach((elem, index) => {
            star.append(`<li class="filter-vote-item" data-rate="${index}">
                            <svg class="filter-vote-star"><use xlink:href='${elem === 0 ? '#star' : '#star_checked' }'/></svg>
                        </li>`);
        })
    }
    generateFilter(arrStar);

    star.delegate('li', 'click', function(){
        arrStar = [0,0,0,0,0];
        arrStar.fill(1, 0, $(this).data('rate')+1 )
        
        generateFilter(arrStar);
    });


    // select filter4
    let check = $('.filter-producer-items');
    
    check.delegate('li', 'click', function() {
        console.dir($(this).siblings('li'));
        $(this)      
            .addClass('checked')
            .siblings('li')
            .removeClass('checked');
    })



    // select filter5
    let selected =  $('.filter-characteristic-selected');
    let selected_text =  $('.filter-characteristic-text');
    let list =  $('.filter-characteristic-items');

    let arr = [
        {
            title: 'Велика індійська бджола',
            status: false
        }, 
        {
            title: 'Медоносна бджола',
            status: false
        }, 
        {
            title: 'Індійська бджола',
            status: false
        }, 
        {
            title: 'Арликова бджола',
            status: false
        }];

    function generateList() {
        list.html('');

        arr.forEach(elem => {
            list.append(`<li class="filter-characteristic-item ${elem.status && 'select'}">${elem.title}</li>`)
        })
    } 
    
    function generateSelectedList() {
        selected_text.html('');

        let temp = arr.filter(elem => elem.status===true);

        temp.forEach(elem => selected_text.append(`<span><span class="delete">&times;</span><span class="text">${elem.title}</span></span>`))
    }

    selected.click(function() {
       list.toggleClass('hidden');       
       generateList();
       
    })

    list.delegate('li', 'click', function(){
        arr.map((elem) => {
            if(elem.title === $(this).text()) {
                elem.status = true;
            }
        })
        generateList();
        generateSelectedList()       
        list.addClass('hidden');
    })

    selected.delegate('.delete','click', function() {
        arr.map((elem) => {
            if(elem.title === $(this).next().text()) {
                elem.status = false;
            }
        })
        console.log($(this).next().text());
        // $(this).parent().remove();
        generateSelectedList();
        list.addClass('hidden');
    })



    // toggle filter6

    $('.filter-clothes-item').click(function() {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
    })
})