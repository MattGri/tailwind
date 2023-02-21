import React from 'react';

const ContainerSpacing = () => {
  return (
    // <div className="container m-auto ">
    //   <article>
    //     <h3>text</h3>
    //     <p className="mt-2">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
    //       similique, nemo tenetur repellat atque odio sint omnis rerum dolore
    //       temporibus maiores vitae earum, dolorum iste aliquid. Quod saepe ipsam
    //       accusamus.
    //     </p>
    //   </article>
    // </div>
    <nav>
      <ul className="flex justify-around space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default ContainerSpacing;
