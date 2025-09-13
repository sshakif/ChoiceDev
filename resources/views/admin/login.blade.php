<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            width: 300px;
        }

        h2 {
            text-align: center;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        .error {
            color: red;
            font-size: 12px;
            margin-top: -10px;
        }
    </style>
</head>

<body>

    <div class="login-container">
        <h2>Admin Login</h2>

        @if (session('error'))
            <div id="error-message"
                style="color: red; background-color: #f8d7da; border: 1px solid red; padding: 10px; border-radius: 5px; position: relative;">
                {{ session('error') }}
                <span onclick="document.getElementById('error-message').style.display='none';"
                    style="position: absolute; top: 5px; right: 10px; cursor: pointer; font-weight: bold; color: red;">
                    &times;
                </span>
            </div>
        @endif

        <form action="{{ route('admin.login_submit') }}" method="POST">
            @csrf
            <input type="text" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>

        </form>
    </div>

</body>

</html>
