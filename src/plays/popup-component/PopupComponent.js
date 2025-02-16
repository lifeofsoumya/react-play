import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import PopupCard from './components/PopupCard';
import './styles.css';

// WARNING: Do not change the entry componenet name
function PopupComponent(props) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="popup-page">
            <h3>Pass any component as children to Modal component.</h3>
            <p>Children component examples are Youtube embeds, forms, notifications, etc.</p>
            <span className="popup">
              <PopupCard popTitle="Click to open Modal">
                <div>
                  <h3>Do you like this popup?</h3>
                  <h5>Click on the button below to close the modal.</h5>
                  <p>Add anything as a component inside PopupCard</p>
                  <span className="btn-inside-popup">
                    <button className="just-a-btn">Button 1</button>
                    <button className="just-a-btn">Button 2</button>
                  </span>
                </div>
              </PopupCard>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupComponent;
