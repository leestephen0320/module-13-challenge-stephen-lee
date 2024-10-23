import type Candidate from '../interfaces/Candidate.interface';

export const removeFromStorage = (
    login: string | undefined,

  ) => {

    //! remove from storage part
    let parsedCandidates: Candidate[] = [];

    const storedCandiates = localStorage.getItem('potentialCandidates');
    if (typeof storedCandiates === 'string') {
      parsedCandidates = JSON.parse(storedCandiates);
    }
    parsedCandidates = parsedCandidates.filter(
      (film) => film.login !== login
    );
    // setPotentialCandidates(parsedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedCandidates));

    window.location.reload();
  }