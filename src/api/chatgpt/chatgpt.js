import axios from 'axios'

export const chatPrompt = async (req, res) => {
  const value = req.query.value;

  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/chat/completions",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a1c2ec86cfmsh026a2bca5670a2ep10d009jsnd735773d8699",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${value}"}]}`,
  };
  axios
    .request(options)
    .then(function (response) {
      const respuesta = response.data;
      return res.status(201).json({ respuesta });
    })
    .catch(function (error) {
      return res.status(404).json({ error });
    });
};
