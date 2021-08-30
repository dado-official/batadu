const UserGameInfo = ({ team, stiche }) => {
    return (
        <div className="text_small  text-gray">
            <p className="-mb-1">Stiche: {stiche}</p>
            <p>Team: {team}</p>
        </div>
    );
};

export default UserGameInfo;
