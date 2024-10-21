import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  //! the function part of the page
  //! ==========================================

  // Add Candidate interface to interface to state variable and set intial state obj
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    AvatarURL: '',
    Login: '',
    Location: '',
    Email: '',
    Company: '',
    Bio: '',
  });

  // Functino for adding Candidate to potential candidate list
  const addToPotential = () => {
    let parsedCandidates:Candidate[] = [];
    const storedCandiates = localStorage.getItem('potentialCandidates');
    if (typeof storedCandiates === 'string') {
      parsedCandidates = JSON.parse(storedCandiates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedCandidates));
  }

  //! ==========================================
  //! the html part of the page
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
