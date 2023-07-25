function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.Value == 0) {
        window.alert('digite o numero')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML=''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}