import React from "react";

const GoogleMap = () => {
  return (
    <>
      <iframe
        className="w-full h-[300px] md:h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.792484584729!2d90.37069687845052!3d23.790402832194673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c734c4abc47d%3A0xd696584909ddf06f!2sShewraPara%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1704294790976!5m2!1sen!2sbd"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;
