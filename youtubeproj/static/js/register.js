console.log('register working --- .. ');
const usernamefield = document.querySelector('#usernameField');
const feedbackArea = document.querySelector('.invalid_feedback');
const emailfeedbackArea = document.querySelector('.emailfeedbackArea');
const passwordField = document.querySelector('#passwordField');
const emailField = document.querySelector('#emailField');
const usernameSuccessOutput = document.querySelector('.usernameSuccessOutput');
const showPasswordToggle = document.querySelector('.showPasswordToggle');
const submitBtn = document.querySelector('.submit-btn');

const handleToggleInput = (e) => {
	console.log('clicked-');

	if (showPasswordToggle.textContent === 'SHOW') {
		showPasswordToggle.textContent = 'HIDE';
		passwordField.setAttribute('type', 'text');
	} else {
		showPasswordToggle.textContent = 'SHOW';
		passwordField.setAttribute('type', 'password');
	}
};

showPasswordToggle.addEventListener('click', handleToggleInput);

// event liseter for email

emailField.addEventListener('keyup', (e) => {
	console.log('77777777', 88888888888);
	const emailVal = e.target.value;
	// console.log('username value ', usernameVal);

	emailField.classList.remove('is-invalid');
	emailfeedbackArea.style.display = 'none';

	if (emailVal.length > 0) {
		fetch('/authentication/validate-email/', {
			body: JSON.stringify({ email: emailVal }),
			method: 'POST',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('data', data);
				if (data.email_error) {
					// submitBtn.setAttribute('disabled',"disabled")
					submitBtn.disabled = true;
					emailField.classList.add('is-invalid');
					emailfeedbackArea.style.display = 'block';
					emailfeedbackArea.innerHTML = `<p>${data.email_error}</p>`;
				} else {
					submitBtn.removeAttribute('disabled');
				}
			});
	}
});

// event liseter for username

usernamefield.addEventListener('keyup', (e) => {
	console.log('77777777', 77777777777);
	const usernameVal = e.target.value;
	// console.log('username value ', usernameVal);
	usernameSuccessOutput.textContent = `Checking ${usernameVal}`;
	usernamefield.classList.remove('is-invalid');
	feedbackArea.style.display = 'none';

	if (usernameVal.length > 0) {
		fetch('/authentication/validate-username/', {
			body: JSON.stringify({ username: usernameVal }),
			method: 'POST',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('data', data);
				usernameSuccessOutput.style.display = 'none';
				if (data.username_error) {
					submitBtn.disabled = true;
					usernamefield.classList.add('is-invalid');
					feedbackArea.style.display = 'block';
					feedbackArea.innerHTML = `<p>${data.username_error}</p>`;
				} else {
					submitBtn.removeAttribute('disabled');
				}
			});
	}
});
