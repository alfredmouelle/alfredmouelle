'use client';

import Typewriter from 'typewriter-effect';

const TypewriterText = ({
  className,
  text,
}: {
  className: string;
  text: string;
}) => {
  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        // pauseFor: 2000,
        wrapperClassName: className,
      }}
    />
  );
};

export default TypewriterText;
