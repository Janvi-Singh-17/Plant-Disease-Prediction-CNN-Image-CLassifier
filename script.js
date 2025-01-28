
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const uin = document.getElementById('uin').value;
        const password = document.getElementById('password').value;

        // Basic validation (you can add more complex validation as needed)
        if (uin === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Here, you would typically send the form data to a server-side script for authentication
        // You can use AJAX or Fetch API to make an HTTP request.
        // For example:

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uin, password })
        })
        .then(response => {
            if (response.ok) {
                // Handle successful login, e.g., redirect to a dashboard
                window.location.href = '/dashboard';
            } else {
                // Handle login failure, e.g., display an error message
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });

  const forgotPasswordForm = document.getElementById('f
    
    
    
    
    
    
    
    ');

  forgotPasswordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Basic validation (you can add more complex validation as needed)
    if (email === '') {
      alert('Please enter your email address.');
      return;
    }

    // Here, you would typically send an email to the user with a password reset link
    // You can use a library like EmailJS or a server-side script to send the email.
    // For example:

    fetch('/send-password-reset-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (response.ok) {
        // Handle successful email sending, e.g., display a success message
        alert('Password reset email sent. Please check your inbox.');
      } else {
        // Handle email sending failure, e.g., display an error message
        alert('Failed to send password reset email. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });
