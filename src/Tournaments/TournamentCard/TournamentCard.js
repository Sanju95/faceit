import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTournament, deleteTournament } from '../tournamentsSlice';
import H6 from '../../components/H6';
import Button from '../../components/Button';
import styles from '../../Tournaments/tournaments.module.scss';

const TournamentCard = ({ tournament, name }) => {
  const dispatch = useDispatch();

  const handleEditAction = () => {
    const newName = window.prompt('New Tournament Name:', tournament.name);
    newName && dispatch(updateTournament({ id: tournament.id, name: newName }));
  };

  const handleDeleteAction = () => {
    const confirm = window.confirm(
      'Do you really want to delete this tournament?'
    );
    confirm && dispatch(deleteTournament({ id: tournament.id }));
  };
  return (
    <div className={styles.tournament_card}>
      <H6>{tournament.name}</H6>
      <label>Organizer: {tournament.organizer}</label>
      <label>Game: {tournament.game}</label>
      <label>
        Participants:
        {` ${tournament.participants &&
          tournament.participants.current}/${tournament.participants &&
          tournament.participants.max}`}
      </label>
      <label>
        Start: {new Date(tournament.startDate).toLocaleString('en-GB')}
      </label>
      <div className={styles.action_button_wrap}>
        <Button className={styles.action_button} onClick={handleEditAction}>
          Edit
        </Button>
        <Button className={styles.action_button} onClick={handleDeleteAction}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TournamentCard;
