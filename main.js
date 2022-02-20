const area = document.getElementById('area');
// ходы: четный - крестик, нечетный - нолик
let move = 0;
let result = '';
// куда передаем результат
const contentWrapper = document.getElementById('content');
// переменная отвечает за показ модального окна(скрывает либо показывает)
const modalResult = document.getElementById('modal-result-wrapper')
const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('btn-close')

area.addEventListener('click', e => {
	// проверка клика внутри бокса
	if (e.target.classname = 'box') {
		// console.log(e.target);
		// если ход нечетный - то ставим крестик
		move % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
		move++;
		// вызов функции проверки, если кто-то выиграл
		check();
	} else {

	}
})

// функциия проверки, если кто-то выиграл
const check = () => {
	// обьявляем переменную, где содержатся все боксы, чтобы выяснить, кто победил
	const boxes = document.getElementsByClassName('box')
	// делаем массив выигрышных комбинаций
	const arr = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	// итерируем массив
	for (let i = 0; i < arr.length; i++) {
		if (
			boxes[arr[i][0]].innerHTML == 'x' && boxes[arr[i][1]].innerHTML == 'x' && boxes[arr[i][2]].innerHTML == 'x'
		) {
			result = 'крестики';
			prepareResult(result);
		} else if (
			boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
		) {
			result = 'нолики';
			prepareResult(result);
		}

	}
}

const prepareResult = winner => {
	contentWrapper.innerHTML = `Победили ${winner} !`;
	modalResult.style.display = 'block';
};

const closeModal = () => {
	modalResult.style.display = 'none';
	location.reload();
};

// overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
