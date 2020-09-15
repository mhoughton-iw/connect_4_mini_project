const api = '';
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.APIKEY;

$(getInitialGameData);

// event loop
function buttonClick(event) {
  const buttonId = event.target.id;

  if (buttonId === 'reset') {
    requestReset();
  } else {
    const selectedColumn = returnLastChar(buttonId);
    requestPlaceToken(selectedColumn);
  }
}
