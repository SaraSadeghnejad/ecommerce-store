import React from 'react'
import Replicate from 'replicate';

const page = async() => {
  const replicate = new Replicate({
    auth: "YOUR_REPLICATE_API_TOKEN",
  });
  const output = await replicate.run(
    "lucataco/deepseek-r1-70b",
    {
      input: {
        prompt: "Explain the theory of relativity.",
      },
    }
  );
  console.log(output);
  return (
    <div>page</div>
  )
}

export default page