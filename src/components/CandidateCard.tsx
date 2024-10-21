import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProp = {
    addToPotential?: (() => void) | null;
    currentCandidate?:Candidate,
    onPotentialCandidates?: boolean | null,
    removeFromStorage?: 
  ((
    e: React.MouseEvent<SVGAElement, MouseEvent>,
    currentlyOnPotentialCandidates: boolean | null | undefined,
    login: string | null
  ) => void) | null;
};

//const CandidateCard = (prop:CandidateCardProp) => {
const CandidateCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={'https://cameronmcefee.com/img/work/the-octocat/original.jpg'} alt={'octocat'} />
            </div>
            <div className="profile-card__details">
                <h2>{'octocat'}<span>({'octocat'})</span></h2>
                <p><strong>Location:</strong> {'UK, London'}</p>
                <p><strong>Email:</strong> <a href={`mailto:${'octocat@github.com'}`}>{'octocat@github.com'}</a></p>
                <p><strong>Company:</strong> {'Github'}</p>
                <p><strong>Bio:</strong> {`I'm the mascot for everyone's favorite version control system!`}</p>
            </div>
            <div className="profile-card__actions">
                <button className="btn btn--red">
                    <span className="btn__icon">-</span>
                </button>
                <button className="btn btn--green">
                    <span className="btn__icon">+</span>
                </button>
            </div>
        </div>
    );
};

export default CandidateCard