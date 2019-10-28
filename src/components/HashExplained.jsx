import React from 'react';

import ExternalLink from './ExternalLink';

const HashExplained = () => {
  return (
    <div>
      <div
        className="popup instruction-box"
        id="hash-info"
      >
        <p className="instruction-title" >Instructions:</p>
        <ol>
          <li>
            <ExternalLink
              className="md5Link"
              href="http://www.miraclesalad.com/webtools/md5.php"
            >
              Visit this link
            </ExternalLink>
            &nbsp;to generate a hash.
          </li>
          <li>Enter a lowercase string.<br />e.g. "stack" (without quotes)</li>
          <li>Copy the generated hash (32 characters).<br />e.g. d41d8cd98f00b204e9800998ecf8427e</li>
          <li>Enter the hash into the input.</li>
        </ol>
      </div>
    </div>
  );
}

export default HashExplained;
