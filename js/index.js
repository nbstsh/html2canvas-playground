import html2canvas from 'html2canvas';
const targetEl = document.querySelector('#target');
const canvasBoxEl = document.querySelector('.canvas-box');

const convert = () => {
	html2canvas(targetEl, {})
		.then(canvas => {
			console.dir(canvas);
			canvasBoxEl.appendChild(canvas);
			canvas.scrollIntoView({ behavior: 'smooth' });
		})
		.catch(err => {
			console.error(err);
		});
};

document.querySelector('#capture').addEventListener('click', convert);
