function drawBoard() {
	var table = document.createElement('table'),
    arr = ['','A','B','C','D','E','F','G','H',''],
    num = [,8,7,6,5,4,3,2,1],
    blackFigs1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
    whiteFigs1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1' ],
    blackFigs2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
    whiteFigs2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ],
    trr, tdd;
    for(var i=0; i<=9; i++) {
        trr = document.createElement('tr');
        for(var j=0; j<=9; j++){
            tdd = document.createElement('td');
            tdd.style.width='50px';
            tdd.style.height='50px';
            switch (i) {
                case 1:
                    tdd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    tdd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    tdd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    tdd.innerHTML = whiteFigs1[ j ];
                    break;           
            }
            if (i==9 || j==0) {
                tdd.innerText = num[i] || arr[j];}
            else if (i==0 || j==9) {
                tdd.className = 'tdd-rotate';
                tdd.innerText = num[i] || arr[j];
            } else {              
                if(i%2==j%2){
                    tdd.style.background='brown';    
                } else
                    tdd.style.background='#efe89c';    
            }
            trr.append(tdd);
        }
        table.append(trr);  
    }
    
  
    
    document.body.append(table);
}
 
drawBoard();