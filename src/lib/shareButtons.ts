/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  WhatsappShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  TelegramShareButton, 
  FacebookShareCount,
  WhatsappIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  TelegramIcon
} from 'react-share'
import './shareButtons.css'

class shareButtons extends Component {
  shareUrl: string
  title: string
  constructor(shareUrl: string, title: string) {
    this.shareUrl = shareUrl
    this.title = title
  }
  render() {
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
          <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
          <FacebookIcon size={32} round />
          </FacebookShareButton>
         <div>
           <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
             {count => count}
           </FacebookShareCount>
         </div>
        </div>

        <div className="Demo__some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Demo__some-network__share-button"
          >
          <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
           >
           <TwitterIcon size={32} round />
           </TwitterShareButton>
           <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
          <TelegramIcon size={32} round />
          </TelegramShareButton>
          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>
      </div>
    )
  }
}

export default shareButtons