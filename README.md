# XCalculator

A basic calculator built with React that supports basic arithmetic operations (`+`, `-`, `*`, `/`), follows **BODMAS** rules, and includes a responsive, user-friendly interface.

## 🔧 Features

- ✅ Single input field using an `<input>` element for expression display.
- ✅ Arithmetic operations: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`).
- ✅ Clear (`C`) button resets both the input and the result.
- ✅ Evaluation (`=`) of the expression using standard math order of operations (BODMAS).
- ✅ Displays output in a **single `<div>`** element.
- ✅ Handles edge cases:
  - Clicking `=` without any input → shows `Error`
  - `0 / 0` → `NaN`
  - Division by zero (e.g. `5 / 0`) → `Infinity`

## 📸 Demo Examples
```
| Example               | Input Field | Result |
|-----------------------|---------------------------|---------------------------|
| Initial Render        | Empty                     | Empty                     |
| Expression            | `77+33`                   | 110                       |
| Chained Expression    | `77+33+50+5`              | 165                       |
| Clear                 | Press `C`                 | Input & Output cleared    |
| BODMAS Rule           | `2+3*4-5/1`               | 9                         |
| Invalid               | Press `=` with no input   | `Error`                   |
| `0/0`                 | `0/0` then `=`            | `NaN`                     | 
| Division by Zero      | `5/0` then `=`            | `Infinity`                |
|-----------------------|---------------------------|----------------------------
```

## 💻 Tech Stack

- **React** (Functional Components)
- **CSS Modules** (for scoped styling)
- **Hooks**: `useState`

## 🗂️ Project Structure

```
calculator-app/
├── public/
├── src/
│ ├── components/
│ │ └── Button.js # Reusable button component
│ │ └── Button.module.css # Styling for Button component
│ ├── App.js # Main calculator logic and UI
│ ├── App.module.css # Styling for calculator layout
│ └── index.js # Entry point
```

## 🖥️ Screenshot (Initial Render)
![XCalculator UI](https://github.com/Siddharth-Bose/XCounter/blob/main/public/initial%20render.png)

## ✅ Requirements Fulfilled
 Only <button> tags used for calculator buttons.

 Only one <input> used for expression field.

 Only one <div> used for output/result display.

 Expression evaluation respects BODMAS.

 Edge case handling for =, NaN, and Infinity.

## 🛠️ Getting Started

To run the app locally:

```bash
# Clone the repo
git clone https://github.com/Siddharth-Bose/XCalculator
cd Xcalculator

# Install dependencies
npm install

# Run the development server
npm run dev

# Visit
http://localhost:5173