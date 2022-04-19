function obliczanieNWD(m, n) {
	
	while (m != n) {
		
		
		if (m < n) {
			
			n = n - m;
			
		}
		
		else {
			
			m = m - n;
			
		}
		
	}
	
	return m;
	
	
}


function obliczanieNWW(m, n) {
	
	m = (m * n) / obliczanieNWD(m, n);
	
	return m;
	
}

function obliczanieNWD_N_liczb(tablicaLiczb, iloscLiczb_W_Tablicy) {
	
	var NWD_X = tablicaLiczb[0];
	
	for (i = 1; i < iloscLiczb_W_Tablicy; i++) {
		
		NWD_X = obliczanieNWD(parseInt(NWD_X), parseInt(tablicaLiczb[i]));
		
	}
	
	return NWD_X;
	
}


function obliczanieNWW_N_liczb(tablicaLiczb, iloscLiczb_W_Tablicy) {
	
	var NWW_X = tablicaLiczb[0];
	
	for (i = 1; i < iloscLiczb_W_Tablicy; i++) {
		
		NWW_X = obliczanieNWW(parseInt(NWW_X), parseInt(tablicaLiczb[i]));
		
	}
	
	return NWW_X;
	
}





function myFunction() {


var liczby_W_Stringu = document.getElementById('liczby').value
var liczby = liczby_W_Stringu.split(' ');


var wynikNWD = obliczanieNWD_N_liczb(liczby, liczby.length);
var wynikNWW = obliczanieNWW_N_liczb(liczby, liczby.length);


document.getElementById("NWD_i_NWW_Liczb").innerHTML = `NWD = ${wynikNWD} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NWW = ${wynikNWW}`;


}