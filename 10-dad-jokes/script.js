const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
    
  } catch (error) {
    console.log(error);
  }
};

jokeBtn.addEventListener('click', generateJoke)

