import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTournaments,
  addTournament,
  searchTournaments
} from './tournamentsSlice';
import {
  selectLoadingStatus,
  selectTournamentsData
} from '../selectors/tournaments';
import { API_REQUEST_STATUS } from '../constants/api';
import TournamentCard from './TournamentCard';
import Input from '../components/Input';
import Button from '../components/Button';
import { CenterText } from '../components/StyledComponents';
import styles from './tournaments.module.scss';

const Tournaments = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const tournaments = useSelector(selectTournamentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const searchField = useRef();

  useEffect(() => {
    dispatch(fetchTournaments());
  }, [dispatch]);

  const handleCreate = () => {
    const newTornament = window.prompt('Tournament Name:');
    newTornament && dispatch(addTournament({ name: newTornament }));
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    e.key === 'Enter' && dispatch(searchTournaments({ name: e.target.value }));
  };

  const handleRetry = () => {
    searchField.current.value = '';
    setSearchTerm('');
    dispatch(fetchTournaments());
  };

  const filteredTournaments =
    tournaments &&
    tournaments.filter(tournament => {
      return tournament.name.toLowerCase().includes(searchTerm);
    });

  return (
    <div>
      <div className={styles.search_bar}>
        <Input
          ref={searchField}
          placeholder="Search tournament..."
          onKeyUp={handleSearch}
        />
        <Button onClick={handleCreate}>Create Tournament</Button>
      </div>
      {loading === API_REQUEST_STATUS.PENDING && (
        <CenterText>Loading tournaments...</CenterText>
      )}
      {loading === API_REQUEST_STATUS.REJECTED && (
        <CenterText>
          <p>Something went wrong.</p>
          <Button onClick={() => handleRetry()}>Retry</Button>
        </CenterText>
      )}
      {loading === API_REQUEST_STATUS.FULFILLED &&
        (filteredTournaments && filteredTournaments.length ? (
          <div className={styles.grid_container}>
            {filteredTournaments.map((tournament, idx) => (
              <TournamentCard key={idx} tournament={tournament} />
            ))}
          </div>
        ) : (
          <CenterText>No tournaments found.</CenterText>
        ))}
    </div>
  );
};

export default Tournaments;
