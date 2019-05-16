function onBtn() {
	//文字列の保管
	var answer = [];
	var ans_sum;
	
	//チェックボックスの値を取得→false or ture
	var set_number = document.form1.inNumber.checked;
	var set_alphabet = document.form1.inAlphabet.checked;
	var set_symbol = document.form1.inSymbol.checked;
	
	//文字数の取得
	var set_number_count = document.form2.inNumberCount.value;
	
	//divのID(output)を取得
	var output_element = document.getElementById("output");
	
	//他のチェックボックスの組み合わせではなにもしない
	if(!set_number && !set_alphabet && !set_symbol)
		return;
	
	/*
	以下、計算。
	1. 数字のみ
	2. 数字、アルファベット
	3. 数字、アルファベット、記号
	4. アルファベットのみ
	5. アルファベット、記号
	6. 記号のみ
	7. 数字、記号
	
	アルファベットと記号はASCIIコード表から乱数を使って取得
	数字も1つにまとめた場合計算してしまうため文字列として扱うためASCIIコード表から取得
	*/
	
	//1. 数字のみの場合の定義
	if(set_number && !set_alphabet && !set_symbol){
		for(var i = 0; i < set_number_count; i++){
		//ASCIIコードから数字を取得（文字列として）
		answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
		}
	}
	//2. 数字とアルファベット
	else if(set_number && set_alphabet && !set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 3)){
				case 0:
					//ASCIIコードから数字を取得（文字列として）
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
					break;
				case 1:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 2:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
			}
		}
	}
	//3. すべて込み
	else if(set_number && set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 4)){
				case 0:
					//ASCIIコードから数字を取得（文字列として）
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
					break;
				case 1:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 2:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
				case 3:
					//ASCIIコードから記号を取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
					break;
					
			}
		}
	}
	//4. アルファベットのみ
	else if(!set_number && set_alphabet && !set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 2)){
				case 0:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 1:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
			}
		}
	}
	//5. アルファベット、記号
	else if(!set_number && set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 3)){
				case 0:
					//ASCIIコードから記号を取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
					break;
				case 1:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 2:
					//ASCIIコードからアルファベットを取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
			}
		}
	}
	//6. 記号のみ 
	else if(!set_number && !set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
		//ASCIIコードから記号を取得
		answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
		}
	}
	//7. 数字、記号
	else if(set_number && !set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 2)){
				case 0:
					//ASCIIコードから数字を取得（文字列として）
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
					break;
				case 1:
					//ASCIIコードから記号を取得
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
					break;
			}
		}
	}
	
	
	//1つの変数にまとめる
	ans_sum = answer[0];
	for(var i = 1; i < set_number_count; i++){
		ans_sum = ans_sum + answer[i];
	}
	//出力
	output_element.innerHTML = ans_sum;
}