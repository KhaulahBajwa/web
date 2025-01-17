$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();

        const username = $('input[name="username"]').val().trim();
        const password = $('input[name="password"]').val().trim();

        if (!username || !password) {
            toastr.error('Please fill out all fields!', 'Validation Error');
        } else {
            toastr.success('Form submitted successfully!', 'Success');
        }
    });
});