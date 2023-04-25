import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Configuration, OpenAIApi } from 'openai';
import toast from 'react-hot-toast';
const Chat = () => {
  const [isActive, setActive] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateResponse = async () => {
    if (!prompt) {
      toast.warning('Enter question...');
    } else {
      toast.success('ChatBot is thinking');
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Q: ${prompt}\nA:`,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      setResult(response.data.choices[0].text);
      setQuestion(prompt);
      setPrompt('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse();
  };

  return (
    <div className={`${isActive && 'w-80'}`}>
      <button
        className={`${
          isActive ? 'hidden' : 'block'
        } px-6 py-2 text-white bg-blue-500 rounded-lg border-blue-500 hover:bg-blue-600 transition-all duration-500`}
        onClick={() => setActive(true)}
      >
        Open Chat Now
      </button>
      <div
        className={`${
          !isActive ? 'hidden' : 'block'
        } rounded-lg z-40 bg-slate-600 shadow-lg h-[80vh] relative py-12`}
      >
        {result && (
          <div>
            <div className="bg-slate-800 p-2 text-white text-lg">
              Q: {question}
            </div>
            <div className="px-2 text-white">R: {result}</div>
          </div>
        )}
        <button
          className="absolute top-0 left-0 p-2 rounded-tl-lg bg-white"
          onClick={() => setActive(false)}
        >
          <AiOutlineClose className="text-xl font-bold" />
        </button>
        <div className="absolute bottom-0 w-full">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-[90%] p-2 rounded-bl-lg outline-none"
              placeholder="Ask Question...?"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                setResult('');
              }}
            />
            <button
              type="submit"
              className="text-white py-3 px-2 w-[10%] bg-slate-900"
            >
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
