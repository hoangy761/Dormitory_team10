var listFloor = document.getElementById('listRoom-id')
var listFloor_display = document.getElementById('listFloor-id');

listFloor.addEventListener('click', function(){
    if(listFloor_display.style.display === 'block'){
        listFloor_display.style.display = 'none'
        maps_display.style.display = 'none'
        right.style.display = 'block'
        listFloor.style.backgroundColor = '#fff'
    }else{
        listFloor_display.style.display = 'block'
        listFloor.style.backgroundColor = '#d4d7dc'
    }
})


var floor_1 = document.getElementById('floor_1-id')
var maps_display = document.getElementById('maps-id')
var right = document.getElementById('right-id')

floor_1.addEventListener('click', function(){
    if(maps_display.style.display === 'block'){
        maps_display.style.display = 'none'
        right.style.display = 'block'
        floor_1.style.backgroundColor = '#fff'
    }else{
        maps_display.style.display = 'block'
        right.style.display = 'none'
        floor_1.style.backgroundColor = '#d4d7dc'
    }
})