# Encrypt-It! Web Application

This project is a simple web application that allows users to translate text messages into a super-secret cipher using a shift cipher. The app demonstrates basic HTML, CSS, and JavaScript integration for interactive front-end functionality.

## Features
- Encrypts text input using a shift cipher (Shift by 1 character).
- Respects uppercase and lowercase letters while ignoring numbers, spaces, and symbols.
- Reset button to clear input.
- Interactive and responsive UI with CSS animations.

## Requirements
- Web browser (Chrome, Firefox, Edge, etc.)
- No server required; works entirely in the browser.

## How to Run
1. Open `index.html` in your web browser.
2. Enter the text you want to encrypt in the textarea.
3. Select the cipher type (currently only Shift Cipher).
4. Click **Encrypt It!** to see the result.
5. Click **Reset** to clear the input.

## Example HTML (`index.html`)
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Encrypt-It!</title>
    <script src="encrypt-it.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>Encrypt-It!</h1>
      <h2>Translate any text message into a super-secret cipher!</h2>
    </header>
    <main>
      <fieldset>
        <legend>Text to Encrypt</legend>
        <textarea id="input-text" rows="10" cols="60" placeholder="Enter your message to encrypt here"></textarea>
      </fieldset>
      <fieldset>
        <legend>Encrypt Options</legend>
        <p>
          <strong>Cipher Type: </strong>
          <select id="cipher-type">
            <option value="shift">Shift Cipher</option>
          </select>
        </p>
        <button id="encrypt-it">Encrypt It!</button>
        <button id="reset">Reset</button>
      </fieldset>
      <div id="result-area">
        <h2>Result:</h2>
        <p id="result"></p>
      </div>
    </main>
  </body>
</html>
```

## Notes
- JavaScript handles encryption logic in `encrypt-it.js`.
- CSS (`style.css`) includes styling, responsive design, and animations.
- The shift cipher currently shifts each letter by 1, wrapping around the alphabet.
- Non-letter characters are preserved in the output.

## License
This project is free to use for educational purposes.
