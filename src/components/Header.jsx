import React from 'react';
import '../style/Header.css';
import { connect } from 'react-redux';

function Header({ avatar, name, score = 0 }) {
  return (
    <div className="header-container">
      <img data-testid="header-profile-picture" src={avatar} alt="" />
      <p data-testid="header-player-name">
        {`Jogador: ${name}`}
      </p>
      <p data-testid="header-score">
        {`${score} Pontos`}
      </p>

    </div>
  );
}

function mapProps(state) {
  return { score: state.player.score, name: state.player.name };
}

export default connect(mapProps)(Header);