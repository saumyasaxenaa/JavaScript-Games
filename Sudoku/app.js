const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const submission = []
const squares = 81

for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', 1)
    inputElement.setAttribute('max', 9)
    puzzleBoard.appendChild(inputElement)
}

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value)
        } else {
            submission.push('.')
        }
    })
    // console.log(submission)
}

const solve = () => {
    joinValues()
    const data = submission.join('')
    console.log('data', data)
    const options = {
      method: 'POST',
      url: 'https://solve-sudoku.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'solve-sudoku.p.rapidapi.com'
      },
      data: {
        puzzle: '2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3'
      },
    };
    axios.request(options).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.error(error)
    })
    
}
solveButton.addEventListener('click', solve)