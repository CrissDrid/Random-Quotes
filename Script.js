fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascrit/challenges/group_1/data/random-quotes.json"
)

  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(response);
  });